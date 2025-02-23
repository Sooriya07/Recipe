import React, { useState, useEffect } from "react";

const bgstyle={
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/food1.webp')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:"100%",
    height: "100vh",
  };

const MyRec = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
        setRecipes(storedRecipes);
    }, []);

    
    const handleDelete = (id) => {
        const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(updatedRecipes);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes)); 
    };

    return (
        <div style={bgstyle}>
            <div className="recipe-container">
                {recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <div key={recipe.id} className="recipe-card">
                            <h3>{recipe.dishname}</h3>
                            <img src={recipe.image} alt={recipe.dishname}/>
                            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                            <p><strong>Estimated Time:</strong> {recipe.estimatedtime} mins</p>
                            <button onClick={() => handleDelete(recipe.id)} class="btn btn-outline-dark">Delete</button>
                        </div>
                    ))
                ) : (
                    <p class="no">No recipes added yet!</p>
                )}
            </div>
        </div>
    );
};

export default MyRec;
