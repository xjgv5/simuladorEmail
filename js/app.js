document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')

    // asignar eventos
    inputEmail.addEventListener('blur', function (e) {
        console.log(e.target.value)
    })
    inputAsunto.addEventListener('blur', function (e) {
        console.log(e.target.value)
    })
    inputMensaje.addEventListener('blur', function (e) {
        console.log(e.target.value)
    })
})