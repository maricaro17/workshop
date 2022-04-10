import { articulos } from "./articulos.js";

const rowArticulos = document.getElementById("row-articulos");
const go = document.getElementById("go");

document.addEventListener("DOMContentLoaded", async () => {
  const art = await articulos();
  console.log(art);

  art.forEach((element) => {
    const { name, price, image1 } = element;
    const id = element.id;
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
              <a id="go" href="../index.html" class="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        `;
  });
});

