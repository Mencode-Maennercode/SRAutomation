export const services = [
  {
    id: "01",
    title: "Engineering",
    description: "Planung, Entwicklung und Automatisierung von Maschinen und Anlagen sowie Sistema-Berechnung für Sicherheitsnachweise.",
    category: "Engineering",
    image: "/Images/pexels-2157750954-34938429.jpg",
    images: ["/Images/pexels-2157750954-34938429.jpg"]
  },
  {
    id: "02",
    title: "Sondermaschinenbau & Steuerungsbau",
    description: "Sondermaschinenbau, Steuerungsbau sowie Modernisierung von Prozess- und Produktionsanlagen.",
    category: "PRODUCTION",
    image: "/Images/sonder.jpg",
    images: ["/Images/sonder.jpg", "/Images/flaschen.png", "/Images/flaschen2.png", "/Images/wanne.png"],
    tags: ["Automatisierung", "Anlagenbau", "Steuerungstechnik", "Touch-Screen", "Rezepturverwaltung", "SPS"],
    memberOf: { name: "BUNDESVERBAND MILCHDIREKTVERMARKTER UND VORZUGSMILCHERZEUGER", url: "https://milch-und-mehr.de/" }
  },
  {
    id: "03",
    title: "VDE Prüfung",
    description: "Gesetzlich vorgeschriebene Prüfung elektrischer Betriebsmittel und Anlagen nach VDE.",
    category: "SAFETY",
    image: "/Images/dguv1.jpeg",
    images: ["/Images/dguv1.jpeg"],
    checkPoints: [
      "gemäß der EN60204:2010-05 / DIN VDE 0100-600:2008-06 / DIN VDE 0105-100:2009-10",
      "Sichtprüfung",
      "Durchgängigkeit des Schutzleiters",
      "Isolationswiderstandsmessung",
      "RCD-Prüfung",
      "Schleifenimpedanz",
      "Netzinnenwiderstand",
      "Funktionsprüfung"
    ]
  },
  {
    id: "04",
    title: "Schaltschrank-Bau",
    description: "Professioneller Schaltschrank-Bau nach höchsten Qualitätsstandards.",
    category: "PRODUCTION",
    image: "/Images/schalt1.jpeg",
    images: ["/Images/schalt1.jpeg", "/Images/schalt2.jpeg", "/Images/schalt3.jpeg", "/Images/schaltschrankplan.png", "/Images/schalt1.png", "/Images/schalt2.jpg"],
    tags: ["Schaltschrankbau", "Planung", "Elektrotechnik", "Normgerecht", "Schlüsselfertig"]
  },
  {
    id: "05",
    title: "Erneuerbare Energien",
    description: "Komplexe maßgeschneiderte Anlagen für nachhaltige Energielösungen.",
    category: "ENERGY",
    image: "/Images/erneuerbar.jpg",
    images: ["/Images/erneuerbar.jpg", "/Images/erneuerbare_Energie.png", "/Images/enereuerbare_energie2.png"],
    tags: ["Dienstwagen Wallbox", "Fronius", "Automatische Notstromabschaltung", "ENWITEC", ">135KWp", "Photovoltaik"]
  },
  {
    id: "06",
    title: "Montage & Inbetriebnahme",
    description: "Montage, Inbetriebnahme und Reparatur von Maschinen und Prozessanlagen.",
    category: "SERVICE",
    image: "/Images/montage.png",
    images: ["/Images/montage.png"]
  }
];

export const projects = [
  {
    title: "Hof Fuhlreit",
    client: "Direktvermarkter",
    year: "2022",
    description: "Maßgeschneiderte Automatisierungslösung für den landwirtschaftlichen Direktvermarkter Hof Fuhlreit. Moderne Steuerungstechnik für effiziente Produktionsabläufe.",
    detailDescription: "Die Lösung umfasst die vollständige Automatisierung der Produktionsabläufe mit Fokus auf Flexibilität und Zuverlässigkeit. Besonders wichtig war die einfache Bedienbarkeit, damit auch ungelernte Mitarbeiter die Anlage sicher betreiben können.",
    tags: ["Direktvermarktung", "Automatisierung"],
    image: "/Images/Fuhl1.png",
    images: ["/Images/Fuhl1.png", "/Images/Fuhl2.png", "/Images/Fuhl3.png"]
  },
  {
    title: "Speetenhof",
    client: "Direktvermarkter",
    year: "2022",
    description: "Individuelle Anlagen- und Steuerungslösungen für den Speetenhof. Integration modernster Sicherheitsstandards und benutzerfreundlicher Bedienoberflächen.",
    detailDescription: "Bei diesem Projekt stand die Sicherheit an erster Stelle. Alle Sicherheitseinrichtungen wurden nach aktuellen Normen implementiert und ausführlich dokumentiert. Die Schulung des Personals erfolgte direkt vor Ort während der Inbetriebnahme.",
    tags: ["Anlagenbau", "Sicherheitstechnik"],
    image: "/Images/speet1.png",
    images: ["/Images/speet1.png", "/Images/speet2.png", "/Images/speet3.png", "/Images/speet4.png"]
  },
  {
    title: "Seebodenhof",
    client: "Direktvermarkter",
    year: "2021",
    description: "Komplettlösung im Bereich Steuerungs- und Anlagenbau für den Seebodenhof. Von der Planung über die Installation bis hin zur Inbetriebnahme.",
    detailDescription: "Als Generalunternehmer haben wir alle Gewerke koordiniert und eine nahtlose Integration aller Systeme sichergestellt. Die termingerechte Fertigstellung trotz enger Zeitvorgaben war eine besondere Herausforderung, die wir erfolgreich gemeistert haben.",
    tags: ["Komplettlösung", "Inbetriebnahme"],
    image: "/Images/see1.png",
    images: ["/Images/see1.png", "/Images/see2.png", "/Images/see3.png", "/Images/see4.png"],
    imagePositions: ["center center", "center center", "center center", "center center"]
  }
];

