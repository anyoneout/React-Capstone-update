
// I made two different controllers types. This one modifies the HTML elements within this controller.
import { oaSaveUser } from "../modules/oaSaveUser.js";
import { oaIngredientsImage } from "../modules/oaIngredientsImage.js";
import { oaIngredientsList } from "../modules/oaIngredientsList.js";
import { oaRecipeImage } from "../modules/oaRecipeImage.js";

let oaUserToken = localStorage.getItem("oaiToken");
let recipeChoice = document.getElementById("chosenRecipe");
let recipeIngredientsHTML = document.getElementById("recipeIngredients");
let recipeNameHTML = document.getElementById("recipeName");
let ingredientsImgHTML = document.getElementById("ingredientsAI");
let recipeImgHTML = document.getElementById("recipeAI");
let secondArrow = document.getElementById("secondArrowHTML");
let spinnerOneHTML = document.getElementById("spinnerOne");
let spinnerTwoHTML = document.getElementById("spinnerTwo");

window.oaRunAiFetch = oaRunAiFetch;

export async function oaRunAiFetch() {

  oaSaveUser();

  spinnerOneHTML.style.visibility = "visible";

  let dataRecipeImage = await oaRecipeImage(recipeChoice, oaUserToken);
  recipeImgHTML.src = dataRecipeImage.data[0].url;
  recipeNameHTML.innerHTML = recipeChoice.value;

  recipeImgHTML.classList.add("borderImage");
  secondArrow.style.visibility = "visible";
  spinnerOneHTML.style.visibility = "hidden";
  spinnerTwoHTML.style.visibility = "visible";

  let ingredientsFetched = await oaIngredientsList(recipeChoice, oaUserToken);
  recipeIngredientsHTML.innerHTML = ingredientsFetched;

  let dataIngredientsImage = await oaIngredientsImage(ingredientsFetched, oaUserToken);
  spinnerTwoHTML.style.visibility = "hidden";
  ingredientsImgHTML.src = dataIngredientsImage.data[0].url;
  ingredientsImgHTML.classList.add("borderImage");
};


