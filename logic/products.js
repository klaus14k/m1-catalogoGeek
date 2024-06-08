import productsArray from "./data.js"

let paintingsArray = []
let actionFiguresArray = []

function separateItens (list){
  for (let i = 0; i < list.length; i++){
    const currentProduct = list[i]
    
    if (currentProduct.type === "Paintings"){
      paintingsArray.push(currentProduct)
    }
    else {
      actionFiguresArray.push(currentProduct)
    }
  }
  return [paintingsArray,actionFiguresArray]
}
separateItens(productsArray)

function renderPaintings(){
  let ul = window.document.getElementById("paintingsList")

  for(let i = 0; i < paintingsArray.length ; i++){  
    let li = document.createElement("li");
    let currentProduct1 = paintingsArray[i]

    li.innerHTML = `
    <div class="card">
      <div class="card-top">
        <img class="cardImgs" src="${currentProduct1.image}">
      </div>
      <div class="card-bottom">
        <p id="productName">${currentProduct1.name}</p>
        <p id="productPrice">${currentProduct1.price}</p>
      </div>
    </div>
    `

      ul.appendChild(li)
  }
}
renderPaintings()

function renderActionFigures(){
  let ul = window.document.getElementById("actionFiguresList")

  for(let i = 0; i < actionFiguresArray.length ; i++){  
    let li = document.createElement("li")
    let currentProduct2 = actionFiguresArray[i]

    li.innerHTML = `
    <div class="card">
      <div class="card-top">
        <img class="cardImgs" src="${currentProduct2.image}">
      </div>
      <div class="card-bottom">
        <p id="productName">${currentProduct2.name}</p>
        <p id="productPrice">${currentProduct2.price}</p>
      </div>
    </div>
    `

      ul.appendChild(li)
  }
}
renderActionFigures()

export default {separateItens, renderActionFigures, renderPaintings}