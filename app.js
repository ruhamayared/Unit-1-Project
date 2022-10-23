
const apiKey = "c6a2739983msha6bd6665781d45dp1a5b00jsnae6fd9ea4b95"


const baseURL = "https://the-cocktail-db.p.rapidapi.com/random.php?"

$p1 = $("#cocktail")
$p2 = $("#image")
$p3 = $("#alcoholic")
$p4 = $("#ing")
$p5 = $("#prep")



function randomDrink(){
    //Make our request
    $.ajax({
        url: `${baseURL}`,
        headers: {"X-RapidAPI-Key": `${apiKey}`}
    })

    .then((data) => {
        console.log(data)
        drinkData = data
        render()
        },
        (error) => {
            console.log("bad request", error)
        }
    )
}
//randomDrink()

function render() {
    $p1.text(`Name: ${drinkData.drinks[0].strDrink} (${drinkData.drinks[0].strAlcoholic})`)
    $p2.html(`<img src="${drinkData.drinks[0].strDrinkThumb}">`)
    
    $p4.text(`Ingredients: ${drinkData.drinks[0].strMeasure1} ${drinkData.drinks[0].strIngredient1}, ${drinkData.drinks[0].strMeasure2} ${drinkData.drinks[0].strIngredient2}, ${drinkData.drinks[0].strMeasure3} ${drinkData.drinks[0].strIngredient3}, ${drinkData.drinks[0].strMeasure4} ${drinkData.drinks[0].strIngredient4}, ${drinkData.drinks[0].strMeasure5} ${drinkData.drinks[0].strIngredient5}`)
    $p5.text(`Preparation: ${drinkData.drinks[0].strInstructions}`)
}

$("button").on("click", (event) => {
    // prevent the refresh
    event.preventDefault()

    //Update the screen
    randomDrink()
})
