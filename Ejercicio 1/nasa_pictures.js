import {fetchAPOD} from "./modules/nasa_pictures_module.js";

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(e) {

    document.addEventListener("submit", onSubmit);

}

function onSubmit(e) {

    e.preventDefault();
    fetchAPOD();
    
}
