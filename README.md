# TO_DO_List Project

## 📋 Project Overview

This is a **React-based To-Do List Application** that helps users manage their tasks efficiently. The application allows users to:

- ✅ Add new tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks
- 🎯 Mark tasks as completed
- 💾 Persist tasks using browser's Local Storage
- 📱 Responsive UI with Tailwind CSS

## 🎯 Key Features

1. **Add Tasks** - Users can input new to-do items
2. **Edit Tasks** - Click the edit icon to modify existing tasks
3. **Delete Tasks** - Remove tasks with the delete button
4. **Mark Complete** - Toggle task completion status
5. **Local Storage** - All tasks are saved to browser's Local Storage and persist across sessions
6. **Beautiful UI** - Built with Tailwind CSS for a modern, responsive design
7. **Navigation Bar** - Custom navbar component for navigation

## 🛠️ Technologies & Tools Used

### Frontend Framework
- **React 19.1.1** - UI library for building components
- **React DOM 19.1.1** - React library for working with the DOM

### Build Tool
- **Vite** - Fast build tool and development server (rolldown-vite v7.1.14)
  - Instant server start
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized build output

### Styling
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Tailwind CSS Vite Plugin 4.1.16** - Vite integration for Tailwind

### Icons
- **React Icons 5.5.0** - Icon library for React
  - Used for edit (FaEdit) and delete (AiFillDelete) buttons

### Utilities
- **UUID 13.0.0** - Library for generating unique IDs for each todo item

### Development & Linting
- **ESLint 9.36.0** - Code quality and style checker
- **ESLint Plugins**:
  - @eslint/js - JavaScript linting rules
  - eslint-plugin-react-refresh - React refresh support
  - eslint-plugin-react-hooks - React hooks best practices
- **Globals 16.4.0** - Global variables for ESLint
- **Vite Plugin React 5.0.4** - React support for Vite

### Type Support
- **@types/react 19.1.16** - TypeScript types for React
- **@types/react-dom 19.1.9** - TypeScript types for React DOM

## 📁 Project Structure

```
TO_DO_List/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation bar component
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styling
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── public/
│   └── to-do-list.svg          # Public assets
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README_PROJECT.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/TO_DO_List.git
cd TO_DO_List
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## 💾 Data Persistence

The application uses **Browser Local Storage** to persist all to-do items. This means:
- Tasks are automatically saved when added, edited, or deleted
- Tasks survive browser refresh and closure
- Each browser/device has separate task storage
- No backend server required

## 🎨 UI Components

### App Component (`App.jsx`)
- Main component managing state
- Handles todo logic (add, edit, delete, toggle completion)
- Manages Local Storage interactions
- Controls visibility of completed tasks

### Navbar Component (`components/Navbar.jsx`)
- Navigation bar for the application
- Site branding and links

## 🔧 Configuration Files

- **vite.config.js** - Vite build configuration
- **eslint.config.js** - ESLint linting rules
- **package.json** - Project metadata and dependencies
- **.gitignore** - Git ignore patterns (excludes node_modules, dist, etc.)

## 📦 Dependencies at a Glance

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.1.1 | UI library |
| react-dom | 19.1.1 | DOM rendering |
| tailwindcss | 4.1.16 | CSS framework |
| react-icons | 5.5.0 | Icon components |
| uuid | 13.0.0 | Unique ID generation |
| vite | 7.1.14 | Build tool |

## 🚀 Deployment

This project can be deployed to various platforms:
- **Vercel** - Recommended for React apps
- **Netlify** - Great for static hosting
- **GitHub Pages** - Free hosting for static sites
- **Heroku** - Platform as a Service
- **AWS Amplify** - AWS hosting solution

## 📝 Future Enhancements

Possible features to add:
- Due dates for tasks
- Task categories/tags
- Priority levels
- Dark mode toggle
- Task filtering
- Recurring tasks
- Backend API integration for multi-device sync

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Your Name / GitHub Username

---

**Happy Task Managing! 🎉**
