# The Most Boring Game Ever - UI

This project is the UI part of TheMostBoringGame project. To run the project simply:

```
 - npm install // to install dependencies
 - npm run build
 - node app.js
```

You can also use Docker to build and run the application.

To start development server, simply use `npm start`
## Contributing

To start contributing the application, you should use VS Code along with eslint and prettier extensions. You should also set following settings to set eslint as the formatter for VS Code.

```
...
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.organizeImports": true
    },
    "editor.formatOnSave": false
...
```