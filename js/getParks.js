//I'm well aware this is not the most ideal thing to do 😅
//but I think, for this circumstance, it's harmless
let apiKey = 'jgb2UDeVPhfwxSIgfh5rn9tT0sQQm542GbGD0XGz';
let apiURL = 'https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12&api_key=';

export const cardTemplate = (fullName, url, description, latitude, longitude, activities, imageURL, imgAltText) => {
    return `<div class="card animate__animated animate__fadeIn">
            <img src="${imageURL}" loading="lazy" alt="${imgAltText}" height="200" />
            <div class="card-body animate__animated animate__fadeIn animate__slower">
              <h2>${fullName}</h2>
              <p>${description}</p>
              <span> ${parseFloat(latitude).toFixed(3)} ${Math.sign(latitude) == '1' ? `°N` : `°S`}</span>
              <span> ${parseFloat(longitude).toFixed(3)} ${Math.sign(longitude) == '1' ? `°E` : `°W`}</span>
              <p><strong>Activities</strong></p>
              <ul>
                <li>${activities[0].name}</li>
                <li>${activities[1].name}</li>
                <li>${!activities[2] ? '' : `<li>${activities[2].name}</li>`}</li>
              </ul>
            </div>
            <div class="card-footer">
              <a class="hvr-underline-from-center text-decoration-none" href="${url}" target="_blank">Check it out! <i class="bi bi-arrow-right-circle-fill"></i></a>
            </div>
          </div>`;
}
export async function listPark() {
    const response = await fetch(`${apiURL}${apiKey}`);
    const results = await response.json();
    return results;
}