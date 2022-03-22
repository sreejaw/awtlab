function movie(){

fetch(`https://imdb-api.com/en/API/Top250Movies/k_8uhgm16k`)
.then((response)=>{
        return response.json()
})

.then((data)=>{
        console.log(data)
})

.catch((err)=>{
        console.log(err)
});

}