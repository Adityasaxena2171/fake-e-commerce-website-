let url = "https://fakestoreapi.com/products";
async function getapi() {
  let res = await axios.get(url);
  let items = res.data;
  let image = `<img src="" alt=""></img>`
  let str = ``;
  items.map((itm, index) => {
    let card = `
     <div class='col-md-3 mb-4'>
      <div class="card">
    <img src=${itm.image} class="card-img-top" alt="..." height = "300px" width = "250px">
 <div class="card-body">
   <h5  class="card-title">${itm.category}</h5>
    <p class="card-text">${itm.description.slice(0, 90)}</p>
    <h5 class="card-title">$ ${itm.price}</h5>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    read more description
  </button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    ${itm.description}
  </div>
</div>
</div> 
</div>
</div>
`
    str = str + card;
  })
  document.querySelector('#d1').innerHTML = str;
}
getapi();
