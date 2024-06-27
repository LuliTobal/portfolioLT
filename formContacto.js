document.getElementById('formularioContact').addEventListener('submit', function(event) {
    
    var errores = false;

    document.getElementById('errorMessages1').textContent = '';
    document.getElementById('errorMessages2').textContent = '';
    document.getElementById('errorMessages3').textContent = '';
    document.getElementById('errorMessages4').textContent = '';

    var nombre = document.getElementById('nombre').value;
    var mail = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '') {
        document.getElementById('errorMessages1').innerHTML = 'El nombre es obligatorio.<br>';
        errores = true;
    } else {
       document.getElementById('errorMessages1').innerHTML = '';
    }
    if (mail === '') {
        document.getElementById('errorMessages2').innerHTML = 'El email es obligatorio.<br>';
        errores = true;
    } else {
       document.getElementById('errorMessages2').innerHTML = '';
    }
    if (asunto === '') {
        document.getElementById('errorMessages3').innerHTML =  'Ingrese el asunto.<br>';
        errores = true;
    }
    if (mensaje === '') {
        document.getElementById('errorMessages4').innerHTML = 'Contame por qué queres contactarme.<br>';
        errores = true;
    } else {
       document.getElementById('errorMessages4').innerHTML = '';
    }

    if (errores) {
        event.preventDefault();
    }
});
   
//     if(!errores) {
//        limpiarFormContacto();
//        Swal.fire({
//            title: 'Enviando formulario...',
//            timer: 2000,
//            background: '#222222',
//            customClass: {
//              title: 'swal2-personalizar-texto',
//            },
//            didOpen: () => {
//              Swal.showLoading();
//            }
//          }).then(() => {
//            Swal.fire({
//              icon: 'success',
//              title: 'Formulario enviado!',
//              confirmButtonText: 'Aceptar',
//              background: '#222222',
//              customClass: {
//                title: 'swal2-personalizar-texto',
//                confirmButton: 'swal2-personalizar-boton'
//              }
//             });
//         });
//     }
// });


// function limpiarFormLogin(){
//    document.getElementById('formularioContact').value = '';
//     document.getElementById('login-password').value = '';
// }

// function limpiarFormRegistro(){
//    document.getElementById('nombre2').value = '';
//    document.getElementById('apellido').value = '';
//    document.getElementById('tel2').value = '';
//    document.getElementById('direccion').value = '';
//    document.getElementById('mail2').value = '';
//    document.getElementById('usuario').value = '';
//    document.getElementById('contrasenia1').value = '';
//    document.getElementById('contrasenia2').value = '';
// }

// function limpiarFormContacto(){
//    document.getElementById('nombre').value = '';
//    document.getElementById('mail').value = '';
//    document.getElementById('tel').value = '';
//    document.getElementById('servicio').value = 0;
//    document.getElementById('mensaje').value = '';
//    var radios = document.querySelectorAll('input[name="source"]');
//    for (var i = 0; i < radios.length; i++) {
//        radios[i].checked = false;
//    }
//    document.getElementById('img_subir').value = '';
// }
