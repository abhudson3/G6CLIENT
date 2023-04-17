const url = "https://localhost:7243/api/cars";
let cars = []

function handleOnLoad() {
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cars = data;
      renderCar()
      })
}

let renderCar = function () {
    let transferredCarId = localStorage.getItem("transferCarId") -1
    let carPrice = Number(cars[transferredCarId].msrp.replace(/[^0-9\.]+/g, "")); 
    let filteredRange = cars[transferredCarId].mpge.substr(0, 3);

    filteredRange = filteredRange.replace(/\D/g, ''); 
    let html = `<div class="row">`;
              html += `
                      <div class="card m-4" style="width: 500px; height: 450px">
                              <div class="card-body" style="margin: auto">
                                  <br>
                                  <img src="${cars[transferredCarId].imageLink}" class="card-img-top" alt="not damn working" style="width: 340px; height: 200px; object-fit: cover;">
                                  <br>
                                  <br>
                                  <h5 class="card-title"> ${cars[transferredCarId].make} ${cars[transferredCarId].model} </h5>
                                  <br>
                                  <br>
                                  <h7 class="card-text">${filteredRange} Mile Range,  ${cars[transferredCarId].drivetrain},  ${cars[transferredCarId].motorKw},  ${cars[transferredCarId].seats}</h7>
                                  <br>
                                  <br>
                                  <br>
                                  <h5 id="priceLabel" class="card-text">Estimated Price : $</h5>
                                  <h5 id="price" class="card-text">${carPrice}</h5>
                                  <br>
                                  <br>
                              </div>
                          </div>
                      `
    html += "</div>";
    document.getElementById("addOnCar").innerHTML = html;
};

document.querySelector("#leatherCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 5000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 5000)
  }
});

document.querySelector("#soundSystemCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 4000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 4000)
  }
});

document.querySelector("#batteryCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 3000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 3000)
  }
});

document.querySelector("#carplayCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 2000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 2000)
  }
});
document.querySelector("#wheelCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 1500)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 1500)
  }
});