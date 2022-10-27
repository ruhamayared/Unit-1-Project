
const apiKey = "c6a2739983msha6bd6665781d45dp1a5b00jsnae6fd9ea4b95"

const baseURL = "https://the-cocktail-db.p.rapidapi.com/random.php?"

$p1 = $("#cocktail")
$p2 = $("#image")
$p3 = $("#ing")
$p4 = $("#prep")


function randomDrink(){
    //Make our request
    $.ajax({
        url: `${baseURL}`,
        headers: {"X-RapidAPI-Key": `${apiKey}`}
    })

    //Render Data
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


const ing = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient11", "strIngredient12", "strIngredient13", "strIngredient14", "strIngredient15"]

const measure = ["strMeasure1", "strMeasure2", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15"]

function render() {
    let drinkIngs = []

    ing.forEach((drinkIng) => {
        if (drinkData.drinks[0][drinkIng] !== null){
            drinkIngs.push(drinkData.drinks[0][drinkIng])
        } 
    })

    let drinkMeasure = []

    measure.forEach((drinkMeas) => {
        if (drinkData.drinks[0][drinkMeas] !== null){
            drinkMeasure.push(drinkData.drinks[0][drinkMeas])
        } 
    })


    $p1.text(`Name: ${drinkData.drinks[0].strDrink} (${drinkData.drinks[0].strAlcoholic})`)
    $p2.html(`<img src="${drinkData.drinks[0].strDrinkThumb}">`)
    $p3.text(`Ingredients: `)
    $p4.text(`Preparation: ${drinkData.drinks[0].strInstructions}`)


    for(let i = 0; i < drinkIngs.length; i++){
        let ingIndex = drinkIngs[i]
        let measIndex = drinkMeasure[i]

        if (measIndex && ingIndex) {
            $p3.append(`${measIndex} ${ingIndex}, `)
        } else {
            $p3.append(`${ingIndex}, `)
        }
       
    }

    $p3.text($p3.text().slice(0, -2))

}



$("button").on("click", (event) => {
    // prevent the refresh
    event.preventDefault()

    //Update the screen
    randomDrink()
})

//Add carasoul?
//Style Name, Ingredients, etc. separately