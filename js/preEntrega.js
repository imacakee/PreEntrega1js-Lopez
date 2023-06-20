function cuotas() {
  console.log("todas nuestras prendas tienen:");
  for (let i = 1; i <= 6; i++) {
    console.log(i + " cuota(s) sin interés");
  }
}

function rebaja(tipo) {
  switch (tipo) {
    case "vestidos":
      console.log("estas prendas están en rebaja!");
      break;
    case "abrigos":
      console.log("estas prendas solo están en rebaja en temporada!");
      break;
    case "zapatos":
      console.log("estas prendas no se encuentran en rebaja :(");
      break;
    case "polleras":
      console.log(
        "estas prendas se encuentran en rebaja pero pueden tener algunos detalles!"
      );
      break;
    default:
      console.warn("la prenda que seleccionaste no esta disponible :(");
      break;
  }
}

function consultarPrendas() {
  let respuesta = confirm("deseas saber qué prendas se encuentran en rebaja?");
  if (respuesta === true) {
    let tipo = prompt(
      "ingresa el tipo de prenda que te haya interesado!"
    );
    rebaja(tipo);
    cuotas();
  } else {
    console.warn(
      "esperamos que la próxima encuentres algo que sea de tu interés <3"
    );
  }
}
