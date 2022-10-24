const form = document.querySelector('.form')
const saveBtn = document.querySelector('.save-btn')
const restoreBtn = document.querySelector('.restore-btn')

if (localStorage.getItem('draft')) form.innerHTML = localStorage.getItem('draft')
let inputFields = document.querySelectorAll('.input-field')

window.onload = function () {
    inputFields.forEach(inputField => {
        inputField.addEventListener('input', function () {
            inputField.setAttribute('value', inputField.value)
            localStorage.setItem('default', form.innerHTML)
        })
    })
}

saveBtn.addEventListener('click', function() {
    localStorage.setItem(prompt('Название: '), form.innerHTML)
})

restoreBtn.addEventListener('click', function () {
    let draft = localStorage.getItem(prompt('Название: '))
    if (draft != null) form.innerHTML = draft
    else alert('Неверное название.')
})