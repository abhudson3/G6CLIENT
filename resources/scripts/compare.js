document.querySelector("#slider").addEventListener("input", function (e) {
    document.getElementById("evCost").innerHTML = parseInt(e.target.value) * .061
    document.getElementById("gasCost").innerHTML = parseInt(e.target.value) * .101
  });
  