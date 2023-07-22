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

localStorage.setItem("prendas", JSON.stringify(prendas));

window.addEventListener("load", () => {
  const prendas = fetchPrendas();
  printPrendas(prendas);
});

const fetchPrendas = () => {
  const prendasString = localStorage.getItem("prendas");
  return JSON.parse(prendasString);
};

const printPrendas = (prendas) => {
  const divPrendas = document.getElementById("listadoPrendas");
  if (!prendas.length) {
    divPrendas.innerHTML = `
    <h2>no hay prendas de este talle por el momento :( </h2>
    `;
  } else {
    prendas.forEach((prenda) => {
      divPrendas.innerHTML += `
      <h3>${prenda.title}</h3
      <p>Precio: ${prenda.price}</p>
      <p>Talle: ${prenda.size}</p>
      <p>${prenda.onSale ? "En oferta!!!" : "No esta en oferta :("} </p>
      <p>Categoría: ${prenda.type}</p>
      <hr>`;
    });
  }
};

const resetFilters = () => {
  const prendasListButton = fetchPrendas();
  clearPrendasDiv();
  const sltPrice = document.getElementById("sltPrice");
  const sltTalles = document.getElementById("sltTalles");
  const sltSale = document.getElementById("sltSale");
  sltPrice.value = "none";
  sltTalles.value = "none";
  sltSale.value = "none";
  printPrendas(prendasListButton);
};

const clearPrendasDiv = () => {
  const divPrendas = document.getElementById("listadoPrendas");
  divPrendas.innerHTML = "";
};

const changeFilter = () => {
  let prendasList = fetchPrendas();
  clearPrendasDiv();
  const sltPrice = document.getElementById("sltPrice");
  const sltTalles = document.getElementById("sltTalles");
  const sltSale = document.getElementById("sltSale");
  if (sltPrice.value !== "none") {
    prendasList = sortPrendas(prendasList, sltPrice.value);
  }
  if (sltTalles.value !== "none") {
    prendasList = filterBySize(prendasList, sltTalles.value);
  }
  if (sltSale.value !== "none") {
    prendasList = filterBySale(prendasList, sltSale.value);
  }
  printPrendas(prendasList);
};

const sortPrendas = (prendasList, criterioOrden) => {
  return prendasList.sort((a, b) => {
    if (criterioOrden == "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
};

const filterBySize = (prendasList, size) =>
  prendasList.filter((prenda) => prenda.size == size);

const filterBySale = (prendasList, onSale) =>
  prendasList.filter((prenda) => prenda.onSale == onSale);
