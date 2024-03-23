# versions

npm=8 or higher  
node=18 or higher

# How to run

1. Open 2 terminals
1. In the first one. Naviguate to the `ui` directory
1. Run `npm ci`. This will install all the libraries and only needs to be done once.
1. Run `npm start`. This will launch the React website. It has "reload-on-save" so no need to run it more than once.
1. In the second terminal.
1. Run `npm ci`. Again, just once.
1. Run `npm start`. This one does not have reload-on-save so you will have to ctrl+c and rerun the program when you make changes

# How this was created

The UI folder was simply built by running the command:

```sh
$ npx create-react-app PROJECT_NAME
```

This is a very common basic command for creating React websites.

The server I ran the following commands:

```sh
server$ npm init
server$ npm install express cors
server$ vi src/index.js
```
