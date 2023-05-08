const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

let paintingsArray = []
let actionFiguresArray = []

function separateItens (list){
  for (let i = 0; i < list.length; i++){
    const currentProduct = list[i]
    
    if (currentProduct.type === 'Paintings'){
      paintingsArray.push(currentProduct)
    }
    else {
      actionFiguresArray.push(currentProduct)
    }
  }
  return [paintingsArray,actionFiguresArray]
}
separateItens(productsArray)

function liMaker1(){
  let ul = window.document.getElementById('ul_1')

  for(let i = 0; i < paintingsArray.length ; i++){  
    let li = document.createElement('li');
    let currentProduct1 = paintingsArray[i]

    li.innerHTML = `
    <div class="card">
    <img class="cardImgs" src="${currentProduct1.image}">
    <p id="productName">${currentProduct1.name}</p>
    <p id="productPrice">${currentProduct1.price}</p>
    </div>
    `

      ul.appendChild(li);
  }
}
liMaker1()

function liMaker2(){
  let ul = window.document.getElementById('ul_2')

  for(let i = 0; i < actionFiguresArray.length ; i++){  
    let li = document.createElement('li');
    let currentProduct2 = actionFiguresArray[i]

    li.innerHTML = `
    <div class="card">
    <img class="cardImgs" src="${currentProduct2.image}">
    <p id="productName">${currentProduct2.name}</p>
    <p id="productPrice">${currentProduct2.price}</p>
    </div>
    `

      ul.appendChild(li);
  }
}
liMaker2()