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

document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('itemsNavBar');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

window.addEventListener('resize', function() {
    const menu = document.getElementById('itemsNavBar');
    if (window.innerWidth >= 900) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});