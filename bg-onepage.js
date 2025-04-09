const pages = ["La Union", "Iloilo", "Davao", "Tagaytay", "Ilocos", "Boracay"];
const img = ["launion", "iloilo", "davao", "tagaytay", "ilocos", "boracay"];

let title = document.title;
const bgimg = document.querySelector('.initial');
const bgoverlay = document.querySelector('.bg-overlay');
const bgcontent = document.querySelector('.initial-content');

let imgurl = 'images/';

pages.forEach((element, index) => {
    if(element == title){
        let imgurlfin = imgurl.concat('onepage-',img[index],'.jpg');
        console.log(imgurlfin);
        bgimg.style.background = "url("+imgurlfin+") 50%";
        bgimg.style.height = "540px";
       
        bgoverlay.style.background = "rgba(2, 2, 2, 0.3) ";
        bgoverlay.style.height = "540px";
        bgcontent.style.color = "white";
        bgcontent.style = "text-align: center";
        bgcontent.style.right = "0";
        bgcontent.style.color = "whitesmoke";
        console.log(bgimg.style.background);
    }
});