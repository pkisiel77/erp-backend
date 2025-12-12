# ERP Backend

A Node.js backend application for Enterprise Resource Planning (ERP) system.

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [License](#license)

## About

This is a backend application built with Node.js for an Enterprise Resource Planning (ERP) system. The application provides APIs and services to manage various business processes.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (comes with Node.js)

You can verify your installations by running:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pkisiel77/erp-backend.git
cd erp-backend
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Production Mode

To run the application in production mode:

```bash
npm start
```

### Development Mode

For development with auto-reload on file changes (requires Node.js 18+):

```bash
npm run dev
```

The application will start and display initialization information in the console.

## Project Structure

```
erp-backend/
├── src/                  # Source code
│   └── index.js          # Main application entry point
├── tests/                # Test files
├── config/               # Configuration files
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
└── LICENSE               # License file
```

### Directory Descriptions

- **src/**: Contains all application source code
- **tests/**: Contains test files and test configurations
- **config/**: Contains configuration files for different environments

## Development

### Project Setup for Development

1. Make sure you have all prerequisites installed
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Make your changes in the `src/` directory
5. The application will automatically reload when you save changes

### Code Organization

- Keep business logic in the `src/` directory
- Write tests in the `tests/` directory
- Store environment-specific configurations in the `config/` directory

## Environment Variables

The application uses environment variables for configuration. You can create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
```

**Note**: The `.env` file is ignored by git to keep sensitive information secure.

## Scripts

The following npm scripts are available:

- `npm start` - Start the application in production mode
- `npm run dev` - Start the application in development mode with auto-reload
- `npm test` - Run tests (to be configured)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.