function fetchWeather(){
        var city=document.getElementById("temp").value
        console.log(city)
        var request=new XMLHttpRequest()
        var apikey='928eb87c7dc30fec09e7dc3b1177fa0f'
        var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=928eb87c7dc30fec09e7dc3b1177fa0f`

        request.open('GET',url,true);
        request.onload=function(){
                var result=JSON.parse(this.response)
                console.log(result)
        }
        request.send();


}