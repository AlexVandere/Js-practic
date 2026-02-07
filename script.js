//task-1

const creatUl = document.createElement('ul')
const btnAdd = document.createElement('button')
const remove  = document.createElement('button')
const input = document.createElement('input')
btnAdd.textContent='add'
remove.textContent= 'Remove'


document.body.append(input,btnAdd,remove,creatUl)

btnAdd.addEventListener('click',()=>{
  const inputs = input.value
  const elemntLi = document.createElement('li')
  const text = elemntLi.textContent = inputs
if(inputs==='' )return
  

creatUl.append(elemntLi)
    input.value = ' '
if(creatUl.children.length % 2 === 0){
    elemntLi.style.color = 'green'
}else{
     elemntLi.style.color = 'yellow'
}

})


remove.addEventListener('click',()=>{
       
   const lasChild =  creatUl.lastChild
  if(lasChild){
     lasChild.remove()
  }
  
})
//task-2


const froms = [
  "width:100px;  height: 100px; border-width:1px;",
  "width:100px;  height: 100px; border-radius:50%;",
  "width:150px;  height: 100px; border-width:1px;",
  "width:200px;  height: 100px; border-radius:100px/50px;",
  "width:100px;  height: 100px; transform:skew(20deg)",
]
function getRandomHex(){
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

function randomither(max){
  return Math.floor(Math.random()*max)
}

const newElement = document.createElement('div')
document.body.append(newElement)
newElement.addEventListener('click',get)
  
function get(){
newElement.style.cssText = froms[randomither(froms.length)]
newElement.style.backgroundColor = getRandomHex()
newElement.style.position = 'absolute'
newElement.style.top = `${randomither(100)}%`
newElement.style.left= `${randomither(100)}%`
}
const users = [
  {
    id: 1,
    name: "Mango",
    gender: "male",
    likes: 12,
    tags: ["html", "css"],
  },
  {
    id: 2,
    name: "Poly",
    gender: "female",
    likes: 25,
    tags: ["html", "css"],
  },
  {
    id: 3,
    name: "Ajax",
    gender: "male",
    likes: 7,
    tags: ["html", "css"],
  },
  {
    id: 4,
    name: "Kiwi",
    gender: "female",
    likes: 19,
    tags: ["html", "css"],
  },
  {
    id: 5,
    name: "Chelsy",
    gender: "female",
    likes: 33,
    tags: ["html", "css"],
  },
  {
    id: 6,
    name: "Alex",
    gender: "male",
    likes: 4,
    tags: ["html", "css"],
  },
];

const userList = document.querySelector('.stats')

const userItem = users.map(({name,id,gender,likes,tags})=>
   `
   <li class ="stats-item ${gender}" id=${id}>
   <p clas="stats-name">${name}</p>
   <p clas="stats-likes">${likes}</p>
   <p clas="stats-tags">${tags}</p>
</li>
   `
).join('')



userList.innerHTML = userItem

//task-3
const list = document.querySelector('.lists')
const listItem = document.querySelectorAll('.listItem')
const btn = document.querySelector('.btn')
const descr = document.querySelector('.descr')


btn.addEventListener('click',()=>{
    listItem.forEach(element => {
     const num =  Number(element.textContent)*2
     element.textContent = num
    });

})

const product = document.querySelector('#productTable')


product.addEventListener('click',(event)=>{
   const target =event.target
    if(target.nodeName !=='TD') return
    const perent = target.parentNode
    const [product,price] = perent.children

     descr.textContent = `продукт : ${product.textContent} ціна : ${price.textContent}`

})

//task-4
const btns = document.querySelector('.statList')
const results = document.querySelector('.allResult')
const resultBtn = document.querySelector('.resultButton')

btns.addEventListener('click',resultBtns)
let totalNum = 0
const stat = {}
function resultBtns(event){
  const target = event.target
  if(target.nodeName !=="BUTTON") return
 const numData = target.dataset.number
 const key = target.textContent
if(key.hasOwnProperty(key)){
  stat[key]+=1
}else{
  stat[key]=1
}
console.log(stat)
  totalNum+=Number(numData)

 
    
  

 

}
  resultBtn.addEventListener('click',getTotal)
 
  function getTotal(){
      results.textContent = `результат роботи конопки : ${totalNum}`
      totalNum = 0
  

      
  }
