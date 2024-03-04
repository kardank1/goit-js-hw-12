import axios from "axios";

const KEY = "42562534-6abe2af4317b1372b4a8ab981";
axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getImages(request, page){
  let truthRequest = request;  
  if(request.includes(" ")){
    truthRequest = request.split(" ").join("+");
  }
  return await axios.get("/?key=42562534-6abe2af4317b1372b4a8ab981&q="+truthRequest+"&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page="+page)
}