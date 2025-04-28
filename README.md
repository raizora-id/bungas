# Bungas

Bungas is a modular Go project designed for scalable backend and frontend development. This repository contains multiple packages and apps, managed with modern tooling for streamlined development and deployment.

## Features
- Modular architecture (apps and packages)
- Built-in support for Go and JavaScript/TypeScript
- Environment-based configuration
- Easy dependency management
- Ready for deployment

## Directory Structure
```
├── apps/           # Application entry points
├── packages/       # Shared libraries and modules
├── public/         # Static assets
├── .github/        # GitHub workflows and configs
├── .vscode/        # VSCode settings
├── node_modules/   # JS/TS dependencies
├── package.json    # Node.js project config
├── deno.json       # Deno project config
├── .gitignore      # Git ignore rules
└── README.md       # Project documentation
```

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd bungas
   ```
2. **Install dependencies:**
   - For Go modules:
     ```sh
     go mod tidy
     ```
   - For Node.js:
     ```sh
     npm install
     ```
3. **Run the project:**
   - Follow the documentation in each app/package for specific instructions.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.
