// selcetors

let check = document.querySelector(".btn-check-match");
let info = document.querySelector(".info");
let input = document.querySelector(".user-input");
let showCats = document.querySelector(".btn-show-cats");

let showImage = document.querySelector(".show-image");
//event listeners
check.addEventListener("click", checkMatch);
showCats.addEventListener("click", showCatsData);

//functions

function showCatsData() {
  fetch("https://aws.random.cat/meow")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.file);
      showImage.innerHTML = `<img src="${data.file}"></img>`;
    });
}

function checkMatch() {
  //   console.log("checked");

  var r1 = Math.floor(Math.random() * 10 + 1);
  var r2 = Math.floor(Math.random() * 10 + 1);

  if (r1 == r2) {
    // console.log("prefetct match");
    info.textContent = `not perfect match for ${input.value} `;
    // input.value = "";
  } else {
    // console.log("not");
    info.textContent = ` a prefect match for  ${input.value}`;
    // input.value = "";
  }
}

//integrating random cat api
