const btn = document.querySelector('.btn')
const identifierEl = document.querySelector('.identifier')
const advice = document.querySelector('.quote')

btn.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const adviceTxt = data.slip.advice
        const idAdvice = data.slip.id
        identifierEl.textContent = idAdvice
        advice.textContent = `"${adviceTxt}"`
    })
    .catch(error => {
        console.error('Erro ao busca a API:', error)
    })

})
