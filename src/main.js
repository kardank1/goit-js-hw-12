import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { addMarkup } from "./js/render-functions";

const galleryForm = document.querySelector(".gallery-form");
const search = document.querySelector(".gallery-search")
const galleryList = document.querySelector(".gallery")
const loader = document.querySelector('.loader')
const moreBtn = document.querySelector('.btn-more')
const btnLoader = document.querySelector('.btn-loader')
let images;
const option = {
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
  };
  const perPage = 15;
  let page = 1;
  let totalImage = 0;

let gallery = new SimpleLightbox('.gallery a', option);

galleryForm.addEventListener("submit", event => {
    event.preventDefault();
    page = 1;
    moreBtn.classList.add("is-hidden")
    if(search.value.trim() ===""){
        return;
    }
    galleryList.innerHTML = "";
    loader.classList.remove("is-hidden")
    images = getImages(search.value.trim(), page);
    console.log(images);
    images.then(data => {
        console.log(data)
        if(!data.data.total){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })
        }else{
            totalImage = data.data.totalHits;
            console.log(totalImage)
            galleryList.insertAdjacentHTML("beforeend", addMarkup(data.data.hits));
            gallery.refresh();
            moreBtn.classList.remove("is-hidden")
        }
    }).catch(error => {
        if(totalImage < (page) * perPage){
            iziToast.error({
                message: error,
                position: 'topRight',
            });
        }
        moreBtn.classList.add("is-hidden")
    }).finally(() => {
        loader.classList.add("is-hidden")
    })
})

moreBtn.addEventListener("click", () => {
    moreBtn.classList.add("is-hidden")
    btnLoader.classList.remove("is-hidden")
    page += 1;
    images = getImages(search.value.trim(), page);
    images
      .then(data => {
        galleryList.insertAdjacentHTML("beforeend", addMarkup(data.data.hits));
        window.scrollBy({
            top: galleryList.firstElementChild.getBoundingClientRect().height*2,
            left: 0,
            behavior: "smooth",
          });
        gallery.refresh();
    }).catch(error => {
        if(totalImage < (page) * perPage){
            iziToast.error({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }
    }).finally(() => {
        btnLoader.classList.add("is-hidden")
        if(totalImage < (page) * perPage){
            moreBtn.classList.add("is-hidden")
        }else{
            moreBtn.classList.remove("is-hidden")
        }
    })
})


