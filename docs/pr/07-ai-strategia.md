# AI-végrehajtási stratégia

Alapszabály: **AI skáláz, ember hitelesít.** A márka legértékesebb eszköze az alapítói hang és a „proof over promise" hitelesség — ez az, amit egy szerkesztetlenül kiküldött AI-szöveg a legkönnyebben tönkretesz. Ezért minden kifelé menő anyagnál emberi checkpoint van; az AI a kutatást, előkészítést, adminisztrációt és a belső köröket viszi.

---

## 1. Feladatmegosztás

### AI-ra bízható (emberi jóváhagyással, mielőtt bármi kimegy)

| Funkció | Mit csinál az AI | Emberi checkpoint |
|---|---|---|
| **Lead-lista kutatás és minősítés** | 30–250 fős magyar cégek gyűjtése aktív CSR/ESG/employer branding jelekkel (friss fenntarthatósági riport, munkáltatói díj, hiring-hullám, irodahelyszín a szállítási körhöz); pontozás illeszkedés szerint; döntéshozó-nevek és publikus elérhetőségek kutatása | Anna/Dávid szúrópróba a pontozáson; érzékeny kapcsolatok (meglévő partner, ismerős cége) kézi kezelése |
| **Outreach-draftok** | Cégenként personalizált első levél a `04-outreach-sablonok.md` sablonjaiból + a cég 1 valós tényével | Alapító átírja a saját hangjára és **a saját fiókjából küldi** — meleg körnél kötelező, hidegnél is ajánlott |
| **Sajtó-pitch personalizálás** | Újságírónként testre szabott pitch-variánsok a `02-medialista.md` angle-jei alapján; tárgysor-variánsok | **Tier 1: alapító hagy jóvá ÉS küld.** Tier 2–3: emberi jóváhagyás után mehet |
| **Médiafigyelés** | Napi/heti keresés: márkaemlítések, versenytárs-CSR hírek, greenwashing-botrányok és ESG-szabályozási hírek (= reaktív pitch-lehetőség); megjelenés-riport a W5-ben | Ember dönti el, melyik lehetőségre ugrunk rá |
| **MailerLite szekvenciák** | Persona-szegmentált (HR/marketing/ESG) nurture-sorozatok draftolása és beállítása; trigger-logika (ajánlatot megnyitotta, de nem foglalt → emlékeztető) | Szöveg-jóváhagyás küldés előtt; az ajánlati hívást és zárást ember viszi |
| **Tartalom-repurposing** | Videós nyersanyag átiratolása; short-vágási javaslatok; felirat/hashtag-draftok platformonként; headline-variánsok | Videós csapat + alapítók végső vágás és hang-ellenőrzés — az AI hajlamos túl-hype-olni, a márka alul-ígér |
| **Esemény-adminisztráció** | RSVP-követés, emlékeztetők ütemezése, busz-utaslista, étel-érzékenységek, névkitűzők, napi forgatókönyv-nudge-ok; hívás-előkészítő lapok a megerősítő hívásokhoz | A megerősítő hívást **ember** intézi (a hívás maga a no-show-védelem) |
| **Tölcsér-riport** | Heti státusz: outreach-számok, válaszarány, call-ok, RSVP, LOI — a pénteki 30 perces belső körhöz | — |

### Kizárólag emberi (nem automatizálható, kivétel nélkül)

- **Alapítói hang** meleg kontaktok és Tier 1 sajtó felé — Anna és Dávid nevében gép nem küld semmit ellenőrzés nélkül.
- **Tier 1 sajtókapcsolat-építés és telefonos pitch** — kapcsolati tőke, nem skálázható.
- **Tárgyalás, ajánlat-testreszabás, zárás** — a 12 hónapos, több jóváhagyós B2B döntés beszélgetésben dől el.
- **Minden kapacitás-, ár- és „első Magyarországon"-állítás jóváhagyása** (tiltólista: `01-uzenetek.md`).
- **Farm-házigazdaság** az eseményeken — a névvel vállalt alapítói jelenlét maga a bizonyíték-mechanizmus.

## 2. Gyakorlati beállítások (W0-ban elvégzendő)

1. **Lead-kutató ügynök:** heti futás; kimenet közös táblába (cég, méret, persona-illeszkedés, jel, döntéshozó, státusz). Forrás: publikus adatok (céginfó, sajtó, LinkedIn, díj-listák). GDPR: csak publikus üzleti elérhetőség, B2B legitim érdek alapon; leiratkozás/adattörlés kérésre azonnal.
2. **Médiafigyelő ügynök:** kulcsszavak — „Remény Farm", „céges tyúkcsapat", „greenwashing", „ESG jelentés", „employer branding" + Tier 1–2 orgánumok követése; heti digest, sürgős találatnál azonnali jelzés.
3. **Outreach-üzem:** sablonok betöltve, cégenkénti draft-generálás a lead-táblából; a kiküldés kézi (alapítói fiókból), a státusz-frissítés automatikus.
4. **MailerLite:** szegmensek (HR/marketing/ESG/céges), W1 warm-up és W2 szekvencia felépítése; a meglévő „Ceges Tyukcsapat - Erdeklodok" csoport bekötése a szekvenciákba.
5. **Esemény-ügynök:** RSVP-tábla, emlékeztető-ütemezés, hívás-előkészítő lapok generálása.

## 3. Minőség-kapuk (minden AI-kimenetre)

- **Hang-teszt:** tegező többes, nyugodt, konkrét? Nincs „elképesztő/forradalmi/garantált"? Kimondja, amit nem ígérünk?
- **Tény-teszt:** minden szám egyezik a landinggel/`llms.txt`-tel? (Árak: 249 500 / 499 000 / 1 499 000 Ft/hó-tól; 4990/5996 Ft/tyúk/hó; 29 ha, 500 juh, 80 marha, ~13 000 tojás/hét, 500k+, 400k–4M.)
- **Tiltólista-teszt:** `01-uzenetek.md` 4. pont végigellenőrizve.
- **Personalizáció-teszt:** a hivatkozott cég-tény valós és friss? (AI-hallucináció-veszély — kötelező forrás-link a draft mellé.)

## 4. Mit NEM csinálunk AI-val

- Nem küldünk tömeges, láthatóan generált hideg e-mailt — egy rossz kör elégeti a szűk magyar B2B piacot és a domain-reputációt.
- Nem generálunk kamu-engagementet, kamu-véleményt, kamu-értékelést sehol.
- Nem íratunk AI-val „személyes" LinkedIn-kommenteket az alapítók nevében — a founder-jelenlét csak valódin működik.
- Nem használunk AI-generált képet farm-tartalomként — a márka a valódi fotózásra épül (PRODUCT.md anti-referencia: stock-fotó blandness; az AI-kép ennek a modern változata).
