/* const guest = document.querySelector("#guest-1") */

//console.log(guest.textContent) //retorna somente o conteúdo visível
//console.log(guest.innerText) // retorna o conteúdo visível e oculto
// console.log(guest.innerHTML)  retorna o HTML como texto

/* const input = document.querySelector("#name") */

// adicionando a classe
/* input.classList.add("input-error") */

//removendo a classe
/* input.classList.remove("input-error") */

// o toggle se já tiver a classe ele remove, se não tiver a classe ele adiciona
/* input.classList.toggle("input-error") */

/* const button = document.querySelector("button") */

//modificando as propriedades css do elemento.  
/* button.style.backgroundColor = "red" */

/* 
segunda - peito e abdômen
terça - Costa e posterior de ombro
quarta - Pernas (quadríceps e posterior)
quinta - Ombro e braços
sexta - peito e abdômen
sabado - Costa e posterior de ombro
domingo - Pernas (quadríceps e posterior)
*/

/* const newGuest = document.createElement("li")
const guestName = document.createElement("span") */

/* guestName.textContent = "Pablo" */

//appendchild adiciona o elemento após o último filho
/* newGuest.appendChild(guestName) */

/* const guestSurname = document.createElement("span") */
/* guestSurname.textContent = "Henrique" */

// adiciona antes do primeiro filho.
/* newGuest.prepend(guestSurname) */

/* guest.append(newGuest) */


let list = document.querySelector("ul")

let newItem = document.createElement("li")
let newPeople = document.createElement("span")
newPeople.textContent = "Pablo"

newItem.append(newPeople)

list.append(newItem)

newItem.classList.add("guest")