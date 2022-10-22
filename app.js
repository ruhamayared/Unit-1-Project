
const apiKey = "tHKB9YHAkwQvtyyI3JVvIgtt"


function cocktailSearch(){
    const url = `http://api-cocktails.herokuapp.com/api/v1/cocktails${apiKey}`
    
    //Make our request
    $.ajax(url)
    .then((cocktail) => {
        console.log(cocktail)
        }
    )
}

cocktailSearch()


