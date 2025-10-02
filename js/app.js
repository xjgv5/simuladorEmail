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
        let campo = e.target.id
        let referencia = e.target.parentElement

        // console.log(referencia)
        let txt = e.target.value.trim()
        if (txt === '') {
            mostarAlerta(`El campo ${campo} es obligatorio`, referencia)
        } else {
            console.log("todo ok")
        }
    }

    function mostarAlerta(mensaje, referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')

        if (alerta) {
            alerta.remove()
        }

        const error = document.createElement('p')
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // Inyectar el error en el formulario
        referencia.appendChild(error)
    }
})