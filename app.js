
const apiKey = "c6a2739983msha6bd6665781d45dp1a5b00jsnae6fd9ea4b95"


const baseURL = "https://the-cocktail-db.p.rapidapi.com/random.php?"

function randomDrink(){
    
    //Make our request
    $.ajax({
        url: `${baseURL}`,
        headers: {"X-RapidAPI-Key": `${apiKey}`}
    })

    .then((drinkName) => {
        console.log(drinkName)
        }
    )
}

randomDrink()