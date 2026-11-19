# Fronted Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Fronted Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Fronted Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project structure](#project-structure)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#AI-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](<img width="1440" height="1056" alt="preview" src="https://github.com/user-attachments/assets/7bac578f-7d53-405b-80b7-2193e36fd433" />
)

### Links

- Solution URL: [GitHub repository](https://github.com/Mohamed806H/Space-tourism-kyootae.git)
- Live Site URL: [space-project-kohl.vercel.app](https://space-project-kohl.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flex box
- Mobile-first workflow
- [React 19](https://react.dev) - JS library
- [Vite](https://vite.dev) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- [React Router](https://reactrouter.com) - Client-side routing

### Project structure

```
├── public/assets/        # Images, backgrounds and icons
├── src/
│   ├── components/       # Navigation + components for Destinations, Crew and Technology
│   ├── pages/            # Home, Destination, Crew, Technology
│   ├── data.json         # Navigation, destinations, crew and technology content
│   ├── App.jsx           # Routes
│   └── main.jsx          # Entry point
├── vercel.json           # Rewrites all routes to index.html (SPA routing)
└── vite.config.js
```


### What I learned

- **Data-driven pages.** Instead of hard-coding three copies of the same layout, each page reads its content from `data.json` and keeps only the selected index in state. Adding a new destination, crew member or technology only means adding an object to the JSON file.

```jsx
const [currentIndex, setCurrentIndex] = useState(0);
const currentTech = data.technology[currentIndex];
```

- **Art direction with `<picture>`.** The Technology page shows a portrait image on desktop and a landscape one on mobile and tablet. Using `<source media>` swaps the image instead of cropping a single one with CSS.

```jsx
<picture>
  <source media="(min-width: 1024px)" srcSet={images?.portrait} />
  <img src={images?.landscape} alt={name} className="w-full h-full object-cover" />
</picture>
```

- **Matching a design across breakpoints.** I measured the design file for each breakpoint and mapped it to Tailwind's responsive utilities (sizes, spacing and line heights), which showed me how much a typo in a utility class like `lg:flex-row-` can silently break a layout.
- **SPA routing on Vercel.** `BrowserRouter` only works after `index.html` loads, so opening `/crew` directly returned a 404. A rewrite rule in `vercel.json` fixed it.
- **Accessibility basics.** I used `aria-current` on the tab buttons, `aria-expanded` on the menu toggle, `inert` on the closed mobile menu so keyboard users don't tab through hidden links, Escape to close the menu, and a proper heading structure (one `<h1>` per page, wrapped in `<main>`).

### Continued development

- Replace the large per-breakpoint margins on the Home and Destination pages with the shared `max-w-277.5 mx-auto` container already used on the Crew and Technology pages.
- Add an ESLint config so `npm run lint` works.
- Add keyboard support for the tabs (arrow keys) and a focus trap for the mobile menu.

### Useful resources

- [React Router docs](https://reactrouter.com) - Helped me set up routes and active `NavLink` styles.
- [Tailwind CSS docs](https://tailwindcss.com/docs) - Reference for the responsive utilities and the v4 changes.
- [MDN: the picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - Explained how to serve different images by viewport.
- [MDN: the inert attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert) - Helped me hide the closed mobile menu from keyboard and screen reader users.
- [Vercel: rewrites](https://vercel.com/docs/project-configuration#rewrites) - Fixed the 404 on direct links.

### AI Collaboration

I used Claude as a code reviewer and pair-programming assistant:

- **Responsive fixes:** comparing my Tailwind classes against the Figma design values and finding a typo in a layout class.
- **Accessibility review:** headings, `<main>`, keyboard navigation in the mobile menu and `aria` attributes.
- **Deployment:** finding the cause of the 404 on Vercel and writing this README.

What worked well was asking for small, targeted changes to existing files instead of rewriting components. What didn't: it can't see the rendered page, so I still had to check every layout change in the browser myself.

## Author

- Website - [Mohamed Hussein](https://my-portfolio-5thcet2wq-mohamed806hs-projects.vercel.app/)
- Frontend Mentor - [@Mohamed806H](https://www.frontendmentor.io/profile/Mohamed806H)
- GitHub - [@Mohamed806H](https://github.com/Mohamed806H)

## Acknowledgments

Design and assets by [Frontend Mentor](https://www.frontendmentor.io).
