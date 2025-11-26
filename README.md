# 📝 Todo List Application

A modern, responsive todo list application built with React and Vite. Manage your tasks efficiently with filtering, real-time updates, and a clean user interface.

## ✨ Features

- ✅ **Add Tasks** - Create new todos with a simple form
- 🔄 **Toggle Completion** - Mark tasks as completed or active
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 🔍 **Filter Tasks** - View all, active, or completed tasks
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean and intuitive user interface
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Technologies

- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Next-generation frontend tooling
- **Context API** - State management without external libraries
- **ESLint** - Code quality and consistency

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
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

The application will be available at `http://localhost:5173` (or the next available port).

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
todo-list/
├── public/              # Static assets
├── src/
│   ├── api/            # API layer (in-memory database)
│   │   └── fakeInMemoryApi.js
│   ├── components/     # React components
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoFilter.jsx
│   │   └── components.css
│   ├── context/        # Context API for state management
│   │   └── Todocontext.jsx
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── db.json             # Data storage (in-memory)
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🏗️ Architecture

The application uses a clean architecture pattern:

- **Components** - Presentational components for UI
- **Context API** - Centralized state management
- **API Layer** - Simulated backend with in-memory storage
- **Separation of Concerns** - Clear boundaries between layers

### State Management

State is managed using React Context API (`TodoContext`), providing:
- Global state for todos, filter, loading, and error states
- Optimized re-renders with `useMemo` and `useCallback`
- Centralized business logic

### Data Storage

Currently uses an in-memory API (`fakeInMemoryApi.js`) that simulates backend behavior:
- Async operations with simulated latency
- CRUD operations (Create, Read, Update, Delete)
- Filter support (all, active, completed)

**Note:** Data is stored in memory and will be lost on page refresh. To persist data, consider integrating with a real backend API or localStorage.

## 🎯 Usage

1. **Add a Task**: Type your task in the input field and click "Добавить" (Add)
2. **Complete a Task**: Click on a task to toggle its completion status
3. **Delete a Task**: Click the delete button on any task
4. **Filter Tasks**: Use the filter buttons to view:
   - All tasks
   - Active (incomplete) tasks
   - Completed tasks

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
