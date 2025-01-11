# ng-sandbox
Angular Sandbox for experimentation

```
npm i -g @angular/cli
npm install -g json-server
```

```
cd demo-app
ng serve --open
```

```
json-server --watch mock/db.json
```

Folder structure inspired by:
https://www.gerome.dev/blog/standalone-angular-folder-structure/

Runtime configuration based on:
https://imran3.medium.com/runtime-configuration-for-angular-c9d9082e1de3

VS Code Editor settings:
```

    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    }
```