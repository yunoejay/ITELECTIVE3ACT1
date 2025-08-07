# ITElective3 Multi-Page Frontend Demo

A simple, modern, and fully responsive multi-page website built with **pure HTML, CSS, and JavaScript** (no frameworks or libraries). This project demonstrates essential frontend concepts: navigation, layout, validation, and error handling.

---

## 📁 **Directory Structure**

```

/public
├── index.html        # Home Page
├── about.html        # About Page
├── products.html     # Products Page
├── contact.html      # Contact Page (with JS validation)
├── 404.html          # Custom 404 Error Page
└── /assets
├── style.css   # All CSS styles
└── script.js   # Shared JS (nav, validation)

````

---

## 🌟 **Features**

- Clean navigation bar on all pages
- Responsive, modern design
- Services page with card layout
- Contact form with JavaScript validation (demo only, no backend)
- Custom 404 page for non-existent routes
- Fully self-contained, easy to expand

---

## 🚀 **Getting Started**

1. **Clone or download this repository.**

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the local server:**

   ```bash
   node index.js
   ```

   * The server will run at: `http://localhost:3000/` (or your configured port)

4. **Navigate the site:**

   * Visit routes like:

     * `/` – Home page
     * `/about`, `/contact`, `/services`, etc.
   * Test invalid routes to see the 404 page (e.g., `/nonexistent`)

5. **Make changes:**

   * Edit the HTML files in the `views/` folder or update routes in `index.js` as needed.

````

---

### ✅ Optional Improvements:
If you're using **nodemon** for auto-restart on file changes, add this tip:

```md
> 💡 Tip: For development, install `nodemon` for auto-reload:
> 
> ```bash
> npm install -g nodemon
> nodemon index.js
> ```
````
---

## 📝 **Contact Form**

- The contact form is for demonstration and uses JavaScript for basic validation.
- No backend or email sending included.
- Submitting the form displays a success message in-page.

---

## ❓ **404 Page**

- Manually open `404.html` or configure your server to serve this for unknown URLs.

---


&copy; 2025 ITElective3 Demo Site. All rights reserved.
