export const services = [
  {
    id: "01",
    title: "Engineering",
    description: "Planung, Entwicklung und Automatisierung von Maschinen und Anlagen.",
    category: "Engineering",
    image: "/Images/pexels-2157750954-34938429.jpg",
  },
  {
    id: "02",
    title: "Sondermaschinenbau & Steuerungsbau",
    description: "Sondermaschinenbau, Steuerungsbau sowie Modernisierung von Prozess- und Produktionsanlagen.",
    category: "PRODUCTION",
    image: "/Images/sonder.jpg",
  },
  {
    id: "03",
    title: "DGUV V3 Prüfung & Sistema-Berechnung",
    description: "Gesetzlich vorgeschriebene regelmäßige Überprüfung von elektrischen Betriebsmitteln und Anlagen nach VDE.",
    category: "SAFETY",
    image: "/Images/dguv.jpg",
  },
  {
    id: "04",
    title: "Schaltschrank-Bau",
    description: "Professioneller Schaltschrank-Bau nach höchsten Qualitätsstandards.",
    category: "PRODUCTION",
    image: "/Images/schaltbau.png",
  },
  {
    id: "05",
    title: "Erneuerbare Energien",
    description: "Komplexe maßgeschneiderte Anlagen für nachhaltige Energielösungen.",
    category: "ENERGY",
    image: "/Images/elektro.jpg",
  },
  {
    id: "06",
    title: "Montage & Inbetriebnahme",
    description: "Montage, Inbetriebnahme und Reparatur von Maschinen und Prozessanlagen.",
    category: "SERVICE",
    image: "/Images/montage.png",
  }
];

export const projects = [
  {
    title: "Flaschenwaschanlage & Etikettenlöser",
    client: "Getränkeindustrie",
    year: "2023",
    description: "Vollautomatische Flaschenwaschanlage mit integriertem Etikettenlöser für die Getränkeindustrie. Moderne Steuerungstechnik sorgt für maximale Effizienz und Ressourcenschonung im laufenden Betrieb.",
    detailDescription: "Die Implementierung dieser hochmodernen Anlage erfolgte in enger Zusammenarbeit mit dem Produktionsteam. Durch intelligente Sensorik und präzise Steuerungsalgorithmen konnte der Wasserverbrauch um 30% reduziert werden, während gleichzeitig die Reinigungsqualität deutlich verbessert wurde.",
    tags: ["Automatisierung", "Anlagenbau", "Steuerungstechnik"],
    image: "/Images/flaschen.png",
    images: ["/Images/flaschen.png", "/Images/flaschen2.png"]
  },
  {
    title: "Wannenpasteur",
    client: "Lebensmittelproduktion",
    year: "2023",
    description: "Touch-Screen-Steuerung mit Rezepturverwaltung für Ihre Produkte. Individuelle Pasteurisierungsprogramme gewährleisten höchste Produktqualität bei optimaler Energieeffizienz.",
    detailDescription: "Das System wurde mit einer intuitiven Benutzeroberfläche ausgestattet, die es dem Bedienpersonal ermöglicht, verschiedene Produktrezepturen zu verwalten und anzupassen. Die präzise Temperaturregelung garantiert konstante Produktqualität bei minimalem Energieeinsatz.",
    tags: ["Touch-Screen", "Rezepturverwaltung", "SPS"],
    image: "/Images/wanne.png",
    images: ["/Images/wanne.png"]
  },
  {
    title: "Schaltschrankplanung & -bau",
    client: "Industriekunden",
    year: "2024",
    description: "Professionelle Planung und Fertigung von Schaltschränken nach neuesten Normen und Standards. Von der Konzeption bis zur schlüsselfertigen Übergabe aus einer Hand.",
    detailDescription: "Jeder Schaltschrank wird nach individuellen Kundenanforderungen geplant und gefertigt. Dabei legen wir besonderen Wert auf übersichtliche Verdrahtung, optimale Kühlungskonzepte und einfache Wartbarkeit. Alle Komponenten werden sorgfältig ausgewählt und dokumentiert.",
    tags: ["Schaltschrankbau", "Planung", "Elektrotechnik"],
    image: "/Images/schaltschrankplan.png",
    images: ["/Images/schaltschrankplan.png", "/Images/schalt1.png", "/Images/schalt2.jpg"]
  },
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
    imagePositions: ["top left", "top left", "top left", "top left"]
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
  { name: "Partner 1", logo: "/Images/f1.png" },
  { name: "Partner 2", logo: "/Images/f2.png" },
  { name: "Partner 3", logo: "/Images/f3.avif" },
  { name: "Partner 4", logo: "/Images/f4.png" },
  { name: "Partner 5", logo: "/Images/f5.png" },
  { name: "Partner 6", logo: "/Images/f6.png" },
  { name: "Partner 7", logo: "/Images/f7.png" },
  { name: "Partner 8", logo: "/Images/f8.png" },
  { name: "Partner 9", logo: "/Images/f9.jpg" },
  { name: "Partner 10", logo: "/Images/f10.png" }
];