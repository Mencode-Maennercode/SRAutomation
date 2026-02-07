import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <p className="text-[10px] technical-label opacity-50">© 2026 SR Automation. Alle Rechte vorbehalten.</p>
          </div>

          <div className="flex gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <button className="technical-label hover:text-primary transition-colors">
                  Impressum
                </button>
              </DialogTrigger>
              <DialogContent className="glass-dark border-white/10 max-w-2xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Impressum</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
                      <p>Srimugunthan Ratnasingam</p>
                      <p>SR Automation</p>
                      <p>Simmelsgartenstraße 14</p>
                      <p>53501 Grafschaft</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Kontakt</h3>
                      <p>Telefon: +49 (0) 2641 917 333 – 1</p>
                      <p>Telefax: +49 (0) 2641 917 333 – 2</p>
                      <p>E-Mail: info@srautomation.de</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Umsatzsteuer-ID</h3>
                      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE278936644</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Gewerbeanmeldung</h3>
                      <p>Die Gewerbeanmeldung nach § 14 oder § 55c GewO wurde am 01.09.2011 durch Gemeindeverwaltung Grafschaft erteilt.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Angaben zur Berufshaftpflichtversicherung</h3>
                      <p>Name und Sitz des Versicherers:</p>
                      <p>Allianz Versicherungs-AG, 10900 Berlin</p>
                      <p className="mt-1">Geltungsraum der Versicherung: Deutschland</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="technical-label hover:text-primary transition-colors">
                  Datenschutz
                </button>
              </DialogTrigger>
              <DialogContent className="glass-dark border-white/10 max-w-2xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Datenschutzerklärung</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Wer wir sind</h3>
                      <p>Die Adresse unserer Website ist: www.srautomation.de.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Verantwortlicher</h3>
                      <p>Srimugunthan Ratnasingam</p>
                      <p>SR Automation</p>
                      <p>Simmelsgartenstraße 14</p>
                      <p>53501 Grafschaft</p>
                      <p className="mt-1">E-Mail: info@srautomation.de</p>
                      <p>Telefon: +49 (0) 2641 917 333 – 1</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Erhebung und Speicherung personenbezogener Daten</h3>
                      <p>Wenn Sie unsere Website besuchen, erhebt der Hosting-Provider automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Browsertyp und -version</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                      </ul>
                      <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Kontaktformular</h3>
                      <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Eingebettete Inhalte von anderen Websites</h3>
                      <p>Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z.&nbsp;B. Videos, Bilder, Beiträge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte.</p>
                      <p className="mt-2">Diese Websites können Daten über Sie sammeln, zusätzliche Tracking-Dienste von Dritten einbetten und Ihre Interaktion mit diesem eingebetteten Inhalt aufzeichnen.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Welche Rechte Sie an Ihren Daten haben</h3>
                      <p>Sie können jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen. Darüber hinaus können Sie die Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten anfordern, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Wohin wir Ihre Daten senden</h3>
                      <p>Ihre Daten werden ausschließlich im Rahmen der beschriebenen Zwecke verarbeitet und nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung erforderlich oder Sie haben ausdrücklich eingewilligt.</p>
                    </div>
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