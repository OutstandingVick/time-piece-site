# The Uglee One - Premium Watch Retailer

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://time-piece-site.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Tailwind-blue)](https://github.com/OutstandingVick/time-piece-site)

**The Uglee One** is a modern, high-performance e-commerce storefront dedicated to luxury timepieces. Built with a mobile-first approach, it focuses on delivering a sleek, minimalist user experience that mirrors the elegance of the products it showcases.

---

## Key Features

* **Responsive E-commerce UI:** Fully optimized for mobile, tablet, and desktop viewing.
* **Dynamic Product Discovery:** Browse curated collections and bestseller lists with ease.
* **Seamless Cart Management:** Real-time cart updates managed via a dedicated sidebar, allowing users to add or remove items without page reloads.
* **Instant Search:** Integrated search functionality to help users find specific models or styles quickly.
* **Fluid Navigation:** A modern, interactive navbar designed for intuitive category switching.
* **Performance Focused:** Lightweight assets and optimized React components for fast load times.

---

## Tech Stack

* **Frontend Framework:** [React.js](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router](https://reactrouter.com/) (For seamless SPA navigation)
* **State Management:** [Context API](https://react.dev/learn/passing-data-deeply-with-context) (Handling global cart state)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## Installation & Setup

To get a local copy up and running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/OutstandingVick/time-piece-site.git](https://github.com/OutstandingVick/time-piece-site.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd time-piece-site
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    The site should now be running at `http://localhost:3000`.

---

## Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Footer, ProductCard)
├── context/        # Context API logic for Cart and Global State
├── pages/          # Individual views (Home, Collections, Product Details)
├── assets/         # Images and static files
└── App.js          # Main application logic and routing
