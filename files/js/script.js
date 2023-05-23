const hamburguer = document.querySelector('.hamburguer')
const nav = document.querySelector('nav')
console.log(nav)

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('clicked');
    nav.classList.toggle('show');
})

hamburguer.addEventListener('blur', ()=>{
    hamburguer.classList.remove('clicked')
    nav.classList.remove('show');
})