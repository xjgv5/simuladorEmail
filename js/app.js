document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')

    const formulario = document.querySelector('#formulario')

    // asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    function validar(e) {

        let txt = e.target.value.trim()
        if (txt === '') {
            mostarAlerta()
        } else {
            console.log("todo ok")
        }
    }

    function mostarAlerta() {
        const error = document.createElement('p')
        error.textContent = "Hubo un error"
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // Inyectar el error en el formulario
        formulario.appendChild(error)
    }
})