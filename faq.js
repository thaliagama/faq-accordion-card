let pergunta = document.querySelectorAll('h3')
let btn = document.querySelectorAll('.btn')

btn.forEach(btn => { btn.addEventListener('click', ()=>{
    let resposta = btn.nextElementSibling.nextElementSibling
    resposta.classList.toggle('hide')
    resposta.style.transition ='0.9, ease-in'
})
});    

pergunta.forEach(pergunta => { pergunta.addEventListener('click', ()=>{
    let resposta = pergunta.nextElementSibling
    resposta.classList.toggle('hide')
})
});    

