// 😋
//Hide the food numbers and the food name when no year is selected & not having mouse over
document.getElementById("food-num").style.display = "none";
document.getElementById("food-name").style.display = "none";

//
let selectedYear = 0;
let topGrub = [];

document.getElementById("2018-btn").onclick = function () {
  document.getElementById("year-background-header").innerHTML = 2018;
  document.getElementById("2018-btn").style.backgroundColor = "#5b2a86";
  document.getElementById("2018-btn").style.color = "white";
  document.getElementById("2019-btn").style.backgroundColor = "transparent";
  document.getElementById("2019-btn").style.color = "#5b2a86";
  //For food in 2018
  selectedYear = 2018;
  topGrub = topTenList[2018];
  //
  topGrub.forEach((food) => {
    document.getElementById(`num-${food.id}`).onmouseover = function () {
      document.getElementById("food-area-title").style.display = "none";
      document.getElementById("food-num").style.display = "block";
      document.getElementById("food-name").style.display = "block";
      document.getElementById("food-num").innerHTML = food.id;
      document.getElementById("food-name").innerHTML = food.name;
    };
  });
};

//Complete the same process as 2018 but insert 2019 list
document.getElementById("2019-btn").onclick = function () {
  document.getElementById("year-background-header").innerHTML = 2019;
  document.getElementById("2019-btn").style.backgroundColor = "#5b2a86";
  document.getElementById("2019-btn").style.color = "white";
  document.getElementById("2018-btn").style.backgroundColor = "transparent";
  document.getElementById("2018-btn").style.color = "#5b2a86";
  //For food in 2019
  selectedYear = 2019;
  topGrub = topTenList[2019];

  topGrub.forEach((food) => {
    document.getElementById(`num-${food.id}`).onmouseover = function () {
      document.getElementById("food-area-title").style.display = "none";
      document.getElementById("food-num").style.display = "block";
      document.getElementById("food-name").style.display = "block";
      document.getElementById("food-num").innerHTML = food.id;
      document.getElementById("food-name").innerHTML = food.name;
    };
  });
};