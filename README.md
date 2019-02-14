# PortfolioV4

Portfolio Website

This is the repository for my Portfolio Website as of January 2019.

## Project Status

- Active

## Prerequisites

1. [Node.js v10.15.1 LTS](https://nodejs.org/en/)
2. [GNU Make](https://www.gnu.org/software/make/)

## Structure

```
|
├── dist/                     # Compiled application
|
├── node_modules/             # Node dependencies
|
├── src/                      # Source files
|   |
|   ├── components/           # Reusable components
|   ├── pages/                # Pages
|   ├── static/               # Static assets
|       |
|       ├── backgrounds       # Background images
|       ├── icons             # Icons
|       ├── stylesheets       # Core styles
|       └── svg               # SVG files
|
├── .eslintrc.yml             # ESLint Configuration File
├── .gitignore                # Ignores files and folders from git
├── .prettierrc.yml           # Prettier Configuration File
├── .stylelintrc.yml          # Stylelint Configuration File
├── Makefile                  # Contains build targets
├── package-lock.json         # Locks Node.js peer dependency versions
├── package.json              # Project metadata
├── README.md                 # Project documentation
└── webpack.config.js         # Webpack Configuration File

```

## Commands

1. Install all Node dependencies:

```
make install
```

2. Start the development server:

```
make dev
```

3. View the application:

```
http://localhost:8080
```

Available `make` targets:

- `make install` to install dependencies
  - `make install-node-modules` to install Node dependencies
- `make delete-build-folder` to delete compiled files
- `make delete-node-modules` to delete Node dependencies
- `make lint` to lint JavaScript and styles
  - `make lint-js` to lint JavaScript
  - `make lint-css` to lint styles
- `make dev` to start the development server
- `make staging` to start the staging server
- `make build` to build the application for Production
