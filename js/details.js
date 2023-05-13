const searchParams = location.search;
const params = new URLSearchParams(searchParams);
const id = params.get("id");

getDetails(id);

async function getDetails(id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2d5a5a5a9dmsh15179b3230e1354p1d665fjsn1fd6f358f12d',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }
  const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
  const data = await api.json();
  displayData(data);
};

function displayData(item) {
  let temp = `
    <div  class="container py-5  text-light" data-wow-duration="2s" data-wow-delay="5s" >
        <div class="details-header  d-flex justify-content-between   ">
          <h3>Details Game</h3>
          <div class="icon " id="close">
          <a href="./index.html" style="color:white;"><i class="fa-solid fa-xmark fa-2x d-inline-block" ></i></a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 mb-2 left ">
            <div class="img">
              <img src="${item.thumbnail}" class="w-100 mt-5" alt="">
            </div>
          </div>
          <div class="col-md-7 right text-center  ">
            <h4>Title: ${item.title}</h4>
            <p>Category: <span class="badge text-bg-danger p-2"> ${item.genre}</span></p>
            <p>Platform: <span class="badge text-bg-danger p-2"> ${item.platform}</span></p>
            <p>Status: <span class="badge text-bg-danger p-2"> ${item.status}</span> </p>
            <p class="small">${item.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${item.game_url}">Show Game</a>
          </div>
        </div>
      </div>
    `;
  document.getElementById("details").innerHTML = temp;
}