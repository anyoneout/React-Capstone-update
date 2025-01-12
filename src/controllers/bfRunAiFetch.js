import { bfSaveUser } from "../modules/bfSaveUser";
import { bfRecipeImage } from "../modules/bfRecipeImage";
import { bfIngredientsList } from "../modules/bfIngredientsList";
import { bfIngredientsImage } from "../modules/bfIngredientsImage";


function getDomElements() {
  return {
    recipeChoice: document.getElementById("chosenRecipe"),
    recipeIngredientsHTML: document.getElementById("recipeIngredients"),
    recipeNameHTML: document.getElementById("recipeName"),
    ingredientsImgHTML: document.getElementById("ingredientsAI"),
    recipeImgHTML: document.getElementById("recipeAI"),
    secondArrow: document.getElementById("secondArrowHTML"),
    spinnerOneHTML: document.getElementById("spinnerOne"),
    spinnerTwoHTML: document.getElementById("spinnerTwo")
  };
}

function iconVisibility(element, isVisible) {
  element.style.visibility = isVisible ? "visible" : "hidden";
}

async function updateRecipeImage(recipeChoice, recipeImgHTML, recipeNameHTML, spinnerOneHTML, spinnerTwoHTML, secondArrowHTML, hfUserToken) {
  const dataRecipeImage = await bfRecipeImage(recipeChoice, hfUserToken);
  recipeImgHTML.src = dataRecipeImage;
  recipeNameHTML.innerHTML = recipeChoice.value;
  recipeImgHTML.classList.add("borderImage");
  iconVisibility(secondArrowHTML, true);
  iconVisibility(spinnerOneHTML, false);
  iconVisibility(spinnerTwoHTML, true);
}

async function updateIngredients(ingredientsFetched, recipeIngredientsHTML, ingredientsImgHTML, spinnerTwoHTML, hfUserToken) {
  recipeIngredientsHTML.innerHTML = ingredientsFetched;

  const dataIngredientsImage = await bfIngredientsImage(ingredientsFetched, hfUserToken);

  iconVisibility(spinnerTwoHTML, false);
  ingredientsImgHTML.src = dataIngredientsImage;
  ingredientsImgHTML.classList.add("borderImage");
}

export async function bfRunAiFetch() {
  const hfUserToken = localStorage.getItem("hfToken");

  const elements = getDomElements();
  const { recipeChoice, recipeIngredientsHTML, recipeNameHTML, ingredientsImgHTML, recipeImgHTML, secondArrow, spinnerOneHTML, spinnerTwoHTML } = elements;

  bfSaveUser();

  iconVisibility(spinnerOneHTML, true);

  await updateRecipeImage(recipeChoice, recipeImgHTML, recipeNameHTML, spinnerOneHTML, spinnerTwoHTML, secondArrow, hfUserToken);

  const ingredientsFetched = await bfIngredientsList(recipeChoice, hfUserToken);

  await updateIngredients(ingredientsFetched, recipeIngredientsHTML, ingredientsImgHTML, spinnerTwoHTML, hfUserToken);
}