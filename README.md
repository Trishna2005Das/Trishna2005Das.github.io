# Trishna Das - Developer Portfolio

This repository contains my personal portfolio website, developed using React, Vite, Tailwind CSS, and shadcn/ui. The site highlights my technical skills, project experience, and contact information for professional opportunities.

Live Demo: [trishna2005das.github.io](https://trishna2005das.github.io)

---

## Technology Stack

- [Vite](https://vitejs.dev/): Fast development and build tool
- [React](https://react.dev/): Modern frontend framework
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
- [Lucide React](https://lucide.dev/): Icon library
- [shadcn/ui](https://ui.shadcn.com/): Component library
- [gh-pages](https://www.npmjs.com/package/gh-pages): GitHub Pages deployment

---

## Project Structure

```
Trishna2005Das.github.io/
├── public/
│   └── profile-image/
│       └── trish.png
├── src/
│   ├── components/
│   │   └── Contact.jsx
│   └── App.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Profile Image

To use a profile image, place your image at:

```
/public/profile-image/trish.png
```

Reference it in your code as follows:

```jsx
<img src="/profile-image/trish.png" alt="Profile" />
```

---

## Development Setup

To install dependencies:

```bash
npm install
```

To start the local development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

---

## Deployment to GitHub Pages

1. Install the `gh-pages` package:

```bash
npm install gh-pages --save-dev
```

2. Add the following scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && gh-pages -d dist"
}
```

3. Ensure the `base` property is set correctly in `vite.config.js`:

```js
export default defineConfig({
  base: '/',
  plugins: [react()],
});
```

4. Deploy the site:

```bash
npm run deploy
```

5. In your repository settings, under Pages, set the source branch to `gh-pages` if it is not set automatically.

---

## Contact

- Email: [trishnadas7897@gmail.com](mailto:trishnadas7897@gmail.com)
- LinkedIn: [linkedin.com/in/trishnadas7897](https://linkedin.com/in/trishnadas7897)
- GitHub: [github.com/Trishna2005Das](https://github.com/Trishna2005Das)

---

