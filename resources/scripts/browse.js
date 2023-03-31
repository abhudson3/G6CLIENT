// const url = "https://pathreeapi.herokuapp.com/api/songs";
const url = "https://localhost:7243/api/cars";
let cars = [];

let renderCars = function () {
  let html = `<div class="row">`;
  cars.forEach(function (car) {
    if (car.make.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase()) || car.model.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase()))
      {
          if (car.deleted != true) {
            
            html += `
                    <div class="card m-4" style="width: 18rem;">
                            <div class="card-body">
                                <img src="${car.imageLink}" class="card-img-top" alt="not damn working">
                                <h5 class="card-title"> ${car.make} ${car.model} </h5>
                                <h6 class="card-subtitle mb-2 text-muted">2023</h6>
                                <p class="card-text">Price: $${car.price}</p>
                                
                                
                            </div>
                        </div>
                    `;
          }
      }else{
        return
      }
    
  });
  html += "</div>";
  document.getElementById("cards").innerHTML = html;
};
document.querySelector("#searchText").addEventListener("input", function (e) {
  console.log(e.target.value);
  renderCars()
});



function handleOnLoad() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cars = data;
      renderCars();
    });
}