let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

/*
Fetch Andy's Toys
On the index.html page, there is a div with the id "toy-collection."

When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, 
make a <div class="card"> for each toy and add it to the toy-collection div. */

function makeDivs(toy) {
  let div = document.createElement('div')
  div.class = 'card'
  document.appendChild(div)
}

/*

Add Toy Info to the Card
Each card should have the following child elements:

h2 tag with the toy's name */

function makeNames(toy) {
  let div = document.createElement('h2')
  h2.innerText = toy[name]
  div = document.querySelector('.card')
  div.appendChild(h2)
}

/*
img tag with the src of the toy's image attribute and the class name "toy-avatar" */

function loadImage(toy) {
  let imgUrl =  toy[image]
  fetch(imgUrl)
  .then(res => res.json())
  .then(results => {
    results.message.forEach(image=> addImage(image))
  })
}

function addImage(toyPicUrl) {
    let container = document.querySelector('.card');
    let newImageEl = document.createElement('img');
    newImageEl.src = toyPicUrl;
    container.appendChild(newImageEl)
}

/*
p tag with how many likes that toy has



button tag with a class "like-btn"
After all of that, the toy card should resemble:

  <div class="card">
    <h2>Woody</h2>
    <img src=toy_image_url class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn">Like <3</button>
  </div> 
  */
