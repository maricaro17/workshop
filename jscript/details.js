const urlBase = "https://workshop-1-f10.herokuapp.com/articulos";
const articuloId = JSON.parse(localStorage.getItem("articuloId"));
const containerImages = document.getElementById("images");
const details = document.getElementById("card-details")

const getId = async (articuloId) => {
    console.log(articuloId);
    const response = await fetch(`${urlBase}?id=${articuloId}`);

    return response.json();
};

const imageSelect = document.getElementById("image-select");
let urlImageUno, urlImageDos, urlImageTres;

getId(articuloId).then((data) => {
    console.log(data[0]);
    const { image1, image2, image3, name, price} = data[0];
    

    containerImages.innerHTML = `
    <img id="image1" src="${image1}" class="img-thumbnail" alt="...">
    <img id="image2" src="${image2}" class="img-thumbnail" alt="...">
    <img id="image3" src="${image3}" class="img-thumbnail" alt="...">
    `;
    urlImageUno = document.getElementById("image1");
    urlImageDos = document.getElementById("image2");
    urlImageTres = document.getElementById("image3");

    urlImageUno.addEventListener("click", (e) => {
        imageSelect.src = e.target.src;
    });
    urlImageDos.addEventListener("click", (e) => {
        imageSelect.src = e.target.src;
    });
    urlImageTres.addEventListener("click", (e) => {
        imageSelect.src = e.target.src;
    });
    imageSelect.src = urlImageUno.src;
    
    const priceFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "COP",
      }).format(price);
      details.innerHTML = `
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Precio: ${priceFormat}</p>
      <p class="card-text">Size</p>
      <div>  
      <button class="btn"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="31.5" fill="white" stroke="#1D1D1D"/>
        <path d="M31.96 39.14C31.04 39.14 30.2133 38.98 29.48 38.66C28.76 38.3267 28.1933 37.8733 27.78 37.3C27.3667 36.7133 27.1533 36.04 27.14 35.28H29.08C29.1467 35.9333 29.4133 36.4867 29.88 36.94C30.36 37.38 31.0533 37.6 31.96 37.6C32.8267 37.6 33.5067 37.3867 34 36.96C34.5067 36.52 34.76 35.96 34.76 35.28C34.76 34.7467 34.6133 34.3133 34.32 33.98C34.0267 33.6467 33.66 33.3933 33.22 33.22C32.78 33.0467 32.1867 32.86 31.44 32.66C30.52 32.42 29.78 32.18 29.22 31.94C28.6733 31.7 28.2 31.3267 27.8 30.82C27.4133 30.3 27.22 29.6067 27.22 28.74C27.22 27.98 27.4133 27.3067 27.8 26.72C28.1867 26.1333 28.7267 25.68 29.42 25.36C30.1267 25.04 30.9333 24.88 31.84 24.88C33.1467 24.88 34.2133 25.2067 35.04 25.86C35.88 26.5133 36.3533 27.38 36.46 28.46H34.46C34.3933 27.9267 34.1133 27.46 33.62 27.06C33.1267 26.6467 32.4733 26.44 31.66 26.44C30.9 26.44 30.28 26.64 29.8 27.04C29.32 27.4267 29.08 27.9733 29.08 28.68C29.08 29.1867 29.22 29.6 29.5 29.92C29.7933 30.24 30.1467 30.4867 30.56 30.66C30.9867 30.82 31.58 31.0067 32.34 31.22C33.26 31.4733 34 31.7267 34.56 31.98C35.12 32.22 35.6 32.6 36 33.12C36.4 33.6267 36.6 34.32 36.6 35.2C36.6 35.88 36.42 36.52 36.06 37.12C35.7 37.72 35.1667 38.2067 34.46 38.58C33.7533 38.9533 32.92 39.14 31.96 39.14Z" fill="#1D1D1D"/>
        </svg>
        </button>
        <button class="btn">M</button>
        <button class="btn">L</button>
        <button class="btn">XL</button>
        <button class="btn">XXL</button>

    </div>
    
        <div>
      <a href="#" class="btn btn-dark w-100 add">ADD TO CARD</a>
    </div>
    <div>
      <a href="#" class="btn btn-primary w-100">BUY IT NOW</a>
    </div>
    <div>
      <p class="card-text align-content-end">With supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div>
        <a href="">Click for Sizing</a>
    </div>  
        `;
});



