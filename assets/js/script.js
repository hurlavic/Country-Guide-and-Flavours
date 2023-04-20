// Search field selectors
const form = document.querySelector(".search-field");
const countryInp = document.querySelector("#countryInput");
const searchButton = document.querySelector("#btn");
const formSM = document.querySelector(".search-sm");
const inputSM = document.querySelector("#countryInput-SM");

// Search field submit event handlers
function handleSearchSubmit(e, input) {
  e.preventDefault();
  const countryName = input.value;
  const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      saveCountryResult(data);
      window.location.href = "search.html";
    })
    .catch(() => {
      const error =
        countryName.length == 0
          ? "The input field cannot be empty"
          : "Please enter a valid country name.";
      displayErrorMessage(error);
    });
}

form.addEventListener("submit", (e) => handleSearchSubmit(e, countryInp));
formSM.addEventListener("submit", (e) => handleSearchSubmit(e, inputSM));

// Store fetched data
function saveCountryResult(data) {
  const { name, flags, capital, continents, population, languages, timezones } =
    data[0];
  const countryArray = [
    flags.svg,
    name.common,
    capital[0],
    continents[0],
    (population / 1000000).toFixed(2),
    Object.values(languages).toString().split(",").join(","),
    timezones.toString().split(",").join(","),
  ];
  localStorage.setItem("countryData", JSON.stringify(countryArray));
}

// Display error message
function displayErrorMessage(message) {
  const result = document.querySelector("#result");
  result.innerHTML = `<h3 class="error">${message}</h3>`;
  setTimeout(() => {
    result.innerHTML = "";
  }, 3000);
}

// Arrow to top of page
const arrow = document.querySelector("#home-arrow");
const quarterPageHeight = document.documentElement.scrollHeight * 0.25;
window.addEventListener("scroll", () => {
  arrow.style.display = window.scrollY >= quarterPageHeight ? "block" : "none";
});
