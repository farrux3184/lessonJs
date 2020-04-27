'use strict';

const body = document.querySelector('body');

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.render = function () {
  let addElement;
  if (this.selector[0] === '.') {
    addElement = document.createElement('div');
    addElement.classList.add('block');
  } else if (this.selector[0] === '#') {
    addElement = document.createElement('p');
    addElement.classList.add('best');
  }

  addElement.style.cssText =` 
    height:  ${this.height}px;
    width:  ${this.width}px;
    background:  ${this.bg};
    font-size:  ${this.fontSize}px;`
  
  addElement.textContent = 'hello world';
  body.append(addElement);
  console.log('addElement: ', addElement);
};

let newDomElements = new DomElement('.id', 150, 200, 'blue', 36);
newDomElements.render();

let newDomElements2 = new DomElement('#id', 75, 100, 'red', 20);
newDomElements2.render();