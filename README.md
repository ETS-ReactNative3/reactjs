# ReactJS
## Components
Reusable pieces of React code to control part of the user interface. Components capture the strructure of UI, and can have internal data to track the user behavior throughout the lifetime of the app. <br />
Reusable pieces of the application UI that has inner dynamic functionality and state.
### Higher-order components
A higher-order component is one that takes another component as an input. The idea is to treat the component like a function. Have one component as input, an then output an entirely new component based on that input, with new propieties methods, and/or JSX.  
## ES6 importing and exporting
A new syntax for sharing code between separate files. Used in cases like `import React from 'react'`.
## State
Dynamic data in a React component. This is often used to track variables that will be re-rendered in the UI based on events that occur in the application. <br />
**React State Rule: Never Directly Modify State. Instead use the `this.setState` method.** <br />
The internal data of a React component. The state can be updated through interactions with the component during the application.
### SetState
The official way to update state in a React component. It is a react rule to not modify the state, using the setState() method. The setState() method recalls the render method when complete giving the component the chance to reflect changes in the UI.
### Stateless Functional Components
An alternative cleaner syntax to create React components based on returning JSX from a function.
### Updating State
When updating State, make sure to never mutate state directly. Doing so will lead to fatal errors in your application. Instead, re-declare new instances of state arrays on objects and use the setState() function to update state. 
## .bind
A JS method that passes the this object down from a component to a helper methods. Crucial for components to pass down this.setState() method to helper methods.
## Props
Data in a React component that gets passed down from its parent. In the parent component, it will pass data down to the child component through attributes in the child component's JSX.
## 3 core pillars
HTML, CSS y JS are the core pillars of web dev. ReactJS exists in the JS layer of a web application.
## The client-server architecture
Web apps are documents served to browsers. The client-server describes the relationship between a client requesting the document for a web app (html, css, js) from a server computer that can respond with them.
## Blunding
React projects are bundled and transpiled. Blunding is the process of taking many JS files and combining them into one giant JS file for the HTML to refer to. This is useful because the browser doesn't natively support the import/export system that is used in React projects. <br />
Parcel blunder is a tool that achieves bundling.
## Transpiling
Is the process of translating modern JS code in a syntax that the browser actually supports. This is neccesary because as the JS language envolves and adds new features, the browser must keep up and support those additions. Therefore, the feature set that the browser can support will always be a bit behind the overall JS language.<br />
Babel is a toll that achives transpilation.
## DOM
The Document Object Model for the web application. The document object, provided to the JS, allows methods to update the UI.<br />
React optimized DOM calls with the Virtual DOM.
### React's Virtual DOM
An internal virtual representation of the DOM, that is much lighter weight, which allows React to efficiently compute updates using the 'document API'. 
## Lifecycle Methods
Fire throughtout different phases of a component's life.Method that fire in different phases in the React component. Most have to do with the component's relationship with the document. For example: componentDidMount(), componentDidUnmount().
### componentDidMount()
Fires when the component is inserted into the DOM.
### componentDidUnmount()
Fires when the component is going to leave the DOM.
## API
Usign the fetch method to makr API calls. With the fetch method, React app can make HTTP requests to API services. This is an excellent way to add a ton of new content to your React application.
## Routing
With react-router, a single page React application can transform into one with multiple pages of different content. Each page matches a url path of the application to a different component.
## Classes
Interfaces of propieties and methods that will be assigned to object instances.
### Class Propieties and initializers
An alternastive syntax for declaring the state and wtihin components that automatically binds the 'this' object.
## Inheritance
The extension of existing properties and methods from a parent class to a subclass. The subclass extends the parent class to inherit the base parent class' methods and propieties.
## Fetch
Implemented as a JS promise, this method can make HTTP requests to grab data. 
## React Router
A technology which can turn a single-page app into one with multiple pages of content based on paths.
## Browser Cookies
A browser cookies or HTTP cookie stores a small piece of data from a website to web application right on the user's computer. It allows apps to keep useful information like a user's last search, name, password for authentication. 

# Redux
A JS library which allows applications to extract their data into one giant store.
## 3 steps to adding Redux
1) Define a redux constant, 2) Add an action creator, 3) Amend or Add a Reducer.
## Redux Constants
Constants that allow actions and reducers in redux to listen to the same type to ensure that it recognizes true data.
## Action Creators
Methods that create and return actions for reducers to manipulate the redux store.
## Actions
The plain JS object that Action Creators return. Must include a type parameter with a Redux constant and a certain data payload.
## Reducers
Extract the Redux logic for the store into functions that handle actions and return pieces of the state.
## Provider
A component at the root of your redux application that provides the redux store globally.
## mapDispatchToProps()
Allows action creators to become accessible within React Components through this.props.
## mapStateToProps()
Allows reducers in the Redux store to become accessible within React Components through this.props.
## bindActionCreators()
A redux method that allows action creators to store within this.props in React Components.
## Cookies
String names that map string values stored on the browser. Allows applications to keep a local history of data on a browser.

*Info from "React JS Web Development - The Essentials Bootcamp" David Joseph Katz - Udemy*