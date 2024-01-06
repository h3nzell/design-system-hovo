# Project Structure

This repository is organized with a clear structure to manage ERP - design system components and their corresponding stories.

## Folder Structure

- **components**: This folder contains all the existing components that make up the design system. Organize components within subdirectories if needed.

- **stories**: The "stories" folder is where we write stories for the components. Each component should have its own corresponding story file.


Project Root
<pre>
├── .storybook
│   ├── main.js
│   └── preview.js
├── src
│   ├── components
│   │   ├── Buttons
│   │   │   ├── Button.js
│   │   │   └── DisabledButton.js
│   │   ├── Inputs
│   │   │   ├── Input.js
│   │   │   └── DisabledInput.js
│   │   └── ...
│   ├── stories
│   │   │ ├──assests
│   │   │ ├──FormKit
│   │   │    ├── Button.stories.js
│   │   │    ├── Input.stories.js
│   │   │ ├──Cards
│   │   │    ├── Card.stories.js
│   │   │    ├── Box.stories.js
│   │   └── ...
├── README.md
├── CONTRIBUTING.md
├── package.json
├── package-lock.json
└── ...
</pre>
