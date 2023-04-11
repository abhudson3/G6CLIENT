const url = "https://localhost:7243/api/cars";
let cars = []
let transferredCarId
let carPrice
function handleOnLoad() {
    transferredCarId = localStorage.getItem("transferCarId") -1
    
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cars = data;
      carPrice = Number(cars[transferredCarId].msrp.replace(/[^0-9\.]+/g, "")); 
      renderCar(transferredCarId, carPrice);
      
      })
}

let renderCar = function (transferredCarId, carPrice) {
    
    let html = `<div class="row">`;
              html += `
                      <div class="card m-4" style="width: 500px; height: 450px">
                              <div class="card-body" style="margin: auto">
                                  <img src="${cars[transferredCarId].imageLink}" class="card-img-top" alt="not damn working" style="width: 340px; height: 200px; object-fit: cover;">
                                  <br>
                                  <br>
                                  <h5 class="card-title"> ${cars[transferredCarId].make} ${cars[transferredCarId].model} </h5>
                                  <br>
                                  <br>
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