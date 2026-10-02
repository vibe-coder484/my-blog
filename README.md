# My Blog (React + React Router)

A modern, responsive multi-page blog web application built with **React 19**, **React Router v7**, and **Vite**.

---

## 🚀 Quick Start Guide

Follow these simple steps to clone, set up, and run the project locally on your machine.

### 1. Clone the Repository
Open your terminal (PowerShell, Command Prompt, or Bash) and run:

```bash
git clone https://github.com/vibe-coder484/my-blog.git
```

### 2. Navigate into the Project Directory

```bash
cd my-blog
```

### 3. Install Dependencies
You only need to install the project dependencies once:

```bash
npm install
```

### 4. Run the Project
Start the Vite development server:

```bash
npm run dev
```

Once started, open your browser and navigate to the local URL (typically **`http://localhost:5173`**).

---

## 🛠️ Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server with Hot Module Replacement (HMR).
- `npm run build` - Builds the application for production to the `dist` folder.
- `npm run preview` - Locally previews the production build.
- `npm run lint` - Runs ESLint to check for code issues.

---

## 📂 Project Structure & Routes

```text
src/
├── components/
│   └── Navbar.jsx        # Navigation bar with Link components
├── data/
│   └── posts.js          # Mock blog posts data
├── pages/
│   ├── Home.jsx          # Home page (/)
│   ├── About.jsx         # About page (/about)
│   ├── BlogList.jsx      # All blog articles (/blog)
│   ├── BlogPost.jsx      # Dynamic article view (/blog/:id) using useParams & useNavigate
│   └── NotFound.jsx      # 404 page for unmatched routes (*)
├── App.jsx               # Route definitions
├── main.jsx              # App entry wrapped in BrowserRouter
└── index.css             # Modern styling & responsive theme
```

### Routes:
| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Landing page with featured articles |
| `/about` | `About` | Information about the blog & technology |
| `/blog` | `BlogList` | Lists all published posts |
| `/blog/:id` | `BlogPost` | Displays single post dynamically based on URL parameter |
| `*` | `NotFound` | 404 Not Found fallback message |
