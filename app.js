// const baseurl = "https://v6.exchangerate-api.com/v6/9e24d231ad236041a27fa837/latest"
// const dropdowns = document.querySelectorAll(".Dropdown select")
// const btn = document.getElementById("btn")
// const fromcurr = document.querySelector(".From select")
// const tocurr = document.querySelector(".To select")
// let msg = document.querySelector(".Msg")

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "PKR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }


// const updateExchangeRate = async()=>{
//   let amount = document.querySelector(".Amount input");
//   let amtval = amount.value;
//   if (amtval === "" || amtval < 1) {
//     amtval = 1
//     amount.value = "1"
//   };

//   const url = `${baseurl}/${fromcurr.value}`;
//   let response = await fetch(url);
//   let data = await response.json();
//   let rate = data["conversion_rates"][tocurr.value];
//   let finalamt = amtval * rate;
//   msg.innerText = `${amtval} ${fromcurr.value} = ${finalamt} ${tocurr.value}`;

// }


// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };


// btn.addEventListener("click", (evt) => {
//   evt.preventDefault()
//   updateExchangeRate();
// })

// window.addEventListener("load", ()=>{
//     updateExchangeRate();
//   });


const BASE_URL ="https://v6.exchangerate-api.com/v6/9e24d231ad236041a27fa837/latest";
  

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "OMR") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data["conversion_rates"][toCurr.value];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});