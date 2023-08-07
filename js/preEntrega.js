// Mock API creada para traer prendas
const apiURL = "https://64d01e6effcda80aff526a03.mockapi.io/api/";
let prendas = [];

const fetchPrendas = async () => {
  prendas = await fetch(`${apiURL}/prendas`).then((res) => res.json());
};

window.addEventListener("load", async () => {
  await fetchPrendas();
  printPrendas(prendas);

  //Asignación de eventos
  const sltPrice = document.getElementById("sltPrice");
  sltPrice.addEventListener("change", changeFilter);

  const sltTalles = document.getElementById("sltTalles");
  sltTalles.addEventListener("change", changeFilter);

  const sltSale = document.getElementById("sltSale");
  sltSale.addEventListener("change", changeFilter);

  const btnReset = document.getElementById("btnReset");
  btnReset.addEventListener("click", resetFilters);
});

const printPrendas = (prendas) => {
  const divPrendas = document.getElementById("listadoPrendas");
  if (!prendas.length) {
    divPrendas.innerHTML = `
    <h2>no hay prendas de este talle por el momento :( </h2>
    `;
    // <p>${prenda.onSale ? "En oferta!!!" : "No esta en oferta :("} </p>
  } else {
    prendas.forEach((prenda) => {
      divPrendas.innerHTML += `
      <h3>${prenda.title}</h3
      <p>Precio: ${prenda.price}</p>
      <p>Talle: ${prenda.size}</p>
      <p>${
        prenda.onSale
          ? "<span class='badge badge-success'>On Sale :)</span>"
          : "<span class='badge badge-warning'>Not On Sale :(</span>"
      }</p>
      <p>Categoría: ${prenda.type}</p>
      <hr>`;
    });
  }
};

const resetFilters = async () => {
  clearPrendasDiv();
  const sltPrice = document.getElementById("sltPrice");
  const sltTalles = document.getElementById("sltTalles");
  const sltSale = document.getElementById("sltSale");
  sltPrice.value = "none";
  sltTalles.value = "none";
  sltSale.value = "none";
  printPrendas(prendas);
};

const clearPrendasDiv = () => {
  const divPrendas = document.getElementById("listadoPrendas");
  divPrendas.innerHTML = "";
};

const changeFilter = () => {
  let prendasList = [...prendas];
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
  window.scrollTo(0, 0);
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
