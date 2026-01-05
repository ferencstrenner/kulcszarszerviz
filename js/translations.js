// Többnyelvű rendszer - Magyar, Német, Angol
const translations = {
    hu: {
        // Navigáció
        nav_home: "Főoldal",
        nav_services: "Szolgáltatások",
        nav_about: "Rólunk",
        nav_contact: "Kapcsolat",
        
        // Gomb
        btn_more: "Több...",
        
        // Főoldal Hero
        hero_title: "Kulcs-Zár Szerviz Balatonfüred",
        hero_h2: "Kulcsmásolás, Zárjavítás, Autókulcs, Élezés",
        hero_subtitle: "20+ év tapasztalat • Mul-T-Lock partner • Gyors szolgáltatás<br>Kés-, olló- és korcsolyaélezés • Gravírozás • Ingyenes árajánlat",
        
        // Szolgáltatások szekció
        services_title: "Kulcs-Zár Szerviz Balatonfüred - Szolgáltatásaink",
        
        service_keys_title: "Kulcsmásolás",
        service_keys_desc: "Gyors és precíz kulcsmásolás szinte minden típusú kulcshoz. Hagyományos kulcsok, biztonsági kulcsok, lakáskulcsok, irodakulcsok. Azonnali szolgáltatás, kedvező árak. Kulcsra van szükséged? Mi azonnal segítünk!",
        
        service_locks_title: "Zárjavítás",
        service_locks_desc: "Szakszerű zárjavítás és zárcsere szolgáltatás. Zárbetét csere, zár olajozás, zár tisztítás. Mul-T-Lock biztonsági zárak hivatalos partnere. Elromlott a zár? Ne kockáztass! Gyors és biztonságos zárjavítás profi szakembertől.",
        
        service_car_title: "Autókulcs",
        service_car_desc: "Autókulcs másolás és programozás. Távirányítós kulcsok, chip kulcsok, intelligens kulcsok. Autókulcs-másolás gyorsan és biztonságosan. Profi gépekkel, tapasztalt szakemberrel.",
        
        service_sharp_title: "Élezés",
        service_sharp_desc: "Professzionális kés és olló élezés. Konyhai eszközök, szakácskések, kertészeti eszközök. Precíz, éles eredmény. Éles eszköz = könnyebb munka! Kés-, olló- és szerszámélezés modern technológiával.",
        
        service_engrave_title: "Gravírozás",
        service_engrave_desc: "Személyre szabott feliratok, logók, nevek. Minőségi munka, kedvező árak. Névtáblák és egyéb feliratok gravírozása profi minőségben!",
        
        service_multlock_title: "Mul-T-Lock",
        service_multlock_desc: "Mul-T-Lock biztonsági zárak telepítése és javítása. Biztonság kompromisszumok nélkül – Mul-T-Lock! Viszonteladó partnerként kínáljuk a Mul-T-Lock prémium termékeit: biztonsági zárak, kulcsrendszerek, cilinderbetétek.",
        
        service_skate_title: "Korcsolyaélezés",
        service_skate_desc: "Profi korcsolyaélezés a maximális gyorsaságért és stabilitásért a jégen. Gyors, precíz, megfizethető korcsolyaélezés Balatonfüred központjában.",
        
        service_sales_title: "Értékesítés",
        service_sales_desc: "Balatonfüredi üzletünkben mindent megtalál, ami a biztonsághoz kell: zárak, lakatok, kulcsok és kiegészítők – egy helyen, kényelmesen! Egyedi igény esetén gyorsan és kedvező áron beszerezzük, amire szüksége van.",
        
        // Footer
        footer_about_title: "Rólunk",
        footer_about_text: "Cseh János vagyok, egyéni vállalkozó, több mint húsz év tapasztalattal a hátam mögött. Üzletem Balatonfüred szívében található, ahol mindenkit szeretettel várok – legyen szó kulcsmásolásról, zárszervizről, gravírozásról vagy késélezésről.",
        footer_contact_title: "Kapcsolat",
        footer_hours_title: "Nyitvatartás",
        footer_hours_weekday: "H–P: 08:00–12:30, 13:00–16:30",
        footer_hours_weekend: "Szo–Va: Zárva",
        footer_quicklinks_title: "Gyorslinkek",
        footer_reviews_title: "Google Értékelések",
        
        // Services page
        services_page_h1: "Szolgáltatásaink",
        services_page_p: "Professzionális zárszolgáltatások minden igényre. Több mint 20 év tapasztalat.",
        
        serv_keys_h2: "Kulcsmásolás",
        serv_keys_p: "Gyors és pontos kulcsmásolás szinte minden típusú zárhoz. Professzionális minőség garantálva. Modern technológiával dolgozunk, hogy minden kulcs tökéletesen passzoljon.",
        serv_keys_f1: "Lakás és iroda kulcsok",
        serv_keys_f2: "Biztonsági zárak kulcsai",
        serv_keys_f3: "Speciális kulcsok",
        serv_keys_f4: "Gyors kiszolgálás",
        serv_keys_f5: "Precíz másolás",
        serv_keys_f6: "Kedvező árak",
        
        serv_locks_h2: "Zárjavítás",
        serv_locks_p: "Sérült vagy elromlott zárat javítunk gyorsan és szakszerűen. Megbízható megoldás minden zártípushoz, legyen szó lakásról, irodáról vagy üzletről.",
        serv_locks_f1: "Ajtózár javítás",
        serv_locks_f2: "Cilinder csere",
        serv_locks_f3: "Zármechanika javítás",
        serv_locks_f4: "Profi szerszámok",
        serv_locks_f5: "Gyors megoldás",
        
        // Autókulcs
        serv_autokey_h2: "Autókulcs",
        serv_autokey_p: "Autókulcs másolása és javítása modern technológiával. Sérült autókulcs pótlása, a legjobb eredményért.",
        serv_autokey_f1: "Autókulcs másolás",
        serv_autokey_f2: "Chip kulcs programozás",
        serv_autokey_f3: "Kulcs javítás",
        serv_autokey_f4: "Különféle márkák",
        serv_autokey_f5: "Szakértő tanácsadás",
        serv_autokey_note: "A pontos lehetőségek és költségek meghatározása előzetes egyeztetést igényel. Kérjük, vegye fel velünk a kapcsolatot további információért és időpont egyeztetésért!",
        
        // Élezés
        serv_sharp_h2: "Élezés",
        serv_sharp_p: "Professzionális késélezési szolgáltatás. Tompult kések, ollók és egyéb vágószerszámok élezése precízen és gyorsan.",
        serv_sharp_f1: "Konyhakések élezése",
        serv_sharp_f2: "Olló élezés",
        serv_sharp_f3: "Darálók élezése",
        serv_sharp_f4: "Kerti szerszámok",
        serv_sharp_f5: "Precíz munka",
        serv_sharp_f6: "Gyors kiszolgálás",
        serv_sharp_f7: "Korrekt árak",
        
        // Korcsolyaélezés
        serv_skate_h2: "Korcsolyaélezés",
        serv_skate_p: "Tökéletes él a tökéletes élményhez! Hozd el a korcsolyád, és éleztesd nálunk gyorsan, precízen, megfizethető áron. Sportolóknak és hobbistáknak egyaránt.",
        serv_skate_f1: "Jégkorcsolya élezés",
        serv_skate_f2: "Gyermek és felnőtt korcsolyák",
        serv_skate_f3: "Sport és hobbi",
        serv_skate_f4: "Gyors átfutás",
        serv_skate_f5: "Profi gépek",
        serv_skate_f6: "Kedvező árak",
        
        // Gravírozás
        serv_engr_h2: "Gravírozás",
        serv_engr_p: "Személyre szabott megoldások az Ön igénye szerint.",
        serv_engr_f1: "Névtáblák gravírozása",
        serv_engr_f2: "Egyedi felirat",
        serv_engr_f3: "Azonosító táblák",
        serv_engr_f4: "Precíz munka",
        serv_engr_f5: "Gyors átfutás",
        serv_engr_f6: "Egyedi kérések",
        
        // Mul-T-Lock
        serv_multlock_h2: "Mul-T-Lock",
        serv_multlock_p: "Hivatalos Mul-T-Lock partner. Prémium biztonsági zárak és kulcsok szervize. A legmagasabb szintű biztonság otthonának és értékeinek védelmére.",
        serv_multlock_f1: "Mul-T-Lock zárak",
        serv_multlock_f2: "Hivatalos partner",
        serv_multlock_f3: "Kulcs másolás",
        serv_multlock_f4: "Zárcsere, telepítés",
        serv_multlock_f5: "Magas biztonság",
        serv_multlock_f6: "Garancia",
        
        // Értékesítés
        serv_sales_h2: "Értékesítés",
        serv_sales_p: "Balatonfüreden üzletünkben megtalálja a zárakat, lakatokat, kulcsokat és kiegészítőket – mindent egy helyen! Egyedi igény esetén gyorsan és kedvező áron beszerezzük, amire szüksége van.",
        serv_sales_f1: "Zárbetétek és lakatok – egyedi darabként vagy rendszerbe programozva",
        serv_sales_f2: "Bevésőzárak – hagyományos és biztonsági kivitelben",
        serv_sales_f3: "Biztonsági megoldások – rúdzárak, többpontos zár-kilincsek, biztonsági pajzsok",
        serv_sales_f4: "Rászegzős és kiegészítő zárak",
        serv_sales_f5: "Bútorzárak",
        serv_sales_f6: "Lakatok",
        serv_sales_f7: "Kilincsek, címkék",
        serv_sales_f8: "Postaládák, pénzkazetták, kulcsszekrények",
        serv_sales_f9: "Kulcstartók, kulcsjelölők és egyéb kiegészítők",
        
        // CTA
        serv_cta_h2: "Kérdése van?",
        serv_cta_p: "Lépjen velünk kapcsolatba! Szívesen segítünk minden igényben.",
        serv_cta_button: "Kapcsolatfelvétel",
        
        // Contact page
        contact_h1: "Kapcsolat",
        contact_p: "Lépj velünk kapcsolatba! Szívesen válaszolunk kérdéseidre.",
        contact_info_h2: "Elérhetőségeink",
        contact_address: "📍 Cím:",
        contact_phone: "📞 Telefon:",
        contact_email: "📧 Email:",
        contact_hours: "🕒 Nyitvatartás:",
        contact_hours_weekday: "Hétfő–Péntek:",
        contact_hours_saturday: "Szombat:",
        contact_hours_sunday: "Vasárnap:",
        contact_hours_closed: "Zárva",
        contact_form_h2: "Üzenet küldése",
        contact_form_name: "Név *",
        contact_form_email: "Email *",
        contact_form_phone: "Telefon",
        contact_form_subject: "Tárgy *",
        contact_form_message: "Üzenet *",
        contact_form_submit: "Küldés",
        
        // About page
        about_h1: "Rólunk",
        about_tagline: "Kulcs a biztonsághoz – szívből, Balatonfüreden",
        about_p1: "Cseh János vagyok, egyéni vállalkozó, több mint húsz év tapasztalattal a hátam mögött. Üzletem Balatonfüred szívében található, ahol mindenkit szeretettel várok – legyen szó kulcsmásolásról, zárszervizről, gravírozásról vagy késélezésről.",
        about_p2: "A Mul-T-Lock hivatalos partnereként megbízható, minőségi zárbetétek és lakatok széles választékát kínálom, hogy otthona és értékei mindig biztonságban legyenek. Rugalmasan alkalmazkodom az igényekhez, és mindig arra törekszem, hogy gyors, pontos és segítőkész kiszolgálást nyújtsak.",
        about_p3: "Ha fontos Önnek a szakértelem, a jó hangulat és a korrekt ár, térjen be hozzám – nálam a biztonság és a figyelmesség kéz a kézben jár.",
        about_highlight1_h3: "20+ Év Tapasztalat",
        about_highlight1_p: "Több mint két évtizedes szakmai tudás és elhivatottság",
        about_highlight2_h3: "Mul-T-Lock Partner",
        about_highlight2_p: "Hivatalos partnerség az egyik legmegbízhatóbb zárgyártóval",
        about_highlight3_h3: "Balatonfüred",
        about_highlight3_p: "Helyi szakértelem és közösségi kapcsolatok",
        about_highlight4_h3: "Minőségi Munka",
        about_highlight4_p: "Precizitás, gyorsaság és segítőkész attitűd",
        
        // Promo box
        promo_badge: "⛸️ ÚJ!",
        promo_title: "Korcsolyaélezés",
        promo_subtitle: "Tökéletes él a tökéletes élményhez!",
        promo_description: "Hozd el a korcsolyád, és éleztesd nálunk gyorsan, precízen, megfizethető áron. Sportolóknak és hobbistáknak egyaránt.",
        promo_link: "Tudj meg többet →",
        
        // Store status
        status_prefix: "Üzletünk éppen:",
        status_open: "Nyitva",
        status_closed: "Zárva",
        status_holiday_note: "Karácsonyi szünet - Nyitás: 2026. január 5.",
        status_holiday: "Ünnepnap - következő nyitás a következő munkanapon",
        status_opens_today_morning: "Nyitás: Ma 08:00",
        status_opens_today_afternoon: "Nyitás: Ma 13:00",
        status_opens_tomorrow: "Nyitás: Holnap 08:00",
        status_opens_monday: "Nyitás: Hétfő 08:00",
        
        // SEO Meta
        meta_title: "Kulcs-Zár Szerviz Balatonfüred | Kulcsmásolás, Zárjavítás, Élezés",
        meta_description: "Kulcs-Zár Szerviz Balatonfüred központjában. Kulcsmásolás, zárjavítás, autókulcs programozás, kés-, olló- és korcsolyaélezés, gravírozás. Mul-T-Lock hivatalos partner. 20+ év tapasztalat. H–P: 08:00–12:30, 13:00–16:30. Ingyenes árajánlat: +36 30 217 7013. Balatonfüred Vásárcsarnok, Malom köz 2.",
        meta_keywords: "kulcsmásolás Balatonfüred, zárjavítás szolgáltatás, autókulcs másolás programozás, késélezés ollóélezés korcsolyaélezés, gravírozás kulcs, Mul-T-Lock biztonsági zár, zárszerviz Balatonfüred, Cseh János kulcsár, kulcs-zár szerviz Balatonfüred, autókulcs pótlás, zárbetét csere, vésnök Balatonfüred, kulcs másolás Balatonfüred, zár szerelés Balatonfüred",
        meta_og_title: "Kulcs-Zár Szerviz Balatonfüred | Kulcsmásolás, Zárjavítás, Élezés",
        meta_og_description: "Professzionális kulcsmásolás, zárjavítás és késélezés Balatonfüreden. Mul-T-Lock partner, 20+ év tapasztalat. Hívjon: +36 30 217 7013",
        
        // Services page SEO
        meta_title_services: "Szolgáltatások - Kulcsmásolás, Zárjavítás | Kulcs-Zár Szerviz Balatonfüred",
        meta_description_services: "Kulcs-Zár Szerviz szolgáltatások Balatonfüreden: kulcsmásolás, zárjavítás, autókulcs másolás, kés-olló élezés, gravírozás. Mul-T-Lock hivatalos partner. ☎ +36 30 217 7013",
        meta_keywords_services: "kulcsmásolás Balatonfüred, zárjavítás szolgáltatás, autókulcs másolás, késélezés, ollóélezés, gravírozás, Mul-T-Lock, biztonsági zárak",
        
        // Contact page SEO
        meta_title_contact: "Kapcsolat - Elérhetőség | Kulcs-Zár Szerviz Balatonfüred",
        meta_description_contact: "Kapcsolat - Kulcs-Zár Szerviz Balatonfüred. Cím: Malom köz 2. Vásárcsarnok. Telefon: +36 30 217 7013. Email: kulcs.zar.szerviz@gmail.com. Nyitva: H–P 08:00–12:30, 13:00–16:30",
        meta_keywords_contact: "kulcs-zár elérhetőség Balatonfüred, kulcsmásoló nyitvatartás, zárszerviz kapcsolat, Malom köz",
        
        // About page SEO
        meta_title_about: "Rólunk - Cseh János | Kulcs-Zár Szerviz Balatonfüred",
        meta_description_about: "Cseh János - 20+ év tapasztalat kulcsmásolásban, zárjavításban. Mul-T-Lock hivatalos partner Balatonfüreden. Minőségi munka, megbízható szolgáltatás.",
        meta_keywords_about: "Cseh János, kulcs-zár mester, Balatonfüred kulcsmásoló, Mul-T-Lock partner, tapasztalt zárszaküzlet",
        
        
        // Miért minket szekció
        why_title: "Miért válasszon minket?",
        
        why_exp_title: "20+ Év Tapasztalat",
        why_exp_desc: "Évtizedes szakértelem a kulcs- és zárszakmában",
        
        why_quality_title: "Minőségi Szolgáltatás",
        why_quality_desc: "Precíz munkavégzés, kiváló minőségű alapanyagok",
        
        why_fast_title: "Gyors Kiszolgálás",
        why_fast_desc: "Legtöbb szolgáltatás azonnal, helyben elvégezhető",
        
        why_partner_title: "Mul-T-Lock Partner",
        why_partner_desc: "Hivatalos forgalmazó és szervizhálózat tag",
        
        // CTA szekció
        cta_title: "Kérdése van vagy árajánlatot szeretne?",
        cta_subtitle: "Hívjon bizalommal, vagy látogasson el hozzánk!",
        cta_button: "Kapcsolatfelvétel",
        cta_phone: "Telefon",
        
        // Footer
        footer_about_title: "Kulcs-Zár Szerviz",
        footer_about_text: "Professzionális kulcs- és zárszerviz szolgáltatások Balatonfüreden több mint 20 éves tapasztalattal.",
        footer_contact_title: "Elérhetőség",
        footer_services_title: "Szolgáltatások",
        footer_hours_title: "Nyitvatartás",
        footer_rights: "Minden jog fenntartva",
        
        // Szolgáltatások oldal
        services_page_title: "Szolgáltatásaink",
        services_page_subtitle: "Komplex kulcs- és zárszerviz megoldások minden igényre",
        
        keys_detail_title: "Kulcsmásolás és kulcsszolgáltatás",
        keys_detail_desc: "Professzionális kulcsmásolás minden típushoz - lakáskulcsok, irodakulcsok, autókulcsok, páncélszekrény kulcsok. Használjuk a legmodernebb kulcsmásoló gépeket, így garantáljuk a precíz illeszkedést és hosszú élettartamot.",
        keys_detail_feature1: "Minden kulcstípus másolása",
        keys_detail_feature2: "Gyors, helyben elkészítés (5-10 perc)",
        keys_detail_feature3: "Precíziós munkavégzés",
        keys_detail_feature4: "Kedvező árak, minőségi garanciával",
        
        locks_detail_title: "Zárjavítás és zárszerelés",
        locks_detail_desc: "Teljes körű zárszerviz szolgáltatás - zárcsere, zárjavítás, új zárak beépítése. Mul-T-Lock hivatalos partnerként kínáljuk a legmodernebb biztonsági megoldásokat. Gyors és megbízható szolgáltatás.",
        locks_detail_feature1: "Zárbetét csere, javítás",
        locks_detail_feature2: "Új zárak beépítése, szerelése",
        locks_detail_feature3: "Biztonsági zárak (Mul-T-Lock)",
        locks_detail_feature4: "Zárnyitás károkozás nélkül",
        
        car_detail_title: "Autókulcs másolás és programozás",
        car_detail_desc: "Autókulcsok másolása és programozása modern járművekhez. Immobilizer kulcsok, távirányítók programozása. Dolgozunk a legtöbb autómárkával - gyors és megbízható szolgáltatás.",
        car_detail_feature1: "Autókulcs másolás és programozás",
        car_detail_feature2: "Immobilizer kulcsok",
        car_detail_feature3: "Távirányító programozás",
        car_detail_feature4: "Gyors kiszolgálás",
        
        sharp_detail_title: "Kés-, olló- és korcsolyaélezés",
        sharp_detail_desc: "Professzionális élezési szolgáltatás háztartási, szakmai és sporteszközökhöz. Precíziós élezőgépekkel dolgozunk - újra élesen vágó eszközök, hosszú élettartam. Kések, ollók, korcsolyák.",
        sharp_detail_feature1: "Késélezés (konyhai, vadász, stb.)",
        sharp_detail_feature2: "Ollóélezés (háztartási, fodrász)",
        sharp_detail_feature3: "Korcsolyaélezés (műkorcsolya, jégkorong)",
        sharp_detail_feature4: "Precíziós munkavégzés",
        
        engrave_detail_title: "Gravírozás és vésnökség",
        engrave_detail_desc: "Egyedi gravírozási szolgáltatás kulcsokra, táblákra, ajándéktárgyakra. Személyre szabott feliratok, logók, minták. Precíz munkavégzés, gyors határidő.",
        engrave_detail_feature1: "Kulcsok gravírozása",
        engrave_detail_feature2: "Ajándékok személyre szabása",
        engrave_detail_feature3: "Táblák, feliratok készítése",
        engrave_detail_feature4: "Egyedi minták, logók",
        
        emergency_detail_title: "Segélyszolgálat és zárnyitás",
        emergency_detail_desc: "Kizártság esetén gyors segítség! Zárnyitás károkozás nélkül, kulcs nélküli bejutás. Hívjon bizalommal a +36 30 217 7013-as telefonszámon - gyors reagálás, megbízható megoldás.",
        emergency_detail_feature1: "Gyors kiszállás kizártság esetén",
        emergency_detail_feature2: "Zárnyitás károkozás nélkül",
        emergency_detail_feature3: "Kulcs nélküli bejutás",
        emergency_detail_feature4: "Nonstop telefonos elérhetőség",
        
        // Kapcsolat oldal
        contact_page_title: "Lépjen kapcsolatba velünk",
        contact_page_subtitle: "Kérdése van vagy személyesen szeretne megkeresni minket?",
        
        contact_info_title: "Elérhetőségeink",
        contact_address: "Cím",
        contact_address_value: "8230 Balatonfüred, Malom köz 2.<br>Vásárcsarnok",
        contact_phone: "Telefon",
        contact_email: "E-mail",
        contact_hours: "Nyitvatartás",
        contact_hours_weekday: "Hétfő – Péntek",
        contact_hours_weekend: "Szombat – Vasárnap",
        contact_closed: "Zárva",
        
        contact_form_title: "Küldjön üzenetet",
        contact_form_name: "Név",
        contact_form_email: "E-mail cím",
        contact_form_subject: "Tárgy",
        contact_form_message: "Üzenet",
        contact_form_send: "Üzenet Küldése",
        contact_form_sending: "Küldés...",
        contact_form_success: "✓ Köszönjük! Üzenetét sikeresen elküldtük.",
        contact_form_error: "✗ Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.",
        
        contact_map_title: "Találjon meg minket",
        
        // Rólunk oldal
        about_page_title: "Rólunk",
        about_page_subtitle: "Megbízható kulcs- és zárszerviz Balatonfüreden több mint 20 éve",
    },
    
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_services: "Leistungen",
        nav_about: "Über uns",
        nav_contact: "Kontakt",
        
        // Gomb
        btn_more: "Mehr...",
        
        // Hero
        hero_title: "Schlüssel-Schloss Service Balatonfüred",
        hero_h2: "Schlüsselkopie, Schlossreparatur, Autoschlüssel, Schleifen",
        hero_subtitle: "20+ Jahre Erfahrung • Mul-T-Lock Partner • Schneller Service<br>Messer-, Scheren- und Schlittschuhschleifen • Gravur • Kostenloser Kostenvoranschlag",
        
        // Services
        services_title: "Schlüssel-Schloss Service Balatonfüred - Unsere Dienstleistungen",
        
        service_keys_title: "Schlüsselkopie",
        service_keys_desc: "Schnelle und präzise Schlüsselkopie für fast jeden Schlüsseltyp. Traditionelle Schlüssel, Sicherheitsschlüssel, Wohnungsschlüssel, Büroschlüssel. Sofortiger Service, günstige Preise. Brauchen Sie einen Schlüssel? Wir helfen sofort!",
        
        service_locks_title: "Schlossreparatur",
        service_locks_desc: "Professionelle Schlossreparatur und Schlossaustausch. Schließzylinder-Austausch, Schloss ölen, Schloss reinigen. Offizieller Partner von Mul-T-Lock Sicherheitsschlössern. Ist das Schloss kaputt? Kein Risiko eingehen! Schnelle und sichere Schlossreparatur vom Profi.",
        
        service_car_title: "Autoschlüssel",
        service_car_desc: "Autoschlüssel kopieren und programmieren. Fernbedienungsschlüssel, Chip-Schlüssel, intelligente Schlüssel. Autoschlüssel-Kopie schnell und sicher. Mit professionellen Maschinen, von erfahrenen Fachleuten.",
        
        service_sharp_title: "Schleifen",
        service_sharp_desc: "Professionelles Messer- und Scherenschleifen. Küchengeräte, Kochmesser, Gartengeräte. Präzises, scharfes Ergebnis. Scharfes Werkzeug = leichtere Arbeit! Messer-, Scheren- und Werkzeugschleifen mit moderner Technologie.",
        
        service_engrave_title: "Gravur",
        service_engrave_desc: "Personalisierte Inschriften, Logos, Namen. Qualitätsarbeit, günstige Preise. Namensschilder und andere Inschriften in professioneller Qualität graviert!",
        
        service_multlock_title: "Mul-T-Lock",
        service_multlock_desc: "Installation und Reparatur von Mul-T-Lock Sicherheitsschlössern. Sicherheit ohne Kompromisse – Mul-T-Lock! Als Wiederverkaufspartner bieten wir Mul-T-Lock Premium-Produkte an: Sicherheitsschlösser, Schlüsselsysteme, Zylindereinsätze.",
        
        service_skate_title: "Schlittschuhschleifen",
        service_skate_desc: "Professionelles Schlittschuhschleifen für maximale Geschwindigkeit und Stabilität auf dem Eis. Schnelles, präzises, erschwingliches Schlittschuhschleifen im Zentrum von Balatonfüred.",
        
        service_sales_title: "Verkauf",
        service_sales_desc: "In unserem Geschäft in Balatonfüred finden Sie alles für Ihre Sicherheit: Schlösser, Vorhängeschlösser, Schlüssel und Zubehör – alles an einem Ort, bequem! Bei individuellen Anforderungen besorgen wir schnell und zu günstigen Preisen, was Sie brauchen.",
        
        // Footer
        footer_about_title: "Über uns",
        footer_about_text: "Ich bin János Cseh, Einzelunternehmer mit mehr als zwanzig Jahren Erfahrung. Mein Geschäft befindet sich im Herzen von Balatonfüred, wo ich alle herzlich willkommen heiße – ob Schlüsselkopie, Schlossservice, Gravur oder Messerschleifen.",
        footer_contact_title: "Kontakt",
        footer_hours_title: "Öffnungszeiten",
        footer_hours_weekday: "Mo–Fr: 08:00–12:30, 13:00–16:30",
        footer_hours_weekend: "Sa–So: Geschlossen",
        footer_quicklinks_title: "Schnelllinks",
        footer_reviews_title: "Google Bewertungen",
        
        // Services page
        services_page_h1: "Unsere Dienstleistungen",
        services_page_p: "Professionelle Schlossdienstleistungen für jeden Bedarf. Mehr als 20 Jahre Erfahrung.",
        
        serv_keys_h2: "Schlüsselkopie",
        serv_keys_p: "Schnelle und präzise Schlüsselkopie für fast jeden Schlosstyp. Professionelle Qualität garantiert. Wir arbeiten mit moderner Technologie, damit jeder Schlüssel perfekt passt.",
        serv_keys_f1: "Wohnungs- und Büroschlüssel",
        serv_keys_f2: "Sicherheitsschlossschlüssel",
        serv_keys_f3: "Spezialschlüssel",
        serv_keys_f4: "Schneller Service",
        serv_keys_f5: "Präzises Kopieren",
        serv_keys_f6: "Günstige Preise",
        
        serv_locks_h2: "Schlossreparatur",
        serv_locks_p: "Wir reparieren beschädigte oder defekte Schlösser schnell und fachgerecht. Zuverlässige Lösung für jeden Schlosstyp, ob Wohnung, Büro oder Geschäft.",
        serv_locks_f1: "Türschlossreparatur",
        serv_locks_f2: "Zylinderwechsel",
        serv_locks_f3: "Schlossmechanik-Reparatur",
        serv_locks_f4: "Professionelle Werkzeuge",
        serv_locks_f5: "Schnelle Lösung",
        
        // Autoschlüssel
        serv_autokey_h2: "Autoschlüssel",
        serv_autokey_p: "Autoschlüssel kopieren und reparieren mit moderner Technologie. Beschädigte Autoschlüssel ersetzen für das beste Ergebnis.",
        serv_autokey_f1: "Autoschlüssel kopieren",
        serv_autokey_f2: "Chip-Schlüssel Programmierung",
        serv_autokey_f3: "Schlüsselreparatur",
        serv_autokey_f4: "Verschiedene Marken",
        serv_autokey_f5: "Expertenberatung",
        serv_autokey_note: "Die genauen Möglichkeiten und Kosten erfordern eine vorherige Absprache. Bitte kontaktieren Sie uns für weitere Informationen und Terminvereinbarung!",
        
        // Schleifen
        serv_sharp_h2: "Schleifen",
        serv_sharp_p: "Professioneller Messerschleif-Service. Stumpfe Messer, Scheren und andere Schneidwerkzeuge werden präzise und schnell geschliffen.",
        serv_sharp_f1: "Küchenmesser schleifen",
        serv_sharp_f2: "Scherenschleifen",
        serv_sharp_f3: "Fleischwölfe schleifen",
        serv_sharp_f4: "Gartenwerkzeuge",
        serv_sharp_f5: "Präzise Arbeit",
        serv_sharp_f6: "Schneller Service",
        serv_sharp_f7: "Faire Preise",
        
        // Schlittschuhschleifen
        serv_skate_h2: "Schlittschuhschleifen",
        serv_skate_p: "Perfekte Kante für das perfekte Erlebnis! Bringen Sie Ihre Schlittschuhe zu uns und lassen Sie sie schnell, präzise und zu erschwinglichen Preisen schleifen. Für Sportler und Hobbysportler gleichermaßen.",
        serv_skate_f1: "Eiskunstlaufschlittschuhe schleifen",
        serv_skate_f2: "Kinder- und Erwachsenenschlittschuhe",
        serv_skate_f3: "Sport und Hobby",
        serv_skate_f4: "Schnelle Bearbeitung",
        serv_skate_f5: "Professionelle Maschinen",
        serv_skate_f6: "Günstige Preise",
        
        // Gravur
        serv_engr_h2: "Gravur",
        serv_engr_p: "Personalisierte Lösungen nach Ihren Bedürfnissen.",
        serv_engr_f1: "Namensschilder gravieren",
        serv_engr_f2: "Individuelle Inschrift",
        serv_engr_f3: "Identifikationsschilder",
        serv_engr_f4: "Präzise Arbeit",
        serv_engr_f5: "Schnelle Bearbeitung",
        serv_engr_f6: "Individuelle Anfragen",
        
        // Mul-T-Lock
        serv_multlock_h2: "Mul-T-Lock",
        serv_multlock_p: "Offizieller Mul-T-Lock Partner. Premium-Sicherheitsschlösser und Schlüsselservice. Höchste Sicherheit für Ihr Zuhause und Ihre Wertsachen.",
        serv_multlock_f1: "Mul-T-Lock Schlösser",
        serv_multlock_f2: "Offizieller Partner",
        serv_multlock_f3: "Schlüsselkopie",
        serv_multlock_f4: "Schlossaustausch, Installation",
        serv_multlock_f5: "Hohe Sicherheit",
        serv_multlock_f6: "Garantie",
        
        // Verkauf
        serv_sales_h2: "Verkauf",
        serv_sales_p: "In unserem Geschäft in Balatonfüred finden Sie Schlösser, Vorhängeschlösser, Schlüssel und Zubehör – alles an einem Ort! Bei individuellen Anforderungen besorgen wir schnell und zu günstigen Preisen, was Sie brauchen.",
        serv_sales_f1: "Schließzylinder und Vorhängeschlösser – einzeln oder systemintegriert programmiert",
        serv_sales_f2: "Einsteckschlösser – traditionell und sicherheitstechnisch",
        serv_sales_f3: "Sicherheitslösungen – Riegelschlösser, Mehrpunkt-Türgriffe, Sicherheitsschilde",
        serv_sales_f4: "Aufschraubschlösser und Ergänzungsschlösser",
        serv_sales_f5: "Möbelschlösser",
        serv_sales_f6: "Vorhängeschlösser",
        serv_sales_f7: "Türgriffe, Etiketten",
        serv_sales_f8: "Briefkästen, Geldkassetten, Schlüsselschränke",
        serv_sales_f9: "Schlüsselanhänger, Schlüsselmarkierer und andere Zubehörteile",
        
        // CTA
        serv_cta_h2: "Haben Sie eine Frage?",
        serv_cta_p: "Kontaktieren Sie uns! Wir helfen Ihnen gerne bei allen Anliegen.",
        serv_cta_button: "Kontaktaufnahme",
        
        // Contact page
        contact_h1: "Kontakt",
        contact_p: "Nehmen Sie Kontakt mit uns auf! Wir beantworten gerne Ihre Fragen.",
        contact_info_h2: "Unsere Kontaktdaten",
        contact_address: "📍 Adresse:",
        contact_phone: "📞 Telefon:",
        contact_email: "📧 E-Mail:",
        contact_hours: "🕒 Öffnungszeiten:",
        contact_hours_weekday: "Montag–Freitag:",
        contact_hours_saturday: "Samstag:",
        contact_hours_sunday: "Sonntag:",
        contact_hours_closed: "Geschlossen",
        contact_form_h2: "Nachricht senden",
        contact_form_name: "Name *",
        contact_form_email: "E-Mail *",
        contact_form_phone: "Telefon",
        contact_form_subject: "Betreff *",
        contact_form_message: "Nachricht *",
        contact_form_submit: "Senden",
        
        // About page
        about_h1: "Über uns",
        about_tagline: "Der Schlüssel zur Sicherheit – von Herzen, in Balatonfüred",
        about_p1: "Ich bin János Cseh, Einzelunternehmer mit mehr als zwanzig Jahren Erfahrung. Mein Geschäft befindet sich im Herzen von Balatonfüred, wo ich alle herzlich willkommen heiße – ob Schlüsselkopie, Schlossservice, Gravur oder Messerschleifen.",
        about_p2: "Als offizieller Mul-T-Lock Partner biete ich eine breite Auswahl an zuverlässigen, hochwertigen Schließzylindern und Vorhängeschlössern, damit Ihr Zuhause und Ihre Wertsachen immer sicher sind. Ich passe mich flexibel an Ihre Bedürfnisse an und bemühe mich immer, einen schnellen, präzisen und hilfsbereiten Service zu bieten.",
        about_p3: "Wenn Ihnen Fachwissen, gute Atmosphäre und faire Preise wichtig sind, kommen Sie zu mir – bei mir gehen Sicherheit und Aufmerksamkeit Hand in Hand.",
        about_highlight1_h3: "20+ Jahre Erfahrung",
        about_highlight1_p: "Mehr als zwei Jahrzehnte Fachwissen und Engagement",
        about_highlight2_h3: "Mul-T-Lock Partner",
        about_highlight2_p: "Offizielle Partnerschaft mit einem der zuverlässigsten Schlosshersteller",
        about_highlight3_h3: "Balatonfüred",
        about_highlight3_p: "Lokale Expertise und Gemeinschaftsverbindungen",
        about_highlight4_h3: "Qualitätsarbeit",
        about_highlight4_p: "Präzision, Schnelligkeit und hilfsbereite Haltung",
        
        // Promo box
        promo_badge: "⛸️ NEU!",
        promo_title: "Schlittschuh-<br>Schleifen",
        promo_subtitle: "Perfekte Kante für das perfekte Erlebnis!",
        promo_description: "Bringen Sie Ihre Schlittschuhe zu uns und lassen Sie sie schnell, präzise und zu erschwinglichen Preisen schleifen. Für Sportler und Hobbysportler gleichermaßen.",
        promo_link: "Mehr erfahren →",
        
        // Store status
        status_prefix: "Unser Geschäft ist gerade:",
        status_open: "Geöffnet",
        status_closed: "Geschlossen",
        status_holiday_note: "Weihnachtspause - Öffnung: 5. Januar 2026",
        status_holiday: "Feiertag - nächste Öffnung am nächsten Werktag",
        status_opens_today_morning: "Öffnung: Heute 08:00",
        status_opens_today_afternoon: "Öffnung: Heute 13:00",
        status_opens_tomorrow: "Öffnung: Morgen 08:00",
        status_opens_monday: "Öffnung: Montag 08:00",
        
        // SEO Meta
        meta_title: "Schlüssel-Schloss Service Balatonfüred | Schlüsselkopie, Schlossreparatur, Schleifen",
        meta_description: "Schlüssel-Schloss Service im Zentrum von Balatonfüred. Schlüsselkopie, Schlossreparatur, Autoschlüssel-Programmierung, Messer-, Scheren- und Schlittschuhschleifen, Gravur. Offizieller Mul-T-Lock Partner. 20+ Jahre Erfahrung. Mo–Fr: 08:00–12:30, 13:00–16:30. Kostenloser Kostenvoranschlag: +36 30 217 7013. Balatonfüred Markthalle, Malom köz 2.",
        meta_keywords: "Schlüsselkopie Balatonfüred, Schlossreparatur Service, Autoschlüssel kopieren programmieren, Messerschleifen Scherenschleifen Schlittschuhschleifen, Gravur Schlüssel, Mul-T-Lock Sicherheitsschloss, Schlossdienst Balatonfüred, Cseh János Schlüsseldienst, Schlüssel-Schloss Service Balatonfüred, Autoschlüssel Ersatz, Schließzylinder Austausch, Graveur Balatonfüred",
        meta_og_title: "Schlüssel-Schloss Service Balatonfüred | Schlüsselkopie, Schlossreparatur, Schleifen",
        meta_og_description: "Professionelle Schlüsselkopie, Schlossreparatur und Messerschleifen in Balatonfüred. Mul-T-Lock Partner, 20+ Jahre Erfahrung. Rufen Sie an: +36 30 217 7013",
        
        // Services page SEO
        meta_title_services: "Leistungen - Schlüsselkopie, Schlossreparatur | Schlüssel-Schloss Service Balatonfüred",
        meta_description_services: "Schlüssel-Schloss Service Leistungen in Balatonfüred: Schlüsselkopie, Schlossreparatur, Autoschlüssel kopieren, Messer-Scherenschleifen, Gravur. Offizieller Mul-T-Lock Partner. ☎ +36 30 217 7013",
        meta_keywords_services: "Schlüsselkopie Balatonfüred, Schlossreparatur Service, Autoschlüssel kopieren, Messerschleifen, Scherenschleifen, Gravur, Mul-T-Lock, Sicherheitsschlösser",
        
        // Contact page SEO
        meta_title_contact: "Kontakt - Kontaktdaten | Schlüssel-Schloss Service Balatonfüred",
        meta_description_contact: "Kontakt - Schlüssel-Schloss Service Balatonfüred. Adresse: Malom köz 2. Markthalle. Telefon: +36 30 217 7013. Email: kulcs.zar.szerviz@gmail.com. Geöffnet: Mo–Fr 08:00–12:30, 13:00–16:30",
        meta_keywords_contact: "Schlüssel-Schloss Kontakt Balatonfüred, Schlüsseldienst Öffnungszeiten, Schlossdienst Kontakt, Malom köz",
        
        // About page SEO
        meta_title_about: "Über uns - János Cseh | Schlüssel-Schloss Service Balatonfüred",
        meta_description_about: "János Cseh - 20+ Jahre Erfahrung in Schlüsselkopie, Schlossreparatur. Offizieller Mul-T-Lock Partner in Balatonfüred. Qualitätsarbeit, zuverlässiger Service.",
        meta_keywords_about: "János Cseh, Schlüssel-Schloss Meister, Balatonfüred Schlüsseldienst, Mul-T-Lock Partner, erfahrener Schlossdienst",
        
        // Contact page
        contact_h1: "Kontakt",
        contact_p: "Nehmen Sie Kontakt mit uns auf! Wir beantworten gerne Ihre Fragen.",
        contact_info_h2: "Unsere Kontaktdaten",
        contact_address: "📍 Adresse:",
        contact_phone: "📞 Telefon:",
        contact_email: "📧 E-Mail:",
        
        // Why us
        why_title: "Warum uns wählen?",
        
        why_exp_title: "20+ Jahre Erfahrung",
        why_exp_desc: "Jahrzehntelange Expertise im Schlüssel- und Schlosshandwerk",
        
        why_quality_title: "Qualitätsservice",
        why_quality_desc: "Präzise Arbeit, hochwertige Materialien",
        
        why_fast_title: "Schneller Service",
        why_fast_desc: "Die meisten Dienstleistungen sofort vor Ort durchführbar",
        
        why_partner_title: "Mul-T-Lock Partner",
        why_partner_desc: "Offizieller Händler und Servicenetzwerk-Mitglied",
        
        // CTA
        cta_title: "Haben Sie Fragen oder möchten Sie ein Angebot?",
        cta_subtitle: "Rufen Sie uns gerne an oder besuchen Sie uns!",
        cta_button: "Kontakt",
        cta_phone: "Telefon",
        
        // Footer
        footer_about_title: "Schlüssel-Schloss Service",
        footer_about_text: "Professionelle Schlüssel- und Schlossservices in Balatonfüred mit über 20 Jahren Erfahrung.",
        footer_contact_title: "Kontakt",
        footer_services_title: "Leistungen",
        footer_hours_title: "Öffnungszeiten",
        footer_rights: "Alle Rechte vorbehalten",
        
        // Services page
        services_page_title: "Unsere Leistungen",
        services_page_subtitle: "Komplexe Schlüssel- und Schlosslösungen für jeden Bedarf",
        
        keys_detail_title: "Schlüsselkopie und Schlüsselservice",
        keys_detail_desc: "Professionelle Schlüsselkopie für alle Typen - Wohnungsschlüssel, Büroschlüssel, Autoschlüssel, Tresroschlüssel. Wir verwenden modernste Schlüsselkopiermaschinen, um präzise Passform und lange Lebensdauer zu garantieren.",
        keys_detail_feature1: "Kopie aller Schlüsseltypen",
        keys_detail_feature2: "Schnell vor Ort (5-10 Minuten)",
        keys_detail_feature3: "Präzisionsarbeit",
        keys_detail_feature4: "Günstige Preise mit Qualitätsgarantie",
        
        locks_detail_title: "Schlossreparatur und Schlosseinbau",
        locks_detail_desc: "Vollständiger Schlossservice - Schlossaustausch, Reparatur, neue Schlösser einbauen. Als offizieller Mul-T-Lock Partner bieten wir modernste Sicherheitslösungen. Schneller und zuverlässiger Service.",
        locks_detail_feature1: "Schlosszylinder Austausch, Reparatur",
        locks_detail_feature2: "Installation neuer Schlösser",
        locks_detail_feature3: "Sicherheitsschlösser (Mul-T-Lock)",
        locks_detail_feature4: "Türöffnung ohne Beschädigung",
        
        car_detail_title: "Autoschlüssel kopieren und programmieren",
        car_detail_desc: "Kopieren und Programmieren von Autoschlüsseln für moderne Fahrzeuge. Immobilizer-Schlüssel, Fernbedienungen programmieren. Wir arbeiten mit den meisten Automarken - schneller und zuverlässiger Service.",
        car_detail_feature1: "Autoschlüssel kopieren und programmieren",
        car_detail_feature2: "Immobilizer-Schlüssel",
        car_detail_feature3: "Fernbedienung programmieren",
        car_detail_feature4: "Schneller Service",
        
        sharp_detail_title: "Messer-, Scheren- und Schlittschuhschleifen",
        sharp_detail_desc: "Professioneller Schleifservice für Haushalt, professionelle und Sportgeräte. Wir arbeiten mit Präzisionsschleifmaschinen - wieder scharfe Werkzeuge, lange Lebensdauer. Messer, Scheren, Schlittschuhe.",
        sharp_detail_feature1: "Messerschleifen (Küche, Jagd, usw.)",
        sharp_detail_feature2: "Scherenschleifen (Haushalt, Friseur)",
        sharp_detail_feature3: "Schlittschuhschleifen (Eiskunstlauf, Eishockey)",
        sharp_detail_feature4: "Präzisionsarbeit",
        
        engrave_detail_title: "Gravur und Gravurservice",
        engrave_detail_desc: "Individueller Gravurservice für Schlüssel, Schilder, Geschenke. Personalisierte Inschriften, Logos, Muster. Präzise Arbeit, schnelle Lieferung.",
        engrave_detail_feature1: "Schlüsselgravur",
        engrave_detail_feature2: "Geschenke personalisieren",
        engrave_detail_feature3: "Schilder, Inschriften anfertigen",
        engrave_detail_feature4: "Individuelle Muster, Logos",
        
        emergency_detail_title: "Notdienst und Türöffnung",
        emergency_detail_desc: "Schnelle Hilfe bei Aussperrung! Türöffnung ohne Beschädigung, Zugang ohne Schlüssel. Rufen Sie uns an unter +36 30 217 7013 - schnelle Reaktion, zuverlässige Lösung.",
        emergency_detail_feature1: "Schnelle Anfahrt bei Aussperrung",
        emergency_detail_feature2: "Türöffnung ohne Beschädigung",
        emergency_detail_feature3: "Zugang ohne Schlüssel",
        emergency_detail_feature4: "24/7 telefonische Erreichbarkeit",
        
        // Contact page
        contact_page_title: "Kontaktieren Sie uns",
        contact_page_subtitle: "Haben Sie Fragen oder möchten Sie uns persönlich kontaktieren?",
        
        contact_info_title: "Unsere Kontaktdaten",
        contact_address: "Adresse",
        contact_address_value: "8230 Balatonfüred, Malom köz 2.<br>Markthalle",
        contact_phone: "Telefon",
        contact_email: "E-Mail",
        contact_hours: "Öffnungszeiten",
        contact_hours_weekday: "Montag – Freitag",
        contact_hours_weekend: "Samstag – Sonntag",
        contact_closed: "Geschlossen",
        
        contact_form_title: "Nachricht senden",
        contact_form_name: "Name",
        contact_form_email: "E-Mail Adresse",
        contact_form_subject: "Betreff",
        contact_form_message: "Nachricht",
        contact_form_send: "Nachricht Senden",
        contact_form_sending: "Senden...",
        contact_form_success: "✓ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
        contact_form_error: "✗ Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        
        contact_map_title: "Finden Sie uns",
        
        // About page
        about_page_title: "Über uns",
        about_page_subtitle: "Zuverlässiger Schlüssel- und Schlossservice in Balatonfüred seit über 20 Jahren",
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        
        // Gomb
        btn_more: "More...",
        
        // Hero
        hero_title: "Key-Lock Service Balatonfüred",
        hero_h2: "Key Copying, Lock Repair, Car Keys, Sharpening",
        hero_subtitle: "20+ years of experience • Mul-T-Lock partner • Fast service<br>Knife, scissors and skate sharpening • Engraving • Free quote",
        
        // Services
        services_title: "Key-Lock Service Balatonfüred - Our Services",
        
        service_keys_title: "Key Copying",
        service_keys_desc: "Fast and precise key copying for almost any type of key. Traditional keys, security keys, apartment keys, office keys. Instant service, affordable prices. Need a key? We'll help immediately!",
        
        service_locks_title: "Lock Repair",
        service_locks_desc: "Professional lock repair and lock replacement service. Lock cylinder replacement, lock oiling, lock cleaning. Official partner of Mul-T-Lock security locks. Lock broken? Don't risk it! Fast and secure lock repair from a professional.",
        
        service_car_title: "Car Keys",
        service_car_desc: "Car key copying and programming. Remote control keys, chip keys, smart keys. Car key copying fast and secure. With professional machines, by experienced specialists.",
        
        service_sharp_title: "Sharpening",
        service_sharp_desc: "Professional knife and scissors sharpening. Kitchen tools, chef knives, garden tools. Precise, sharp result. Sharp tool = easier work! Knife, scissors and tool sharpening with modern technology.",
        
        service_engrave_title: "Engraving",
        service_engrave_desc: "Personalized inscriptions, logos, names. Quality work, affordable prices. Name plates and other inscriptions engraved in professional quality!",
        
        service_multlock_title: "Mul-T-Lock",
        service_multlock_desc: "Installation and repair of Mul-T-Lock security locks. Security without compromise – Mul-T-Lock! As a resale partner, we offer Mul-T-Lock premium products: security locks, key systems, cylinder inserts.",
        
        service_skate_title: "Skate Sharpening",
        service_skate_desc: "Professional skate sharpening for maximum speed and stability on ice. Fast, precise, affordable skate sharpening in the center of Balatonfüred.",
        
        service_sales_title: "Sales",
        service_sales_desc: "In our store in Balatonfüred you'll find everything you need for security: locks, padlocks, keys and accessories – all in one place, conveniently! For custom requirements, we'll quickly and affordably procure what you need.",
        
        // Footer
        footer_about_title: "About Us",
        footer_about_text: "I am János Cseh, an individual entrepreneur with more than twenty years of experience. My shop is located in the heart of Balatonfüred, where I welcome everyone – whether it's key copying, lock service, engraving or knife sharpening.",
        footer_contact_title: "Contact",
        footer_hours_title: "Opening Hours",
        footer_hours_weekday: "Mon–Fri: 8:00 AM–12:30 PM, 1:00 PM–4:30 PM",
        footer_hours_weekend: "Sat–Sun: Closed",
        footer_quicklinks_title: "Quick Links",
        footer_reviews_title: "Google Reviews",
        
        // Services page
        services_page_h1: "Our Services",
        services_page_p: "Professional lock services for every need. More than 20 years of experience.",
        
        serv_keys_h2: "Key Copying",
        serv_keys_p: "Fast and accurate key copying for almost any lock type. Professional quality guaranteed. We work with modern technology to ensure every key fits perfectly.",
        serv_keys_f1: "Apartment and office keys",
        serv_keys_f2: "Security lock keys",
        serv_keys_f3: "Special keys",
        serv_keys_f4: "Fast service",
        serv_keys_f5: "Precise copying",
        serv_keys_f6: "Affordable prices",
        
        serv_locks_h2: "Lock Repair",
        serv_locks_p: "We repair damaged or broken locks quickly and professionally. Reliable solution for every lock type, whether apartment, office or shop.",
        serv_locks_f1: "Door lock repair",
        serv_locks_f2: "Cylinder replacement",
        serv_locks_f3: "Lock mechanism repair",
        serv_locks_f4: "Professional tools",
        serv_locks_f5: "Quick solution",
        
        // Car keys
        serv_autokey_h2: "Car Keys",
        serv_autokey_p: "Car key copying and repair with modern technology. Damaged car key replacement for the best results.",
        serv_autokey_f1: "Car key copying",
        serv_autokey_f2: "Chip key programming",
        serv_autokey_f3: "Key repair",
        serv_autokey_f4: "Various brands",
        serv_autokey_f5: "Expert advice",
        serv_autokey_note: "Determining exact options and costs requires prior consultation. Please contact us for more information and appointment scheduling!",
        
        // Sharpening
        serv_sharp_h2: "Sharpening",
        serv_sharp_p: "Professional knife sharpening service. Dull knives, scissors and other cutting tools sharpened precisely and quickly.",
        serv_sharp_f1: "Kitchen knife sharpening",
        serv_sharp_f2: "Scissors sharpening",
        serv_sharp_f3: "Grinder sharpening",
        serv_sharp_f4: "Garden tools",
        serv_sharp_f5: "Precise work",
        serv_sharp_f6: "Fast service",
        serv_sharp_f7: "Fair prices",
        
        // Skate sharpening
        serv_skate_h2: "Skate Sharpening",
        serv_skate_p: "Perfect edge for the perfect experience! Bring your skates and have them sharpened fast, precisely, at affordable prices. For athletes and hobbyists alike.",
        serv_skate_f1: "Ice skate sharpening",
        serv_skate_f2: "Children's and adult skates",
        serv_skate_f3: "Sport and hobby",
        serv_skate_f4: "Fast turnaround",
        serv_skate_f5: "Professional machines",
        serv_skate_f6: "Affordable prices",
        
        // Engraving
        serv_engr_h2: "Engraving",
        serv_engr_p: "Personalized solutions according to your needs.",
        serv_engr_f1: "Name plate engraving",
        serv_engr_f2: "Custom inscription",
        serv_engr_f3: "Identification plates",
        serv_engr_f4: "Precise work",
        serv_engr_f5: "Fast turnaround",
        serv_engr_f6: "Custom requests",
        
        // Mul-T-Lock
        serv_multlock_h2: "Mul-T-Lock",
        serv_multlock_p: "Official Mul-T-Lock partner. Premium security locks and key service. The highest level of security for your home and valuables.",
        serv_multlock_f1: "Mul-T-Lock locks",
        serv_multlock_f2: "Official partner",
        serv_multlock_f3: "Key copying",
        serv_multlock_f4: "Lock replacement, installation",
        serv_multlock_f5: "High security",
        serv_multlock_f6: "Warranty",
        
        // Sales
        serv_sales_h2: "Sales",
        serv_sales_p: "In our store in Balatonfüred you'll find locks, padlocks, keys and accessories – everything in one place! For custom requirements, we'll quickly and affordably procure what you need.",
        serv_sales_f1: "Lock cylinders and padlocks – individually or programmed into a system",
        serv_sales_f2: "Mortise locks – traditional and security versions",
        serv_sales_f3: "Security solutions – bolt locks, multi-point lock handles, security shields",
        serv_sales_f4: "Rim locks and auxiliary locks",
        serv_sales_f5: "Furniture locks",
        serv_sales_f6: "Padlocks",
        serv_sales_f7: "Handles, labels",
        serv_sales_f8: "Mailboxes, cash boxes, key cabinets",
        serv_sales_f9: "Key rings, key markers and other accessories",
        
        // CTA
        serv_cta_h2: "Have a question?",
        serv_cta_p: "Contact us! We're happy to help with all your needs.",
        serv_cta_button: "Contact Us",
        
        // Contact page
        contact_h1: "Contact",
        contact_p: "Get in touch with us! We're happy to answer your questions.",
        contact_info_h2: "Our Contact Details",
        contact_address: "📍 Address:",
        contact_phone: "📞 Phone:",
        contact_email: "📧 Email:",
        contact_hours: "🕒 Opening Hours:",
        contact_hours_weekday: "Monday–Friday:",
        contact_hours_saturday: "Saturday:",
        contact_hours_sunday: "Sunday:",
        contact_hours_closed: "Closed",
        contact_form_h2: "Send Message",
        contact_form_name: "Name *",
        contact_form_email: "Email *",
        contact_form_phone: "Phone",
        contact_form_subject: "Subject *",
        contact_form_message: "Message *",
        contact_form_submit: "Send",
        
        // About page
        about_h1: "About Us",
        about_tagline: "The key to security – from the heart, in Balatonfüred",
        about_p1: "I am János Cseh, an individual entrepreneur with more than twenty years of experience. My shop is located in the heart of Balatonfüred, where I welcome everyone – whether it's key copying, lock service, engraving or knife sharpening.",
        about_p2: "As an official Mul-T-Lock partner, I offer a wide selection of reliable, quality lock cylinders and padlocks so your home and valuables are always safe. I flexibly adapt to your needs and always strive to provide fast, accurate and helpful service.",
        about_p3: "If expertise, good atmosphere and fair prices are important to you, come visit me – with me, security and attentiveness go hand in hand.",
        about_highlight1_h3: "20+ Years Experience",
        about_highlight1_p: "More than two decades of professional knowledge and dedication",
        about_highlight2_h3: "Mul-T-Lock Partner",
        about_highlight2_p: "Official partnership with one of the most reliable lock manufacturers",
        about_highlight3_h3: "Balatonfüred",
        about_highlight3_p: "Local expertise and community connections",
        about_highlight4_h3: "Quality Work",
        about_highlight4_p: "Precision, speed and helpful attitude",
        
        // Promo box
        promo_badge: "⛸️ NEW!",
        promo_title: "Skate Sharpening",
        promo_subtitle: "Perfect edge for the perfect experience!",
        promo_description: "Bring your skates and have them sharpened fast, precisely, at affordable prices. For athletes and hobbyists alike.",
        promo_link: "Learn more →",
        
        // Store status
        status_prefix: "Our store is currently:",
        status_open: "Open",
        status_closed: "Closed",
        status_holiday_note: "Christmas break - Opening: January 5, 2026",
        status_holiday: "Public holiday - next opening on the next business day",
        status_opens_today_morning: "Opening: Today 08:00 AM",
        status_opens_today_afternoon: "Opening: Today 01:00 PM",
        status_opens_tomorrow: "Opening: Tomorrow 08:00 AM",
        status_opens_monday: "Opening: Monday 08:00 AM",
        
        // SEO Meta
        meta_title: "Key-Lock Service Balatonfüred | Key Copying, Lock Repair, Sharpening",
        meta_description: "Key-Lock Service in the center of Balatonfüred. Key copying, lock repair, car key programming, knife, scissors and skate sharpening, engraving. Official Mul-T-Lock partner. 20+ years experience. Mon–Fri: 08:00–12:30, 01:00–04:30 PM. Free quote: +36 30 217 7013. Balatonfüred Market Hall, Malom köz 2.",
        meta_keywords: "key copying Balatonfüred, lock repair service, car key copying programming, knife sharpening scissors sharpening skate sharpening, engraving key, Mul-T-Lock security lock, locksmith Balatonfüred, Cseh János locksmith, key-lock service Balatonfüred, car key replacement, cylinder replacement, engraver Balatonfüred",
        meta_og_title: "Key-Lock Service Balatonfüred | Key Copying, Lock Repair, Sharpening",
        meta_og_description: "Professional key copying, lock repair and knife sharpening in Balatonfüred. Mul-T-Lock partner, 20+ years experience. Call: +36 30 217 7013",
        
        // Services page SEO
        meta_title_services: "Services - Key Copying, Lock Repair | Key-Lock Service Balatonfüred",
        meta_description_services: "Key-Lock Service services in Balatonfüred: key copying, lock repair, car key copying, knife-scissor sharpening, engraving. Official Mul-T-Lock partner. ☎ +36 30 217 7013",
        meta_keywords_services: "key copying Balatonfüred, lock repair service, car key copying, knife sharpening, scissor sharpening, engraving, Mul-T-Lock, security locks",
        
        // Contact page SEO
        meta_title_contact: "Contact - Contact Details | Key-Lock Service Balatonfüred",
        meta_description_contact: "Contact - Key-Lock Service Balatonfüred. Address: Malom köz 2. Market Hall. Phone: +36 30 217 7013. Email: kulcs.zar.szerviz@gmail.com. Open: Mon–Fri 08:00–12:30, 01:00–04:30 PM",
        meta_keywords_contact: "key-lock contact Balatonfüred, locksmith opening hours, lock service contact, Malom köz",
        
        // About page SEO
        meta_title_about: "About Us - János Cseh | Key-Lock Service Balatonfüred",
        meta_description_about: "János Cseh - 20+ years experience in key copying, lock repair. Official Mul-T-Lock partner in Balatonfüred. Quality work, reliable service.",
        meta_keywords_about: "János Cseh, key-lock master, Balatonfüred locksmith, Mul-T-Lock partner, experienced lock service",
        
        // Contact page
        contact_h1: "Contact",
        contact_p: "Get in touch with us! We're happy to answer your questions.",
        contact_info_h2: "Our Contact Details",
        contact_address: "📍 Address:",
        contact_phone: "📞 Phone:",
        contact_email: "📧 Email:",
        
        // Why us
        why_title: "Why Choose Us?",
        
        why_exp_title: "20+ Years Experience",
        why_exp_desc: "Decades of expertise in key and lock industry",
        
        why_quality_title: "Quality Service",
        why_quality_desc: "Precise workmanship, high-quality materials",
        
        why_fast_title: "Fast Service",
        why_fast_desc: "Most services can be done immediately on-site",
        
        why_partner_title: "Mul-T-Lock Partner",
        why_partner_desc: "Official dealer and service network member",
        
        // CTA
        cta_title: "Have questions or want a quote?",
        cta_subtitle: "Call us or visit us!",
        cta_button: "Contact Us",
        cta_phone: "Phone",
        
        // Footer
        footer_about_title: "Key-Lock Service",
        footer_about_text: "Professional key and lock services in Balatonfüred with over 20 years of experience.",
        footer_contact_title: "Contact",
        footer_services_title: "Services",
        footer_hours_title: "Hours",
        footer_rights: "All rights reserved",
        
        // Services page
        services_page_title: "Our Services",
        services_page_subtitle: "Comprehensive key and lock solutions for every need",
        
        keys_detail_title: "Key Copying and Key Service",
        keys_detail_desc: "Professional key copying for all types - apartment keys, office keys, car keys, safe keys. We use the most modern key copying machines to guarantee precise fit and long lifespan.",
        keys_detail_feature1: "All key types copying",
        keys_detail_feature2: "Fast on-site completion (5-10 minutes)",
        keys_detail_feature3: "Precision workmanship",
        keys_detail_feature4: "Affordable prices with quality guarantee",
        
        locks_detail_title: "Lock Repair and Installation",
        locks_detail_desc: "Complete lock service - lock replacement, repair, new lock installation. As an official Mul-T-Lock partner, we offer the most modern security solutions. Fast and reliable service.",
        locks_detail_feature1: "Lock cylinder replacement, repair",
        locks_detail_feature2: "New lock installation",
        locks_detail_feature3: "Security locks (Mul-T-Lock)",
        locks_detail_feature4: "Lock opening without damage",
        
        car_detail_title: "Car Key Copying and Programming",
        car_detail_desc: "Copying and programming car keys for modern vehicles. Immobilizer keys, remote controls programming. We work with most car brands - fast and reliable service.",
        car_detail_feature1: "Car key copying and programming",
        car_detail_feature2: "Immobilizer keys",
        car_detail_feature3: "Remote control programming",
        car_detail_feature4: "Fast service",
        
        sharp_detail_title: "Knife, Scissors and Skate Sharpening",
        sharp_detail_desc: "Professional sharpening service for household, professional and sports equipment. We work with precision grinding machines - sharp cutting tools again, long lifespan. Knives, scissors, skates.",
        sharp_detail_feature1: "Knife sharpening (kitchen, hunting, etc.)",
        sharp_detail_feature2: "Scissors sharpening (household, barber)",
        sharp_detail_feature3: "Skate sharpening (figure skating, ice hockey)",
        sharp_detail_feature4: "Precision workmanship",
        
        engrave_detail_title: "Engraving and Engraver Service",
        engrave_detail_desc: "Custom engraving service for keys, plates, gifts. Personalized inscriptions, logos, patterns. Precise work, fast delivery.",
        engrave_detail_feature1: "Key engraving",
        engrave_detail_feature2: "Gift personalization",
        engrave_detail_feature3: "Plates, inscriptions making",
        engrave_detail_feature4: "Custom patterns, logos",
        
        emergency_detail_title: "Emergency Service and Lock Opening",
        emergency_detail_desc: "Fast help in case of lockout! Lock opening without damage, access without key. Call us at +36 30 217 7013 - quick response, reliable solution.",
        emergency_detail_feature1: "Fast arrival in case of lockout",
        emergency_detail_feature2: "Lock opening without damage",
        emergency_detail_feature3: "Access without key",
        emergency_detail_feature4: "24/7 phone availability",
        
        // Contact page
        contact_page_title: "Get in Touch",
        contact_page_subtitle: "Have questions or want to reach us personally?",
        
        contact_info_title: "Our Contact Details",
        contact_address: "Address",
        contact_address_value: "8230 Balatonfüred, Malom köz 2.<br>Market Hall",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_hours: "Opening Hours",
        contact_hours_weekday: "Monday – Friday",
        contact_hours_weekend: "Saturday – Sunday",
        contact_closed: "Closed",
        
        contact_form_title: "Send Message",
        contact_form_name: "Name",
        contact_form_email: "Email Address",
        contact_form_subject: "Subject",
        contact_form_message: "Message",
        contact_form_send: "Send Message",
        contact_form_sending: "Sending...",
        contact_form_success: "✓ Thank you! Your message has been sent successfully.",
        contact_form_error: "✗ An error occurred while sending the message. Please try again later.",
        
        contact_map_title: "Find Us",
        
        // About page
        about_page_title: "About Us",
        about_page_subtitle: "Reliable key and lock service in Balatonfüred for over 20 years",
    }
};

