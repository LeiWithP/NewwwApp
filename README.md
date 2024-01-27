## Project Name

Newww Exercise App

## Description

Excersice project developed in react native

## Table of Contents

- [Project Name](#project-name)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)

## Installation

```bash
# Clone the repository
git clone https://github.com/LeiWithP/NewwwApp.git

# Navigate to the project directory
cd your-project

# Install dependencies
npm install
```

If the npm command is not allow change the execution policy

```bash
# Set the execution policy to unrestricted
Set-ExecutionPolicy Unrestricted -Scope Process
```

## Usage

Run the following commands to start the app server, scan the QR code in the Expo Go Movil App to run it

```bash
# Run the expo project
npx expo start
```

If the command is not allow change the execution policy

```bash
# Set the execution policy to unrestricted
Set-ExecutionPolicy Unrestricted -Scope Process
```

If expo start doesn't work run a tunnel instead

```bash
# Start a dev server from a tunnelURL
npx expo start --tunnel
```

## Folder Structure

[Describe the organization of the project's folders and files. Highlight important directories and files, and explain their purposes.]

```plaintext
├── /node_modules        # Node.js modules (auto-generated)
├── /src                 # Source code
│   ├── /components      # React components
│   ├── /screens         # Application screens
│   └── /assets          # Static assets
├── .gitignore           # Git ignore file
├── App.js               # Main application file
├── app.json             # Expo app config
├── babel.config.js      # Babel config
├── package-lock.json    # Project dependencies (auto-generated)
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Dependencies

```plaintext
{
  "dependencies": {
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "expo": "~50.0.4",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
    "react-native": "0.73.2",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0"
    "expo-constants": "~15.4.5"
  }
}
```
