export default function Footer() {
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
            <p className="text-[10px] technical-label opacity-50">© 2026 SR Automation GmbH. Alle Rechte vorbehalten.</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="technical-label hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="technical-label hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="technical-label hover:text-primary transition-colors">AGB</a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="technical-label text-green-500/80">SYSTEM_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}