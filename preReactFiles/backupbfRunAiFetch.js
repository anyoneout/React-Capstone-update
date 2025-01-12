

// I made two different controllers types. This one modifies the HTML elements within the modules.
import { bfSaveUser } from "../modules/bfSaveUser.js";
import { bfRecipeImage } from "../modules/bfRecipeImage.js";
import { bfIngredientsList } from "../modules/bfIngredientsList.js";
import { bfIngredientsImage } from "../modules/bfIngredientsImage.js";


export let hfUserTokenJs = localStorage.getItem("hfToken");
export let recipeChoice = document.getElementById("chosenRecipe");
export let recipeIngredientsHTML = document.getElementById("recipeIngredients");
export let recipeNameHTML = document.getElementById("recipeName");
export let ingredientsImgHTML = document.getElementById("ingredientsAI");
export let recipeImgHTML = document.getElementById("recipeAI");
export let secondArrow = document.getElementById("secondArrowHTML");
export let spinnerOneHTML = document.getElementById("spinnerOne");
export let spinnerTwoHTML = document.getElementById("spinnerTwo");

window.bfRunAiFetch = bfRunAiFetch;

export async function bfRunAiFetch() {
  bfSaveUser();
  bfRecipeImage();
  let ingredients = await bfIngredientsList();
  bfIngredientsImage(ingredients);
};





