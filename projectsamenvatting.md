# Frans Oefenplatform — Projectsamenvatting

## Overzicht
Een webplatform voor het oefenen van Franse werkwoordvervoegingen, gebouwd met HTML/JavaScript en Firebase Firestore. Gebaseerd op een bestaand wiskundeplatform van dezelfde school.

---

## Technische stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES modules)
- **Backend/Database:** Firebase Firestore
- **Hosting:** GitHub Pages
- **Ontwikkelomgeving:** Visual Studio Code + Live Server

---

## Bestandsstructuur

```
project/
│
├── config.js                          — Firebase-config, admin-gegevens, TIJDEN-array
├── login.html                         — Inlogpagina
├── index.html                         — Leerlingenpaneel (tabbladen per tijd)
├── groei.html                         — Groeioverzicht leerling
├── dashboard.html                     — Beheerderspaneel
├── handleiding.html                   — Beheerdershandleiding
│
├── indicatif_present_soort1.html      — Oefening: werkwoorden op -er
├── indicatif_present_soort2.html      — Oefening: werkwoorden op -re
├── indicatif_present_soort3.html      — Oefening: werkwoorden op -ir
├── indicatif_present_soort4.html      — Oefening: onregelmatige werkwoorden
├── indicatif_present_mix.html         — Oefening: gemengd
│
├── grammatica/
│   ├── grammatica.css                 — Gedeelde stijlen voor grammaticablokken
│   ├── indicatif_present_soort1a.js   — Regel: gewone -er werkwoorden
│   ├── indicatif_present_soort1b.js   — Regel: werkwoorden op -cer
│   ├── indicatif_present_soort1c.js   — Regel: werkwoorden op -ger
│   ├── indicatif_present_soort2.js    — Regel: werkwoorden op -re
│   ├── indicatif_present_soort3a.js   — Regel: type sortir
│   ├── indicatif_present_soort3b.js   — Regel: type finir
│   ├── indicatif_present_soort3c.js   — Regel: type ouvrir
│   └── indicatif_present_soort4.js    — Regel: onregelmatige werkwoorden
│
├── import_werkwoorden.html            — Eenmalig importscript werkwoorden
└── import_onderwerpen_config.html     — Eenmalig importscript onderwerpen + config
```

---

## Firebase Firestore — Collecties

### `leerlingen`
Document-ID = e-mailadres van de leerling
```
naam, jaar, richting, groepen (array van groep-IDs),
resultaten (array), spellingshulp (boolean), heeftDyslexie (boolean)
```

### `groepen`
```
naam, oefeningen (array van soort-codes), werkwoorden (array van infinitieven)
```

### `werkwoorden`
Één document: `indicatif_present`
```
soort1a, soort1b, soort1c, soort2, soort3a, soort3b, soort3c,
soort4, onpersoonlijk
— elk een array van werkwoordobjecten:
  { infinitief, vertaling, vervoegingen: {je,tu,il,nous,vous,ils}, grammatica }
```

### `onderwerpen`
Één document: `personen`
```
1s, 2s, 3s, 1p, 2p, 3p
— elk: { standaard, varianten (array) }
```

### `config`
Één document per oefening: `indicatif_present_soort1`, ..., `indicatif_present_mix`
```
aantalOpgaven, percentageVariant,
percentagesWerkwoorden (object met codes en percentages),
drempelA, drempelB, typfoutMinLengte
```

---

## Werkwoordendatabank

| Code | Omschrijving | Werkwoorden |
|------|-------------|-------------|
| 1a | Gewone -er werkwoorden | trouver, travailler, jouer, regarder, écouter, parler, dessiner, aimer, oublier |
| 1b | Werkwoorden op -cer | commencer, effacer, lancer |
| 1c | Werkwoorden op -ger | manger, bouger, changer, nager, ranger, déménager |
| 2  | Werkwoorden op -re | attendre, descendre, perdre, entendre, répondre, vendre, rendre, rendre visite à quelqu'un |
| 3a | Type sortir | sortir, sentir, servir, mentir, dormir, partir |
| 3b | Type finir | finir, choisir, grandir, grossir, maigrir, rougir, réagir, réfléchir, remplir |
| 3c | Type ouvrir | ouvrir, offrir, découvrir, couvrir, souffrir |
| 4  | Onregelmatig | être, avoir, aller, venir, faire, lire, dire, écrire, mettre, permettre, promettre, prendre, comprendre, apprendre, connaître, reconnaître, vouloir, pouvoir, voir, savoir, devoir, recevoir, boire |
| —  | Onpersoonlijk | falloir (il faut), pleuvoir (il pleut) |

**Totaal: 71 werkwoorden**

---

## Oefeningen — Werking

