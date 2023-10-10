let btn=document.querySelector("#btn");

function getWeather(){
    let city=document.getElementById("city").value;
    fetch("https://goweather.herokuapp.com/weather/"+city)
    .then((response) => response.json())
    .then((data) => {
        let temp=parseFloat(data['temperature']);
        let clo_img=document.getElementById("clothes_image");

        document.getElementById("temperature").innerHTML=temp+"도 입니다.";

        if(temp<20){
            clo_img.src="shirt.png";
        }
        else{
            clo_img.src="halfsleeve.png";
        }
    });
}

btn.addEventListener('click',getWeather);