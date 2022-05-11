//Validación número de documento

let button2 = document.getElementById("btnSearch");
button2.addEventListener('click', function () {
    let doc = parseInt(document.getElementById("documento").value);
    switch (doc) {
        case 52368795:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>Cuentas con la 1ra dosis</h3>' + '<i>1ra dosis: </i><br>' + '<b>Farmacéutica:</b> Pfizer<br>' +
                    "<b>Fecha:</b> 20/abril/2022",
                background: '##dfe3ec',
                color: '#000000'
            })
            window.setTimeout(() => { window.location.href = "formVacunacion.html" }, 3000);
            break;

        case 1001235478:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>Cuentas con la 1ra y 2da dosis</h3><br>' + '<i>1ra dosis: </i><br>' + '<b>Farmacéutica:</b> Cinovac<br>' + '10/marzo/2022<br><br>' +
                    '<i>2da dosis:</i><br>' + '<b>Farmacéutica:</b> Cinovac<br>' + '08/abril/2022'
            })
            window.setTimeout(() => { window.location.href = "formVacunacion.html" }, 3000);
            break;

        case 25413574:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>Su esquema de vacunación está completo</h3>' + '<i>1ra dosis:</i><br>' + '<b>Farmacéutica:</b> Moderna<br>' + '28/septiembre/2021<br><br>' +
                    '<i>2da dosis:</i><br>' + '<b>Farmacéutica:</b> Moderna<br>' + '21/octubre/2021<br><br>' +
                    '<i>3ra dosis:</i><br>' + '<b>Farmacéutica:</b> Pfizer<br>' + '20/febrero/2022',
                background: '##dfe3ec',
                color: '#000000'
            })
            break;

        case 1007203506:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>No tiene registro de vacunación</h3>',
                background: '##dfe3ec',
                color: '#000000'
            })
            window.setTimeout(() => { window.location.href = "formVacunacion.html" }, 3000);
            break;

        default:
            Swal.fire({
                html: '<img src="img/logoforja.png">' + '<h3>No estas registrado</h3>' + '<h3> ¿Desea realizar el registro?</3>',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                background: '##dfe3ec',
                color: '#000000',
                showCancelButton: true, confirmButtonColor: '#F3610E', cancelButtonColor: '#1D1B45',
                confirmButtonText: 'Si, por favor!',
                cancelButtonText: 'No, gracias'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.setTimeout(() => {
                        window.location.href = "formPacientes.html"
                    }, 3000);
                }
            })
            break;
    }

});