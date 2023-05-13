
let showDiv = document.getElementById('section3')
let myDiv = document.getElementById('mygames')
const loading = document.querySelector(".loading");
let dataList = []
let icon = document.getElementById('icon')
async function getGames(cat) {
    loading.classList.remove("d-none");

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f810223f17mshdbd150328e4dee7p186c0bjsn5bfa2d4ddded',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
    const data = await res.json()
    dataList = data.splice(0, 99)
    console.log(dataList)
    display()
}
getGames('shooter')
function display() {
    let temp = ''
    dataList.forEach((el) => {
        temp += `            
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 javababy mb-4 item"
        onclick="showDetails(${el.id})"
        >
        <div class=" g-4 cardGame">
        <div class="thumb">
        <img src=${el.thumbnail} class="w-100 rounded" alt="">
        
        <div class="d-flex justify-content-space-between text-white names mt-4 mb-2">
        <h5>${el.title}</h5>
        <h5 class="free">Free</h5>
        </div>
        <p class="text-white">${el.short_description}</p>
        <br>
        </div>
        <div class="d-flex justify-content-space-between text-white names my-1 mt-3">
        <h6 class="pull">${el.genre}</h6>
        <h6 class="pull">${el.platform}</h6>
        </div>
        </div>
        </div>
                `
    })
    myDiv.innerHTML = temp
}
let nav_links = document.querySelectorAll('.nav-link')
for (let i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener('click', function (e) {
        document.querySelector(".nav-item .active").classList.remove("active");;
        e.target.classList.add('active')
        scroll({
            top: 350,
            behavior: "smooth"
        })
        let cat = this.innerHTML.toLocaleLowerCase()
        getGames(cat)
    })
}


function showDetails(id) {
    location.href = `./details.html?id=${id}`;
}
new WOW().init();
