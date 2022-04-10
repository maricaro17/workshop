import { articulos } from "./articulos.js";

const rowArticulos = document.getElementById("row-articulos");
const go = document.getElementById("go");


document.addEventListener("DOMContentLoaded", async () => {
  const art = await articulos();
  

  art.forEach((element) => {
    const { id, name, price, image1 } = element;

    rowArticulos.innerHTML += `
        <div class="col col-md-4 my-4">
          <div class="card" style="width: 18rem">
            <img
              src="${image1}"
              class="card-img-top"
              alt="${name}"
            />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${price}</p>
              <a id="${id}" class="btn btn-primary go">Go</a>
            </div>
          </div>
        </div>
        `;
  });
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("go")) {
    let id = e.target.id
    localStorage.setItem("articuloId", JSON.stringify(id))
    window.location.href = "../pages/productDetails.html";
  }
})
