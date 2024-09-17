import './style.css';
import app from './app'

// "root node" element
// build the application inside the root node element
// root node : user 
const appDiv = document.querySelector('#app'); // grabs the app element from the DOM
app(appDiv); // invokes app function

