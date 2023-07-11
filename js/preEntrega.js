const cuotas = () => {
  console.log("todas nuestras prendas tienen:");
  for (let i = 1; i <= 6; i++) {
    console.log(i + " cuota(s) sin interés");
  }
};

// 25% descuento
const discount = 0.75;
const mapDiscount = (arr) => {
  return arr.map((item) => {
    item.price = item.price * discount;
    return item;
  });
};

const prendas = [
  {
    title: "tapado rosa",
    price: 900,
    size: "XL",
    onSale: false,
    type: "abrigos",
  },
  {
    title: "suéter púrpura",
    price: 350,
    size: "M",
    onSale: true,
    type: "buzos",
  },
  {
    title: "remera manga corta",
    price: 250,
    size: "M",
    onSale: true,
    type: "remeras",
  },
  {
    title: "guantes",
    price: 550,
    size: "único",
    onSale: false,
    type: "accesorios",
  },
  { title: "poncho", price: 600, size: "M", onSale: false, type: "abrigos" },
  {
    title: "mochila vintage",
    price: 1000,
    size: "none",
    onSale: false,
    type: "accesorios",
  },
  {
    title: "jean vintage",
    price: 1200,
    size: "S",
    onSale: false,
    type: "pantalones",
  },
  {
    title: "sombrero shantung",
    price: 500,
    size: "M",
    onSale: false,
    type: "accesorios",
  },
  {
    title: "chaqueta de cuero",
    price: 900,
    size: "XL",
    onSale: true,
    type: "abrigos",
  },
  {
    title: "converse negros",
    price: 1200,
    size: "40",
    onSale: true,
    type: "calzado",
  },
  { title: "top", price: 100, size: "M", onSale: true, type: "remeras" },
  {
    title: "camperón pana",
    price: 1000,
    size: "L",
    onSale: false,
    type: "abrigos",
  },
  {
    title: "pantalón pana",
    price: 600,
    size: "S",
    onSale: true,
    type: "pantalones",
  },
  {
    title: "jean azul",
    price: 450,
    size: "M",
    onSale: true,
    type: "pantalones",
  },
  {
    title: "botas cuerina",
    price: 1500,
    size: "36",
    onSale: false,
    type: "calzado",
  },
];

const encontrarPrenda = () => {
  let clothingTitle = prompt(
    "ingresa aquí el título de la prenda que sea de tu interés: "
  );
  const clothingFound = prendas.find(
    (vestimenta) =>
      vestimenta.title.toLowerCase() === clothingTitle.toLowerCase()
  );
  console.log(clothingFound);
};

const rebaja = (tipoPrenda) => {
  const prendasFiltradas = prendas.filter(
    (prenda) =>
      prenda.type.toLowerCase() === tipoPrenda.toLowerCase() && prenda.onSale
  );
  //Preguntar por prompt si quiere aplicar descuento
  let respuesta = confirm(
    "deseas aplicarle el descuento a las prendas encontradas?"
  );
  if (respuesta) {
    const prendasDescontadas = mapDiscount(prendasFiltradas);
    console.log(prendasDescontadas);
  } else {
    console.log(prendasFiltradas);
  }
};

const consultarPrendas = () => {
  let respuesta = confirm("deseas saber qué prendas se encuentran en rebaja?");
  if (respuesta) {
    let tipo = prompt("ingresa el tipo de prenda que te haya interesado!");
    rebaja(tipo);
    cuotas();
  } else {
    console.warn(
      "esperamos que la próxima encuentres algo que sea de tu interés <3"
    );
  }
};

// consultarPrendas();