export const feedback = [
  { rating: 5, comment: "Bei der freundlichen und kompetenten Beratung vor Ort wurde das Angebot passend auf meine Bedürfnisse abgestimmt. Vom Angebot bis zur Installation perfekte Abwicklung. Super freundliches Team auf der Baustelle. Sehr Fachkundig und hilfsbereit. Vom ersten Kontakt bis zum letzten Meter Kabelkanal wurde alles zu meiner vollsten Zufriedenheit abgewickelt. Ich kann S+R vorbehaltlos weiter empfehlen." },
  { rating: 5, comment: "Der Kontakt und die Abwicklung des Auftrags war ausgezeichnet - es hat alles zu meiner vollsten Zufriedenheit geklappt" },
  { rating: 5, comment: "Fa. SR Automation hat bei uns eine Wallbox installiert. Nach einer unkomplizierten Kontaktaufnahme hat uns Herr Ratnasingam ausführlich beraten und die Arbeiten kurzfristig, pünktlich und professionell durchgeführt. Das Ganze zu einem sehr fairen Preis. Wir sind sehr zufrieden mit der Arbeit und dem hervorragenden Service. Von uns eine ganz klare Empfehlung. Vielen Dank!" },
  { rating: 5, comment: "Vor der Umsetzung habe ich eine fundierte Beratung erhalten, und das Angebot wurde exakt entsprechend den verwendeten Materialien und Preisen umgesetzt. Die Arbeit wurde innerhalb eines Tages abgeschlossen und der Arbeitsplatz wurde in einem einwandfreien Zustand hinterlassen" },
  { rating: 5, comment: "Total freundlich zuverlässig und kompetent. Wallbox installiert und Preis eingehalten. Danke!" },
  { rating: 5, comment: "SR Automation hat den Auftrag freundlich, professionell und meiner höchsten Zufriedenheit ausgeführt. Im Zuge der Kontaktaufnahme hat Herr R. sich bestens auf den Auftrag vorbereitet und notwendige Sicherungsschalter mitgebracht um den Smart Meter sofort installieren zu können. Ich kann die Zusammenarbeit mit SR Automation uneingeschränkt weiterempfehlen. Vielen Dank! :)" },
  { rating: 5, comment: "Wallbox und PV Anlage mit Speicher . Komplette Neuverdrahtung in der Unterverteilung. Sehr kompetent in Beratung und Ausführung . Pünktliche Installation, schnelle und zuvorkommende Abwicklung. Freundliches und sauberes auftreten . Kostengünstige Lösungsvorschläge." },
  { rating: 5, comment: "Installiert wurde eine PV Anlage inkl. Speicher und Notstromversorgung. Bei Angebotserstellung und Planung der Arbeiten gab es einen ständigen Austausch. Sonderwünsche wurden berücksichtigt und Eigenleistung im Rahmen meiner Möglichkeit akzeptiert. Wie bei jedem Projekt gab es ein, zwei Schwierigkeiten, die aber in Ruhe, mit Bedacht und professionell gelöst wurden. Ingesamt würde ich jederzeit wieder einen Auftrag vergeben." },
  { rating: 5, comment: "Auch wenn es mal nicht direkt so funktioniert wie geplant, kann man sich drauf verlassen, dass das Projekt mit Erfolg zum Abschluss gebracht wird. Vielen Dank dafür" },
  { rating: 5, comment: "Sehr kompetent. Absolut zu empfehlen." },
  { rating: 5, comment: "Top Beratung vor Auftragserteilung und anschließender erster netter Kontakt. Zügige Terminvereinbarung und tolle Umsetzung des Projektes" },
  { rating: 5, comment: "Von Anfang bis Ende kompetente Beratung, Ausarbeitung und Durchführung des Auftrages. Die Arbeiten wurden fachgerecht erledigt. Unerwartete Probleme wurden direkt behoben. Die Baustelle wurde sauber verlassen (hatte ich so noch nie, auch Danke dafür). Toller Service, tolle Arbeit! Vielen Dank" },
  { rating: 5, comment: "Ich kann der Firma SR Automation nur Lob zollen. Eine mehr als perfekte Arbeit die termingerecht ausgeführt wurde. Alle erforderlichen Arbeiten wurden schnell, sauber und professionell ausgeführt. Die Beratung durch die Firma SR Automation war von hoher Kenntnis und großem Fachwissen. Die Kommunikation verlief während der Bauzeit der PV Anlage ebenfalls völlig problemlos. Wir waren während der Bauzeit in ständigem Kontakt. Wir sind froh das wir den Auftrag an die Firma SR Automation vergeben haben." },
  { rating: 5, comment: "Alles ordentlich erledigt. Gerne wieder." }
];

export const partners = [
  { name: "Partner 1", logo: "/Images/f1.jpg" },
  { name: "Zipfelmilch", logo: "/Images/Zipfelmilch_Logo1.png" },
  { name: "Partner 2", logo: "/Images/f2.png" },
  { name: "Partner 4", logo: "/Images/f4.png" },
  { name: "Partner 5", logo: "/Images/f5.png" },
  { name: "Partner 6", logo: "/Images/f6.png" },
  { name: "Partner 7", logo: "/Images/f7.png" },
  { name: "Partner 8", logo: "/Images/f8.png" },
  { name: "Partner 9", logo: "/Images/f9.jpg" },
  { name: "Partner 10", logo: "/Images/f10.png" },
  { name: "Nestlé Purina", logo: "/Images/Nestle_Purina_Logo.jpg" }
];