import React from 'react';//used of React here is to use JSX syntax in the code below  (JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.)
import ReactDOM from 'react-dom/client';//used of ReactDOM here is to render the React element into the DOM in the page (ReactDOM is a package that provides DOM specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.)
import App from './App';//used of App here is to import the App component from the App.js file

const root =ReactDOM.createRoot(document.getElementById('root'));//use of root here is to create a root for the App component to be rendered in the DOM
root.render(<App/>);