/* eslint-disable */
const keyword = document.querySelector("#searchGif"); //take data from keyword
const browsegifs = document.querySelector("#browsegifs");
const switchGif = document.querySelector("#togglegifs");
const imgGifPoll = document.querySelector("div.imgGifPoll.col");
let id = 0;

async function getGifs() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=tqKU3CtASdjZtuFB8YiZxSR5wK3z5m9i&q=${keyword.value}&limit=12`
  );
  const data = await res.json();
  console.log(data);
  const gif = [...data.data]; //inside
  console.log(gif);
  browsegifs.innerHTML = gif.map(
    (gif) => `
  <img src="${gif.images.fixed_height_small_still.url}"
    data-original="${gif.images.original.url}"
    data-small="${gif.images.fixed_height_small.url}"
    data-still="${gif.images.fixed_height_small_still.url}"
  >`
  );
}

function toggleGifs(e) {
  const allImgs = browsegifs.querySelectorAll("img");

  if (!switchGif.checked) {
    allImgs.forEach((img) => (img.src = img.dataset.still));
  } else {
    allImgs.forEach((img) => (img.src = img.dataset.small));
  }
}

function selectGif(e) {
  const url = e.target.dataset.original;
  const elem = document.querySelector("#modalgifs");
  const instance = M.Modal.getInstance(elem);
  instance.close();
  imgGifPoll.innerHTML = `<div class="card-image col s4 offset-s4"><img src="${url}"></div>`;
}

keyword.addEventListener("keyup", getGifs);
switchGif.addEventListener("change", toggleGifs);
browsegifs.addEventListener("click", selectGif);
