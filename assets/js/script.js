let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');
searchBtn.addEventListener("click", () =>{
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response)=> response.json())
    .then((data)=>{
      
      let flag = $("#flags");
      let capital = $("#search-capital");
      let region = $("#search-region");
      let population = $("#search-population");
      let language = $("#search-language");
      let timeZone = ("#search-zone");

      function handleFormSubmit(event) {
        // Prevent the default behavior
        event.preventDefault();

        // console.log('First Name:', firstNameEl.val());
        // console.log('Last Name:', lastNameEl.val());
        // console.log('Email:', emailEl.val());
        // console.log('GitHub:', githubEl.val());
      
        // Select all checked options
        var checkedEl = $('input:checked');
        var selected = [];
      
        // Loop through checked options to store in array
        $.each(checkedEl, function () {
          selected.push($(this).val());
        });
        
      }
      // formEl.on('submit', handleFormSubmit);
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(Object.values(data[0].languages).toString().split(",").join(","));
        // result.innerHTML = `
        // <img src ="${data[0].flags.svg}" class="flag-img">
        // <h2>${data[0].name.common}</h2>
        // <div class="wrapper">
        // <div class="data-wrapper">
        //   <h4>Capital:</h4>
        //   <span>${data[0].capital[0]}</span>
        // </div>
        // </div>
        // <div class="wrapper">
        // <div class="data-wrapper">
        //   <h4>Continent:</h4>
        //   <span>${data[0].continents[0]}</span>
        // </div>
        // </div>
        // <div class="wrapper">
        // <div class="data-wrapper">
        //   <h4>Population:</h4>
        //   <span>${data[0].population}</span>
        // </div>
        // </div>
        // <div class="wrapper">
        // <div class="data-wrapper">
        //   <h4>Currency:</h4>
        //   <span>${data[0].currencies[Object.keys(data[0].currencies)].name}- ${Object.keys(data[0].currencies)[0]}</span>
        // </div>
        // </div>
        // <div class="wrapper">
        // <div class="data-wrapper">
        //   <h4>Common Language:</h4>
        //   <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
        // </div>
        // </div>
        // `
    }).catch(()=>{
        if(countryName.length==0){
            result.innerHTML = `<h3>The input field cannot be empty </h3>`
        }else {
            result.innerHTML=`<h3>Please enter a valid country name.</h3>`;
        }
    })
  
})

// Sets arrow to display which takes user back to top of page when clicked
const arrow = document.querySelector('#home-arrow');
const pageHeight = document.documentElement.scrollHeight;
const quarterPageHeight = pageHeight * 0.25;

window.addEventListener('scroll', () => {
  if (window.scrollY >= quarterPageHeight) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});




