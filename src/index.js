import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




const topPane = document.querySelector(".top-pane");

const htmlButton = document.querySelector(".HTML button");
const cssButton = document.querySelector(".CSS button");
const jsButton = document.querySelector(".JS button");

const htmlEditor = document.querySelector(".HTML");
const cssEditor = document.querySelector(".CSS");
const jsEditor = document.querySelector(".JS");

function handleClick(){

  this.parentElement.parentElement.classList.toggle("collapsed");

  if( htmlEditor.classList.contains("collapsed") && cssEditor.classList.contains("collapsed") && jsEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="100px 100px 100px";
  }
  else if( htmlEditor.classList.contains("collapsed") && cssEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="auto auto 1fr";
  }
  else if( htmlEditor.classList.contains("collapsed") && jsEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="auto 1fr auto";
  }
  else if( cssEditor.classList.contains("collapsed") && jsEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="1fr auto auto";
  }
  else if( htmlEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="auto 1fr 1fr";
  }
  else if( cssEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="1fr auto 1fr";
  }
  else if( jsEditor.classList.contains("collapsed") ){
    topPane.style.gridTemplateColumns="1fr 1fr auto";
  }
  else{
    topPane.style.gridTemplateColumns="1fr 1fr 1fr";
  }

}

htmlButton.addEventListener('click', handleClick);
cssButton.addEventListener('click', handleClick);
jsButton.addEventListener('click', handleClick);