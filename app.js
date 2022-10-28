
//Define variables needed throughout
const apiKey = "c6a2739983msha6bd6665781d45dp1a5b00jsnae6fd9ea4b95"

const baseURL = "https://the-cocktail-db.p.rapidapi.com/random.php?"

$p1 = $("#cocktail")
$p2 = $("#image")
$p3 = $("#ing")
$p4 = $("#prep")

//---------------------------------------------------------------------//

//Function to get data from API
function randomDrink(){
    //Make my request
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

//---------------------------------------------------------------------//

//Define strings to eventually check for null values
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

    //---------------------------------------------------------------------//

    //Append all data to screen and just the word ingredients
    $p1.text(`Name: ${drinkData.drinks[0].strDrink} (${drinkData.drinks[0].strAlcoholic})`)
    $p2.html(`<img src="${drinkData.drinks[0].strDrinkThumb}">`)
    $p3.text(`Ingredients: `)
    $p4.text(`Preparation: ${drinkData.drinks[0].strInstructions}`)


    //Making a string with the measurements and ingredients 
    for(let i = 0; i < drinkIngs.length; i++){
        let ingIndex = drinkIngs[i]
        let measIndex = drinkMeasure[i]

        if (measIndex && ingIndex) {
            $p3.append(`${measIndex} ${ingIndex}, `)
        } else {
            $p3.append(`${ingIndex}, `)//Print out the ingredient only if measurement is undefined 
        }
       
    }
    //Remove the , and space after the last ingredient
    $p3.text($p3.text().slice(0, -2))

}

//Put a click event on button to populate DOM
$("button").on("click", (event) => {
    // prevent the refresh
    event.preventDefault()

    //Update the screen
    randomDrink()
})

//---------------------------------------------------------------------//

//Add carasoul
const images = [
    "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg", "https://www.thecocktaildb.com/images/media/drink/wvtwpp1478963454.jpg", "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg", "https://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg", "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg", "https://www.thecocktaildb.com/images/media/drink/hc9b1a1521853096.jpg", "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg", "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg", "https://www.thecocktaildb.com/images/media/drink/stwiva1619704025.jpg"
]

let index = 0

function swapPhoto(){
    $img1 = $("#carousel")
    index += 1 
    if (index >= images.length){
        index = 0
    }
    
    $img1.attr("src", images[index])
}

$("#carousel").hover(swapPhoto)


// $("#carousel").carousel({
//     interval: 5000
//   });
