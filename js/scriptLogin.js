//Validación usuario y contraseña forja

let button = document.getElementById("btnInicio")
button.addEventListener('click', function (e) {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    e.preventDefault();

    if (user == "Admin" && password == "Kuepa2022") {
        window.setTimeout(() => { window.location.href = "dashboard.html" }, 500);
    } else if (user == "Admin" && password != "Kuepa2022") {
        Swal.fire({
            icon: 'error',
            title: 'Su contraseña es incorrecta'
        })
    } else if (user != "Admin" && password == "Kuepa2022") {
        Swal.fire({
            icon: 'error',
            title: 'Su usuario es incorrecto'
        })
    } else if (user != "Admin" && password != "Kuepa2022") {
        Swal.fire({
            icon: 'error',
            title: 'Error de credenciales'
        })
    }
});