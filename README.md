# Kulcs-Zár Szerviz Weboldal

Modern, letisztult design prémium hatással. Professzionális zárszolgáltatások prezentációja.

## Projekt Szerkezete

```
kulcs-zar-szerviz/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── hero/
│   └── services/
├── assets/
│   └── fonts/
└── README.md
```

## Telepítés

1. Projekt klónozása
```bash
git clone https://github.com/username/kulcs-zar-szerviz.git
```

2. VS Code-ban megnyitás
```bash
cd kulcs-zar-szerviz
code .
```

## Netlify Deploy

1. Netlify.com-ra lépni és bejelentkezni
2. "New site from Git" lehetőség választása
3. GitHub repo kiválasztása
4. Deploy settings:
   - Build command: (üres)
   - Publish directory: ./
5. Deploy

## Szerkesztés

- `index.html` - Fő oldal
- `css/style.css` - Stílus
- `js/main.js` - JavaScript funkcionalitás

## Eszközök

- `npm run convert` - Átkonvertálja az `images/` mappában található PNG/JPG képeket WebP-re (egyedi minőség paraméter: `--quality=75`).
- `npm run srcset` - Generál több felbontású WebP változatot (srcset) és frissíti a HTML fájlokat, hogy használják a `srcset`-et és `sizes` attribútumot. (Szükség esetén futtatható `npm run srcset -- --quality=75 images/services` formában.)
- `npm run dev` - Indít egy egyszerű helyi http szervert a projekt gyökérben (`http://localhost:8000`).

## Licencia

Minden jog fenntartva © 2025 Kulcs-Zár Szerviz