### Vraagopbouw
```
onderwerp  [invoerveld]  (infinitief)
```
Voorbeeld: *Pierre et moi* &nbsp; [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp; *(parler)*

### Onderwerpen
- Persoonsverdeling: 1s(1), 2s(1), 3s(2), 1p(2), 2p(2), 3p(2)
- Varianten (instelbaar %): Pierre, mes amis, toi et ton frère, ...
- Elisie automatisch: je → j' voor klinker/stomme h
- Onpersoonlijke werkwoorden: altijd "il", nooit variant

### Scoring
- Correct op eerste poging: 1 punt
- Tikfout + correct op tweede poging: 0,5 punt
- Grote fout: 0 punten, geen tweede kans

### Tikfout-detectie (Levenshtein)
- **1a/2/3c:** uitgang exact, stam met tolerantie
- **1b:** uitgang `çons` exact, stam met tolerantie
- **1c:** uitgang `geons` exact, stam met tolerantie
- **3a:** uitgang (-s/-s/-t enkelvoud, -ons/-ez/-ent meervoud) exact, stam met tolerantie
- **3b:** uitgang (-is/-is/-it enkelvoud, -issons/-issez/-issent meervoud) exact, stam met tolerantie
- **4:** korte vormen (< min. lengte) altijd exact; langere vormen: laatste 3 letters exact, begin met tolerantie
- **Onpersoonlijk:** altijd exact, nooit tikfout

### Verplichte vormen per oefening
- Soort 1: nous voor 1b (ç) en 1c (ge)
- Soort 3: je voor 3a (korte stam), nous voor 3b (-iss-), tu voor 3c (-es niet -is)
- Soort 4: minstens één onpersoonlijk werkwoord
- Mix: alle bovenstaande verplichte vormen + één onpersoonlijk

### Feedback bij grote fout
- Juiste antwoord getoond
- Grammaticablok met uitleg en vervoegingstabel van het specifieke werkwoord
- Inhoud uit de grammatica JS-bestanden

### Spellingshulp
- Rode golfjesonderlijning tijdens typen (CSS: `text-decoration: underline wavy red`)
- Activeert bij Levenshtein-afstand > 2
- Aan/uit per leerling via dashboard

---

## Dashboard — Functionaliteit

### Tabs
| Tab | Functionaliteit |
|-----|----------------|
| Leerlingen | Toevoegen, bewerken, verwijderen, filteren, spellingshulp aan/uit, groei bekijken |
| Groepen | Aanmaken, naam/oefeningen/werkwoorden bewerken, leden toevoegen/verwijderen |
| Importeren | CSV-import van leerlingen |
| Statistieken | Aantal leerlingen, groepen, sessies |
| Scorelijst | Download CSV per periode en per groep |
| Instellingen | Parameters per oefening aanpassen |

### Instellingen per oefening
- **Oefening:** aantal opgaven
- **Onderwerpen:** % varianten
- **Verdeling werkwoorden:** % per type (som = 100, gevalideerd)
- **Scoring:** drempel A, drempel B, min. lengte tikfouttolerantie

### Werkwoordenselectie per groep
- Per groep kan de leerkracht exact bepalen welke werkwoorden gebruikt worden
- Getoond per type, alfabetisch gesorteerd
- "Alles selecteren/deselecteren" knop per type

---

## Kleurenpallet
Geïnspireerd op de Franse vlag, maar verfijnd:
- Diepblauw: `#1a2a5e`
- Accent: `#3a5bd9`
- Rood: `#c0392b`
- Scores: groen `#a8e6a1` (A), geel `#fff4a3` (B), oranje `#ffcba4` (C)

---

## Volgende stappen

### Fase 2 — Dyslexie-aanpassingen (gepland)
- Dyslexievriendelijk lettertype (OpenDyslexic of Lexie Readable)
- Grotere lettergrootte en meer regelafstand
- Aangepaste scoredrempels per leerling
- Spellingscorrector (aangeven dat er fout is, zonder te zeggen waar)
- Mondelinge invoer via Web Speech API
- Vlag `heeftDyslexie` al voorzien in Firestore

### Fase 3 — Uitbreiding met nieuwe tijden (gepland)
- Nieuwe tijd toevoegen = nieuw object in `TIJDEN` array in `config.js`
- Nieuwe oefenpagina's volgen naamgeving: `{tijd}_{soort}.html`
- Nieuwe grammaticabestanden in `grammatica/` map
- Nieuwe werkwoorddata in Firestore (nieuw document per tijd)
- Dashboard en groei.html passen zich automatisch aan via `TIJDEN`

---

## Aandachtspunten voor testfase
- Tikfout-tolerantie valideren met collega's Frans (min. lengte onregelmatige werkwoorden)
- Percentages subsoorten verifiëren (som = 100)
- Werkwoordenselectie per groep instellen voor testgroep
- Config opnieuw importeren via `import_onderwerpen_config.html` (vereenvoudigde structuur)
- Spellingshulp testen bij leerlingen met schrijfproblemen
