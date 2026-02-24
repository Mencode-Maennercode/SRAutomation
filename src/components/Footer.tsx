"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center">
              <img 
                src="/SR_logo-1024x424.png" 
                alt="SR Automation" 
                className="h-12 md:h-16 w-auto transition-all duration-500" 
              />
            </div>
            <p className="text-[10px] technical-label opacity-50">{t.footer.rights}</p>
          </div>

          <div className="flex gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <button className="technical-label hover:text-primary transition-colors">
                  {t.footer.imprint}
                </button>
              </DialogTrigger>
              <DialogContent className="glass-dark border-white/10 max-w-2xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">{t.footer.imprintTitle}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6 text-sm text-muted-foreground">
                    {t.footer.imprintContent.map((section) => (
                      <div key={section.heading}>
                        <h3 className="text-white font-semibold mb-2">{section.heading}</h3>
                        {section.text.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="technical-label hover:text-primary transition-colors">
                  {t.footer.privacy}
                </button>
              </DialogTrigger>
              <DialogContent className="glass-dark border-white/10 max-w-2xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">{t.footer.privacyTitle}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6 text-sm text-muted-foreground">
                    {t.footer.privacyContent.map((section) => (
                      <div key={section.heading}>
                        <h3 className="text-white font-semibold mb-2">{section.heading}</h3>
                        {section.text.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}