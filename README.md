# Lady Dev Zubia — portfolio (Next.js)

Portfolio of Zubia Ahsanullah, full stack developer in Karachi. Built with Next.js 14 (App Router), plain CSS and no UI library.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build and deploy

```bash
npm run build
npm start
```

To deploy on Vercel, push this folder to a GitHub repository and import it at vercel.com. No settings need changing.

## Where to edit

| What | File |
|---|---|
| Text: roles, services, websites, skills, jobs, education, LinkedIn link | `data/content.js` |
| Project screenshots | `public/projects/*.jpg` (keep a 16:10 ratio) |
| Logo | `public/logo.png` |
| ERP and CRM screen illustrations | `components/SystemMocks.jsx` |
| Colours, fonts, animations | `app/globals.css` (tokens are at the top, in `:root`) |

To add contact details later, edit `components/Contact.jsx`.

## Animations

- Liquid surfaces (hero bottom, contact section) are clip-path polygons redrawn every frame: `components/Waves.jsx`.
- Blocks with the classes `rv`, `rv-c` and `rv-w` reveal with a clip-path animation as they scroll into view: `components/ClientEffects.jsx`.
- Everything respects the visitor's "reduce motion" setting.
