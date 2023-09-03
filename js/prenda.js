const apiURL = "https://64d01e6effcda80aff526a03.mockapi.io/api/";
let prenda = {};
const fetchPrenda = async (id) => {
  prenda = await fetch(`${apiURL}prendas/${id}`).then((res) => res.json());
};

const getUrlParam = (paramName) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
};

window.addEventListener("load", async () => {
  await fetchPrenda(getUrlParam("id"));
  console.log(prenda);
  printPrenda(prenda);
});

const printPrenda = (prenda) => {
  const detallePrenda = document.getElementById("detallePrenda");
  detallePrenda.innerHTML = `
  <h3>${prenda.title}</h3>
  <p>${prenda.description}</p>
  <img class="imgPrenda" src="./img/${prenda.type}.png"/>
  <p>${
    prenda.booked
      ? "<span class='badge badge-secondary mt-4'>Esta prenda ya esta reservada :(</span>"
      : "<button onclick='bookPrenda()' class='img-btn' >Reservar</button>"
  }</p>
  `;
};

const bookPrenda = () => {
  Swal.fire({
    title: "Seguro que quieres reservar esta prenda?",
    text: "Recuerda que las reservas son un compromiso y se tienen en cuenta en futuras compras.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "No la quiero",
    confirmButtonText: "Si, la quiero!",
  }).then((result) => {
    if (result.isConfirmed) {
      prenda.booked = true;
      Swal.fire("Listo!", "Tu prenda ha sido reservada :)", "success");
    }
    printPrenda(prenda);
  });
};
