async function boton() {
    let destino, resultadodestino, costobase
    costobase= 1500
    const recargo = 1000

    resultadodestino = await Swal.fire({
        imageUrl: "multimedia/logo/logo.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "logo",
        text: "Ingrese destino",
        input: "select",
        inputOptions: {
            local: "Local",
            nacional: "Nacional"
        },
        confirmButtonText: "Continuar",
        allowEscapeKey: false,
        allowOutsideClick: false,
        theme:"dark"


    })
    destino = resultadodestino.value

    if (destino == "nacional") {
        costobase= costobase + recargo
    }
    alert(costobase)

}





