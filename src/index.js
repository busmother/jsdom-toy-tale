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
  loadToys();
});


const form = document.querySelector(".add-toy-form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitData(document.querySelector(".add-toy-form").name.value, document.querySelector(".add-toy-form").image.value);
})


function loadToys() {
  fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(result => {
    console.log(result)
    //iterate over array, then pass each toy to a separately defined function
    result.map(toy => addToys(toy))
  })
}

function addToys(toy) {
  toyCollection = document.querySelector('#toy-collection')
  let div = document.createElement('div')
  div.className = 'card'
  toyCollection.appendChild(div)
  let h2 = document.createElement('h2')
  h2.innerText = toy['name']
  div.appendChild(h2)
  let newImageEl = document.createElement('img')
  newImageEl.src = toy['image']
  newImageEl.className = 'toy-avatar'
  div.appendChild(newImageEl)
  let p = document.createElement('p');
  div.appendChild(p)
  p.innerText = `${toy['likes']} Likes`
  let button = document.createElement('button')
  button.className = 'like-btn'
  button.innerText = 'Like <3'
  div.appendChild(button)
}

function submitData(name, img) {
  console.log("you're in the submitData function")
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify({
      "name": name, // document.querySelector(".add-toy-form").name
      "image": img, // "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
      "likes": 0
    }) 
  }
  return fetch("http://localhost:3000/toys", configurationObject)
  .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      addToys(json);
    })
}

const likeButton = document.querySelector(".like-btn")
likeButton.addEventListener("click", (e) => {
  e.preventDefault();
  addLike();
})

function addLike () {
  console.log("you're in the addLike function")
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify({
      "likes": 666 // document.querySelector
    }) 
  }
  return fetch("http://localhost:3000/toys", configurationObject)
  .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      updateLikes();
    })
}

function updateLikes () {
  let likes = document.querySelector(".card p")
  likes.innerText = "more likes than before"
}