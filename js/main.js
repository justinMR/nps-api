import { loadingSpinner } from "./loading.js";
import { cardTemplate, listPark } from "./getParks.js";
import { today, year} from "./getYear.js";

const app = document.getElementById('card-app');
const copyrightYearSelector = document.getElementById('copyright-year');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  // List Parks
  listPark().then(results => {
    loadingSpinner.classList.add('hide');
    for (let i in results.data) {
      app.insertAdjacentHTML('beforeend',
        cardTemplate(
          results.data[i].fullName,
          results.data[i].url,
          results.data[i].description,
          results.data[i].latitude,
          results.data[i].longitude,
          results.data[i].activities,
          results.data[i].images[0].url,
          results.data[i].images[0].altText,
        ));
    }
  });
  //Insert Year
  copyrightYearSelector.textContent = year;
});