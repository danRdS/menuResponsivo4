const hamburguer = document.querySelector('.hamburguer')
const main = document.querySelector('nav')
console.log(main)

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('clicked');
    main.classList.toggle('show');
})

hamburguer.addEventListener('blur', ()=>{
    hamburguer.classList.remove('clicked')
    main.classList.remove('show');
})