"""
One-shot image cleanup for SR Automation site.
1. Move unused images out of public/Images into public/Images/unused_images.
2. Crop bottom strip of AI-generated images that have a Gemini sparkle watermark.
3. Re-encode/resize huge images for faster popup loading.
"""

from pathlib import Path
import shutil
from PIL import Image

IMG_DIR = Path(__file__).parent / "public" / "Images"
UNUSED_DIR = IMG_DIR / "unused_images"

USED = {
    # Services
    "pexels-2157750954-34938429.jpg",
    "sonder.jpg", "flaschen.png", "flaschen2.png", "wanne.png",
    "dguv1.jpeg",
    "schalt1.jpeg", "schalt2.jpeg", "schalt3.jpeg",
    "schaltschrankplan.png", "schalt1.png", "schalt2.jpg",
    "erneuerbar.jpg", "erneuerbare_Energie.png", "enereuerbare_energie2.png",
    "montage.png",
    # Projects
    "Fuhl1.png", "Fuhl2.png", "Fuhl3.png",
    "speet1.png", "speet2.png", "speet3.png", "speet4.png",
    "see1.png", "see2.png", "see3.png", "see4.png",
    # Partners
    "f1.jpg", "Zipfelmilch_Logo1.png", "f2.png", "f4.png", "f5.png",
    "f6.png", "f7.png", "f8.png", "f9.jpg", "f10.png",
    "Nestle_Purina_Logo.jpg",
    "Herter.png", "sistema.png", "ibc.png",
    # Other
    "technical-circuitry.svg",
    "hero-background.jpeg",
}

# Images that contain the Gemini sparkle watermark in bottom-right corner.
WATERMARKED = {
    "Fuhl1.png", "Fuhl2.png", "Fuhl3.png",
    "speet1.png", "speet2.png", "speet3.png", "speet4.png",
    "erneuerbare_Energie.png", "enereuerbare_energie2.png",
    "flaschen.png", "flaschen2.png",
    "wanne.png", "montage.png",
    "schalt1.png", "schaltschrankplan.png",
}

# Max dimensions / quality for re-encode pass.
MAX_DIM = 1800       # max width or height in pixels
JPEG_QUALITY = 82
LARGE_THRESHOLD = 600 * 1024  # 600 KB - images bigger than this get recompressed


def move_unused():
    UNUSED_DIR.mkdir(exist_ok=True)
    moved = []
    for f in IMG_DIR.iterdir():
        if not f.is_file():
            continue
        if f.name not in USED:
            target = UNUSED_DIR / f.name
            shutil.move(str(f), str(target))
            moved.append(f.name)
    print(f"Moved {len(moved)} unused images:")
    for n in moved:
        print(f"  - {n}")


def crop_watermarks():
    """Crop a small bottom strip (~6%) so the sparkle watermark disappears."""
    for name in WATERMARKED:
        p = IMG_DIR / name
        if not p.exists():
            print(f"  SKIP missing {name}")
            continue
        with Image.open(p) as im:
            w, h = im.size
            crop_px = max(40, int(h * 0.06))
            box = (0, 0, w, h - crop_px)
            cropped = im.crop(box)
            save_kwargs = {}
            fmt = im.format
            # Preserve original format
            cropped.save(p, format=fmt, **save_kwargs)
        print(f"  CROPPED {name} (-{crop_px}px bottom)")


def shrink_large():
    """Resize and re-encode any remaining images that are still large."""
    for p in IMG_DIR.iterdir():
        if not p.is_file():
            continue
        if p.suffix.lower() not in (".jpg", ".jpeg", ".png"):
            continue
        size_before = p.stat().st_size
        if size_before < LARGE_THRESHOLD:
            continue
        try:
            with Image.open(p) as im:
                im.load()
                w, h = im.size
                changed = False
                if max(w, h) > MAX_DIM:
                    im.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)
                    changed = True
                ext = p.suffix.lower()
                if ext in (".jpg", ".jpeg"):
                    if im.mode != "RGB":
                        im = im.convert("RGB")
                    im.save(p, format="JPEG", quality=JPEG_QUALITY,
                            optimize=True, progressive=True)
                    changed = True
                elif ext == ".png":
                    # Re-save with optimize; if huge photo PNG, also save as JPEG sibling? Skip - keep format.
                    im.save(p, format="PNG", optimize=True)
                    changed = True
            size_after = p.stat().st_size
            if changed:
                print(f"  SHRUNK {p.name}: {size_before//1024}KB -> {size_after//1024}KB")
        except Exception as e:
            print(f"  ERROR processing {p.name}: {e}")


if __name__ == "__main__":
    print("=== Moving unused images ===")
    move_unused()
    print("\n=== Cropping watermark from AI images ===")
    crop_watermarks()
    print("\n=== Shrinking large images ===")
    shrink_large()
    print("\nDone.")
