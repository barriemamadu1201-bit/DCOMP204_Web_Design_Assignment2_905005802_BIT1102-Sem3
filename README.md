# RoomLink

**Verified student accommodation for universities in Sierra Leone.**

RoomLink is a responsive, multi-page front-end website that helps students find safe, affordable housing near campuses such as Fourah Bay College and Njala University. It is built with plain HTML, CSS and a small amount of vanilla JavaScript, with no frameworks, build tools or dependencies.

> **Status:** Front-end prototype (static site). Forms and search are UI-only and are not connected to a backend. See [Limitations](#limitations) and [Known Issues](#known-issues).

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Pages](#pages)
7. [Design System](#design-system)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [JavaScript](#javascript)
11. [Customization Guide](#customization-guide)
12. [Browser Support](#browser-support)
13. [Known Issues](#known-issues)
14. [Limitations](#limitations)
15. [Roadmap](#roadmap)
16. [Project Context](#project-context)
17. [Credits](#credits)

---

## Overview

Finding trustworthy student housing is hard: unverified listings, hidden fees and long commutes are common problems. RoomLink presents a concept platform that addresses this by showcasing:

- Inspected and verified properties
- Transparent monthly pricing in USD
- Campus-proximity filtering
- Booking-protection messaging and a tenant support flow
- Separate sign-up paths for students and landlords

The site is a six-page experience with one shared stylesheet and one shared script.

## Features

- **Six fully linked pages** with a consistent header, navigation and footer
- **Responsive layout** that adapts from desktop to tablet to phone
- **Mobile hamburger menu** with `aria-expanded` state handling
- **Hero section with overlapping search bar** (location, move-in date, room category)
- **Reusable property card component** with badges, rating, amenity chips, price and call-to-action
- **Listings page** with a filter sidebar (price range, room type, amenities, distance), sorting, active filter chips and pagination UI
- **Contact form** with role selection (student or landlord) and native HTML5 validation
- **Log In / Sign Up page** with a student/landlord tab design, password-strength indicator and social sign-in buttons (visual only)
- **FAQ accordion** built with native `<details>`/`<summary>` and no JavaScript
- **Design tokens** via CSS custom properties, so the whole theme can be changed in one place
- **Heavily commented code** so each section can be understood and edited quickly

## Tech Stack

| Layer       | Technology                                                       |
| ----------- | ---------------------------------------------------------------- |
| Markup      | HTML5 (semantic elements)                                        |
| Styling     | CSS3 (custom properties, Grid, Flexbox, media queries)           |
| Behavior    | Vanilla JavaScript (ES6)                                         |
| Fonts       | System font stack: `"Segoe UI", Roboto, Arial, sans-serif`       |
| Dependencies| None                                                             |
| Build step  | None                                                             |

## Project Structure

```
roomlink/
├── index.html          # Home: hero, search, popular properties, map panel, guarantee band
├── about.html          # About: story, mission, pillars, leadership team
├── services.html       # Services: value proposition, 3-step process, guarantee, landlord CTA
├── listings.html       # Listings: filter sidebar, sorting, property results, pagination
├── contact.html        # Contact: message form, role selector, FAQ accordion
├── login.html          # Log In / Sign Up: authentication forms
├── css/
│   └── style.css       # Single shared stylesheet (~1,250 lines)
├── js/
│   └── main.js         # Mobile navigation toggle (the only script)
└── images/             # Property photos, hero images and team portraits (14 files)
```

## Getting Started

No installation is required.

### Option 1: Open directly

Open `index.html` in any modern browser.

### Option 2: Run a local server (recommended)

Serving over HTTP avoids any file-path quirks and mirrors production behavior.

```bash
# From the project root
cd roomlink

# Python 3
python -m http.server 8000

# or Node.js
npx serve .
```

Then visit **http://localhost:8000**.

### Option 3: VS Code

Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

## Pages

| Page         | File             | Purpose                                                                                           |
| ------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| **Home**     | `index.html`     | Landing page with value badges, search bar, four featured properties, campus map teaser and trust statistics |
| **About**    | `about.html`     | Brand story, mission statement, three pillars and the leadership/campus-liaison team              |
| **Services** | `services.html`  | Why students and families use RoomLink, a 3-step "How it works", the rebooking guarantee and a landlord call-to-action |
| **Listings** | `listings.html`  | Searchable, filterable catalogue of student accommodations with sort control and pagination       |
| **Contact**  | `contact.html`   | Enquiry form for students and landlords plus a four-question FAQ                                  |
| **Log In**   | `login.html`     | Returning-user login and new-account registration                                                 |

Navigation is shared across all pages. The current page is marked with `class="active"` and `aria-current="page"`.

## Design System

All visual decisions live in the `:root` block at the top of `css/style.css`. Change a token and every rule that uses it updates.

```css
:root {
  --blue:   #1b2fc8;   /* Primary brand colour */
  --blue-d: #1423a3;   /* Primary, darker (hover states) */
  --lav:    #eceeff;   /* Light lavender surfaces */
  --bg:     #f6f7ff;   /* Page background */
  --orange: #ff6a45;   /* Accent / focus ring */
  --green:  #0e8a5f;   /* "Verified" / success */
  --navy:   #262f45;   /* Dark sections */
  --text:   #151b33;   /* Body text */
  --muted:  #5f6784;   /* Secondary text */
  --line:   #e3e6f4;   /* Borders and dividers */
  --r:      14px;      /* Border radius */
  --w:      1120px;    /* Max content width */
  --font:   "Segoe UI", Roboto, Arial, sans-serif;
}
```

### Stylesheet organization

The CSS is divided into seven numbered sections:

1. **Tokens**: colours, radius, width, font
2. **Base**: reset, typography, layout utilities
3. **Header**: sticky top bar, navigation, auth area
4. **Components**: buttons, pills, cards, chips, property cards
5. **Page sections**: hero, search bar, listings sidebar, pagination, steps, team cards, forms, FAQ
6. **Footer**
7. **Responsive**: media queries and real-photo styling

### Key reusable classes

| Class                  | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `.container`           | Centers content and caps width at `--w`                    |
| `.section`             | Standard vertical padding between sections                 |
| `.grid` + `.g2/.g3/.g4`| 2, 3 or 4 column grid layouts                              |
| `.split`               | Two-column text-and-image layout                           |
| `.row`                 | Flex row with space between items                          |
| `.card`                | White rounded surface used for cards, forms and info boxes |
| `.card.prop`           | Property card (image, badges, details, price, button)      |
| `.btn` (`.light`, `.block`, ...) | Button and its variants                          |
| `.pill` (`.g`, `.o`, `.dk`) | Small rounded label: green, orange, dark              |
| `.chip` / `.chip.gray` | Amenity and filter tags                                    |
| `.photo`               | Applied to `<img>` so photos fill and crop to their frame  |
| `.shade`               | Adds a bottom fade so overlaid white text stays readable   |
| `.muted`, `.sm`, `.center`, `.blue-text` | Text utilities                           |

## Responsive Design

The site uses a mobile-considerate, desktop-first approach with four breakpoints:

| Max width | Behavior                                                                  |
| --------- | ------------------------------------------------------------------------- |
| `1024px`  | 4-column grids become 2 columns; listings show 2 per row                  |
| `960px`   | Navigation collapses into the hamburger menu                              |
| `860px`   | Side-by-side layouts (text and image, sidebar and results) stack vertically |
| `600px`   | Single-column layout with larger touch targets; hero labels reposition clear of the overlapping search bar |

Additional safeguards prevent horizontal scrolling and keep property-card prices and buttons aligned at the bottom of each row.

## Accessibility

- `lang="en"` declared on every page
- Semantic landmarks: `<header>`, `<nav aria-label="Main">`, `<main>`, `<footer>`
- `aria-current="page"` on the active navigation link
- Hamburger button has `aria-label` and a live `aria-expanded` value
- Visible keyboard focus ring (`:focus-visible`, 3px orange outline)
- Form fields use `<label for="...">` associations; filter controls and search inputs have `aria-label`s
- Descriptive `alt` text on content images
- Native `<details>` accordion is keyboard accessible by default
- A single `<h1>` per page with an ordered heading hierarchy

## JavaScript

`js/main.js` (about 10 lines) is the only script. It toggles the `.open` class on `.nav-list` when the hamburger button is clicked and keeps `aria-expanded` in sync for assistive technology. CSS controls whether the open menu is visible.

Everything else (the FAQ accordion, hover states and responsive behavior) is handled in HTML and CSS.

## Customization Guide

### Add a property card

Copy any `<article class="card prop">` block on `index.html` or `listings.html`, then update the image, name, location, rating, chips and price.

```html
<article class="card prop">
  <div class="ph has-img" style="position:relative">
    <img class="photo" src="images/your-photo.jpg" alt="Describe the property">
    <div class="badges"><span class="pill g">Verified</span></div>
  </div>
  <div class="body">
    <h3>Property Name</h3>
    <p class="muted sm">Neighborhood, City</p>
    <div class="row"><span class="price">$150<small>/month</small></span>
      <a class="btn" href="contact.html">View Details</a></div>
  </div>
</article>
```

### Replace an image placeholder

Dashed `<div class="ph">` boxes are placeholders. Swap them for:

```html
<img class="photo" src="images/your-file.jpg" alt="Describe the image">
```

### Add a new page

1. Copy an existing page as a template.
2. Update `<title>` and the meta description.
3. Add a `<li>` to the nav list on **every** page.
4. Move `class="active"` and `aria-current="page"` to the correct link.

### Re-theme the site

Edit the values in `:root` in `css/style.css`. No other changes are needed.

## Browser Support

Designed for current versions of Chrome, Edge, Firefox and Safari (desktop and mobile). It relies on CSS Grid, Flexbox, custom properties and `<details>`, all of which are widely supported. Internet Explorer is not supported.

## Known Issues

These were found during a review of the current build and are straightforward to fix:

| # | Issue | Location | Fix |
| - | ----- | -------- | --- |
| 1 | **Broken image**: the team photo references `fatmata-turay.jpg`, but the file is `fatmata-turay.jpeg` | `about.html` | Change the `src` extension to `.jpeg` |
| 2 | **Missing map image** (`images/campus-map.jpg`) is shown as a dashed placeholder | `index.html` | Add the image and replace the placeholder |
| 3 | **Two listing cards still use placeholders** (`list2.jpg`, `list5.jpg`) | `listings.html` | Add photos and swap in `<img class="photo">` |
| 4 | **Dead links**: footer links use `href="#"` | all pages | Point to real pages or remove |
| 5 | **Header profile avatar is a placeholder** `<div>` | all pages | Replace with a user image once accounts exist |
| 6 | **Homepage search form fields have no `name` attributes**, so selections are not passed to the listings page | `index.html` | Add `name` attributes (and handle them on the listings page) |

## Limitations

- **No backend.** Forms use `action="#"`, so submissions do nothing. Search, filters, sorting, pagination, login and sign-up are visual only.
- **Static content.** Listings, prices, ratings and statistics are hard-coded sample data.
- **Social sign-in** (Google, Apple, Facebook) buttons are non-functional placeholders.
- **No client-side form logic beyond HTML5 validation.** Password strength bars and the student/landlord tab switch are presentation only.
- **Sample content.** Names, addresses, review counts and company statistics are illustrative and not real business data.

## Roadmap

- [ ] Fix the known issues above
- [ ] Add a backend or API for listings, authentication and form handling
- [ ] Working filters, sorting and pagination (JavaScript or server-side)
- [ ] Individual property detail pages
- [ ] Interactive campus map
- [ ] Favorites (the heart icon) persisted per user
- [ ] Working password-strength meter and form-validation messages
- [ ] Image optimization (WebP, `loading="lazy"`, `srcset`)
- [ ] Open Graph / social-sharing metadata
- [ ] Automated accessibility and Lighthouse checks

## Project Context

RoomLink was created as a web design coursework project (DCOMP 204, Web Design) by **Mamadu Barrie**, a Bachelor in Information Technology student at Limkokwing University of Creative Technology, Sierra Leone Campus.

## Credits

- **Design and development:** Mahid
- **Fonts:** System font stack (no external font files)
- **Photography:** Images in `/images` are used for demonstration. Replace or license them appropriately before any public release.

## Screenshot
**Home Page**
 <img width="1364" height="767" alt="Screenshot 2026-10-25 163412" src="https://github.com/user-attachments/assets/232bb252-cfc9-49f0-bf1b-b0645901c095" />
 **About Page
 <img width="1364" height="763" alt="Screenshot 2026-10-25 163348" src="https://github.com/user-attachments/assets/7553fd49-18dc-4fee-bd25-c580bf2acb34" />
 **Services Page**
 <img width="1364" height="766" alt="Screenshot 2026-10-25 163331" src="https://github.com/user-attachments/assets/44e707a8-d624-4950-9519-4a9c62cd7c09" />
 **Listing Page**
 <img width="1363" height="763" alt="Screenshot 2026-10-25 163304" src="https://github.com/user-attachments/assets/3b47b6cf-ffaf-40e3-90a8-fc586c16fbb5" />
 **Contact Page**
 <img width="1363" height="763" alt="Screenshot 2026-10-25 163231" src="https://github.com/user-attachments/assets/8a40b0d1-982c-4d6a-8d30-442845863a32" />
**Login/Sign Up Page**
<img width="1365" height="762" alt="Screenshot 2026-10-25 163205" src="https://github.com/user-attachments/assets/e45770ea-5e9c-4d0c-9d38-ae42104f48d0" />

---

© 2026 RoomLink. All rights reserved.
