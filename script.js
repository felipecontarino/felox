document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el botón de toggle y el navbar collapse
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Añade un evento de clic al botón de toggle
    navbarToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        } else {
            navbarCollapse.classList.add('show');
        }
    });})


    document.addEventListener('DOMContentLoaded', function() {
        // Obtener el botón de cerrar y el elemento navbar-collapse
        const closeBtn = document.getElementById('closeNavbar');
        const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    
        // Crear una instancia de Bootstrap Collapse para poder controlarla desde JS
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
    
        // Agregar el evento click al botón de cerrar
        closeBtn.addEventListener('click', function() {
            bootstrapCollapse.hide();
        });
    
        // Agregar eventos click a todos los enlaces dentro del navbar-collapse
        navbarCollapse.querySelectorAll('a.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                bootstrapCollapse.hide();
            });
        });
    });


