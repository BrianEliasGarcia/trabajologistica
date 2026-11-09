async function boton() {

    await Swal.fire({
        imageUrl: "multimedia/logo/logo.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "logo",
        text: "Se le solicitaran datos para calcular envios.",
        confirmButtonText: "Continuar",
        allowEscapeKey: false,
        allowOutsideClick: false,
        theme: "dark"
    })

    let destino, resultadodestino, costobase, resultadopeso, calculopeso, peso, envio, resultadoenvio, costoextra
    costobase = 1500
    const recargo = 1000
    costoextra = 800

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
        theme: "dark"


    })
    destino = resultadodestino.value

    if (destino == "nacional") {
        costobase = costobase + recargo
    };

    resultadopeso = await Swal.fire({
    imageUrl: "multimedia/logo/logo.jpg",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "logo",
    text: "Ingrese peso",
    input: "number",
    confirmButtonText: "Continuar",
    allowEscapeKey: false,
    allowOutsideClick: false,
    theme: "dark"
});

peso = Number(resultadopeso.value);

while (!peso || peso < 1) {

    resultadopeso = await Swal.fire({
        imageUrl: "multimedia/logo/logo.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "logo",
        text: "Ingrese un peso válido (mayor a 0)",
        input: "number",
        confirmButtonText: "Continuar",
        allowEscapeKey: false,
        allowOutsideClick: false,
        theme: "dark"
    });


    peso = Number(resultadopeso.value);
}

if (peso <= 5) {
    calculopeso = peso * 200;
} else {
    calculopeso = peso * 500;
};  

    
   resultadoenvio = await Swal.fire({
     imageUrl: "multimedia/logo/logo.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "logo",
        text: "Solicita envio express",
        input: "select",
        inputOptions: {
            Si: "Si",
            No: "No"
        },
        confirmButtonText: "Continuar",
        allowEscapeKey: false,
        allowOutsideClick: false,
        theme: "dark"
   }) 
   envio = resultadoenvio.value


   if (envio == "Si" && destino == "nacional") {
    let extra
    extra = costoextra + 800
    
   }
const total = costobase + calculopeso + costoextra;

await Swal.fire({
       imageUrl: "multimedia/logo/logo.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "logo",
        title: "Costo del envío",
        html: `
            <p>Costo base: $${costobase}</p>
            <p>Costo por peso: $${calculopeso}</p>
            <p>Costo express: $${costoextra}</p>
            <hr>
            <h3>Total: $${total}</h3>
        `,
        confirmButtonText: "Aceptar",
        theme: "dark"
})

}





