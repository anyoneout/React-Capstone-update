import React from "react";
import { bfRunAiFetch } from "../controllers/bfRunAiFetch";

export function BfPage() {
    return (
        <>
            <div className="container" style={{ minHeight: "15vh" }}>
                <div className="row mt-5"></div>
                <div className="row mt-4 mb-5">
                    <div className="col-7">
                        <div
                            className="display-4 fw-bold"
                            style={{ color: "#fff78a" }}
                        >
                            Black Forest Labs.
                        </div>
                    </div>
                    <div className="col-3 justify-content-end d-flex align-items-end">
                        <div id="userNameHTML"></div>
                    </div>
                    <div className="col-2 d-flex align-items-end justify-content-end">
                        <div id="userEmailHTML" className="text-info"></div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ minHeight: "45vh" }}>
                <div className="row mt-5">
                    <div className="col-2">
                        <form>
                            <div className="input-group">
                                <label htmlFor="nameInput" className="form-label">
                                    Full Name:
                                    <input
                                        type="text"
                                        id="nameInput"
                                        className="form-control"
                                        placeholder="John Doe"
                                    />
                                </label>
                            </div>
                            <div className="input-group">
                                <label htmlFor="emailInput" className="form-label">
                                    Email:
                                    <input
                                        type="email"
                                        id="emailInput"
                                        className="form-control"
                                        placeholder="name@domain.com"
                                    />
                                </label>
                            </div>
                            <div className="input-group">
                                <label htmlFor="hfTokenInput">
                                    Huggingface Token:
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="hfTokenInput"
                                    />
                                </label>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className="dropdown" data-bs-theme="dark">
                                <label htmlFor="chosenRecipe">Recipes:</label>
                                <select
                                    className="form-select mb-2"
                                    name="chosenRecipe"
                                    id="chosenRecipe"
                                >
                                    <option value="Caprese Salad">
                                        Caprese Salad
                                    </option>
                                    <option value="Trout Grenobloise">
                                        Trout Grenobloise
                                    </option>
                                    <option value="Baked Alaska">
                                        Baked Alaska
                                    </option>
                                    <option value="Artichoke Gratin">
                                        Artichoke Gratin
                                    </option>
                                    <option value="Minestrone Soup">
                                        Minestrone Soup
                                    </option>
                                    <option value="Spaghetti Vongole">
                                        Spaghetti Vongole
                                    </option>
                                    <option value="Beef Stroganoff">
                                        Beef Stroganoff
                                    </option>
                                    <option value="Chicken Kiev">
                                        Chicken Kiev
                                    </option>
                                    <option value="Ceasar Salad">
                                        Caesar Salad
                                    </option>
                                    <option value="Osso Bucco">
                                        Osso Bucco
                                    </option>
                                    <option value="Salmon Teriyaki">
                                        Salmon Teriyaki
                                    </option>
                                    <option value="Pad Thai">Pad Thai</option>
                                    <option value="Eggs Benedict">
                                        Eggs Benedict
                                    </option>
                                    <option value="Lasagna">Lasagna</option>
                                    <option value="Ice Cream Sundae">
                                        Ice Cream Sundae
                                    </option>
                                    <option value="Pizza Margherita">
                                        Pizza Margherita
                                    </option>
                                </select>
                                <button
                                    type="button"
                                    id="fetchButton"
                                    onClick={bfRunAiFetch}
                                    className="btn btn-sm btn-outline-info mt-2"
                                >
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <div
                            className="spinner-border text-info"
                            role="status"
                            style={{ visibility: "hidden" }}
                            id="spinnerOne"
                        >
                            <span className="visually-hidden"></span>
                        </div>
                        <img
                            id="recipeAI"
                            className="rounded-circle"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                        <i
                            className="bi bi-arrow-right"
                            id="secondArrowHTML"
                            style={{
                                fontSize: "3rem",
                                color: "#f1ffb0",
                                visibility: "hidden",
                            }}
                        ></i>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <div
                            className="spinner-border text-info"
                            role="status"
                            style={{ visibility: "hidden" }}
                            id="spinnerTwo"
                        >
                            <span className="visually-hidden"></span>
                        </div>
                        <img id="ingredientsAI" style={{ maxWidth: "100%" }} />
                    </div>
                </div>
            </div>
            <div className="container" style={{ minHeight: "25vh" }}>
                <div className="row" style={{ minHeight: "5vh" }}></div>
                <div className="row" style={{ minHeight: "20vh" }}>
                    <div className="col-3 align-items-start d-flex">
                        <img
                            src="img/bFFLogo.jpg"
                            id="blackForestImage"
                            className="ps-2"
                            style={{ width: "100px" }}
                            alt=""
                        />
                    </div>
                    <div className="col-4 d-flex align-items-start justify-content-center">
                        <p
                            id="recipeName"
                            className="display-6"
                            style={{ color: "#f1ffb0" }}
                        ></p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 d-flex align-items-start justify-content-start">
                        <div
                            id="recipeIngredients"
                            className="ms-5"
                            style={{ color: "#f1ffb0", width: "75%" }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}
