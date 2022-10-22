
const apiKey = "16A4EHTL0Krje4QHZ"


function cocktailSearch(){
    const url = ""
    
    //Make our request
    $.ajax(url)
    .then((cocktail) => {
        console.log(cocktail)
        }
    )
}

cocktailSearch()