// Nyelvváltó JavaScript
// Böngésző nyelvének felismerése
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.substring(0, 2).toLowerCase();
    
    // Támogatott nyelvek: hu, de, en
    if (['hu', 'de', 'en'].includes(langCode)) {
        return langCode;
    }
    
    // Alapértelmezett: magyar
    return 'hu';
}

// Ha nincs localStorage-ben mentett nyelv, használja a böngésző nyelvét
let currentLang = localStorage.getItem('language') || detectBrowserLanguage();

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateContent();
    updateActiveLanguageButton();
    
    // Frissítse a nyitvatartási státuszt is, ha létezik
    if (typeof updateStoreStatus === 'function') {
        updateStoreStatus();
    }
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.innerHTML = translations[currentLang][key];
            }
        }
    });
    
    // Frissítse a meta tageket is
    updateMetaTags();
}

function updateMetaTags() {
    const lang = currentLang;
    const t = translations[lang];
    
    if (!t) return;
    
    // Határozza meg melyik oldalon vagyunk
    const path = window.location.pathname;
    let pageSuffix = '';
    
    if (path.includes('services.html')) {
        pageSuffix = '_services';
    } else if (path.includes('contact.html')) {
        pageSuffix = '_contact';
    } else if (path.includes('about.html')) {
        pageSuffix = '_about';
    }
    
    // Title
    const titleKey = 'meta_title' + pageSuffix;
    if (t[titleKey]) {
        document.title = t[titleKey];
    }
    
    // Description
    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = 'meta_description' + pageSuffix;
    if (metaDesc && t[descKey]) {
        metaDesc.setAttribute('content', t[descKey]);
    }
    
    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsKey = 'meta_keywords' + pageSuffix;
    if (metaKeywords && t[keywordsKey]) {
        metaKeywords.setAttribute('content', t[keywordsKey]);
    }
    
    // Language
    const metaLang = document.querySelector('meta[name="language"]');
    if (metaLang) {
        metaLang.setAttribute('content', lang);
    }
    
    // HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t.meta_og_title) {
        ogTitle.setAttribute('content', t.meta_og_title);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t.meta_og_description) {
        ogDesc.setAttribute('content', t.meta_og_description);
    }
    
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
        const locales = { hu: 'hu_HU', de: 'de_DE', en: 'en_US' };
        ogLocale.setAttribute('content', locales[lang] || 'hu_HU');
    }
    
    // Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && t.meta_og_title) {
        twitterTitle.setAttribute('content', t.meta_og_title);
    }
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc && t.meta_og_description) {
        twitterDesc.setAttribute('content', t.meta_og_description);
    }
}

function updateActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.lang-btn[onclick*="'${currentLang}'"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Inicializálás betöltéskor
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
});
