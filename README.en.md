# Simple Data Visualization

"Degree to philosophy" shows how any English Wikipedia article will eventually
takes you to the Philosophy page if you follow the first link in the content 
long enough.

Inspired by [XKCD](http://xkcd.com/903/).

## Prerequirement

Before running the program, make sure you have [NodeJS](https://nodejs.org) installed
on your system.

## How to Execute

Go to the code's directory on your terminal, and run these commands:

    npm install
    gulp build
    node dist/index.js

and you will be greeted with:

    Listening on 3000

Go to `http://localhost:3000/` in your browser.

## Notes

This web app is very simple because it is developed in a very short time. 
Consequently, there are many flaws in the apps. Some known flaws:

1. It cannot read a Wikipedia page with special characters, e.g. `'`.
2. It does not handle cases where it can't find the wikipedia page or wikipedia returned an error.
3. If the page opened is too big (as in too many content), the program will freeze itself.
4. The program can't handle more than one keywords at once.

## Contributing

Feel free to shoot us with pull request!