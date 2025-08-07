# ITElective3 Multi-Page Frontend Demo

A simple, modern, and fully responsive multi-page website built with **pure HTML, CSS, and JavaScript** (no frameworks or libraries). This project demonstrates essential frontend concepts: navigation, layout, validation, and error handling.

---

## 📁 **Directory Structure**

```

/public
├── index.html        # Home Page
├── about.html        # About Page
├── services.html     # Services Page
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
2. Open any page (e.g., `index.html`) in your browser to view the site.
   - For navigation and 404 testing, use a simple local server:
     - With Python 3:  
       ```
       cd public
       python -m http.server
       ```
     - Then visit: `http://localhost:8000/`
3. Edit the HTML, CSS, or JS files as needed.

---

## 📝 **Contact Form**

- The contact form is for demonstration and uses JavaScript for basic validation.
- No backend or email sending included.
- Submitting the form displays a success message in-page.

---

## ❓ **404 Page**

- Manually open `404.html` or configure your server to serve this for unknown URLs.

---

## 📚 **Customization**

- Add more pages by duplicating any HTML file and updating the nav.
- Adjust theme in `assets/style.css`.
- Add more interactivity in `assets/script.js`.

---

## 📢 **Credits**

Created for the **ITElective3** course as a frontend fundamentals demo.

---

&copy; 2025 ITElective3 Demo Site. All rights reserved.
````
