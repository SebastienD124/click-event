const button= document.querySelector("#foo");
button.addEventListener('click', function(event){
  console.log(event);
  const h3 = document.createElement('h3');
  h3.textContent = "Foo";
  document.body.appendChild(h3);
})
const fooButton = document.querySelector('#fooButton');

const button1= document.querySelector("#bar");
button1.addEventListener('click', function(event){
  console.log(event);
  const h3 = document.createElement('h3');
  h3.textContent = "Bar";
  document.body.appendChild(h3);
})
const barButton = document.querySelector('#barButton');


const button123= document.querySelector("#foobar");
button123.addEventListener('click', function(event){
  console.log(event);
  const h2 = document.createElement('h2');
  h2.textContent = "FooBar";
  document.body.appendChild(h2);
})
const foobarButton = document.querySelector('#foobarButton');