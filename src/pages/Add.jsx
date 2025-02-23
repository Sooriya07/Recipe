import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
const bgstyle={
  backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/table1.webp')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width:"100%",
  height: "100vh",
};


const Add = () => {
  const [dishname, setDishname] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const [estimatedtime, setEstimatedTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();

      const newRecipe = { dishname, ingredients, instructions, image, estimatedtime };

      // Get existing recipes from localStorage
      const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const updatedRecipes = [...existingRecipes, newRecipe];

      // Save updated list to localStorage
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

      // Navigate to MyRecipe page
      navigate('/home');
  };


  return (
    <div class="adding" style={bgstyle}>
      <div class="container-fluid d-flex justify-content-center align-items-centre ">
        <div class="recipe-cart justify-content-center">
            <div class="col">
                <div class="card shadow-lg">
                    <div class="card-header text-center bg-dark text-white">
                        <h4>Your Recipe</h4>
                    </div>
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                           
                            <div class="mb-3">
                                <label class="form-label">Dish Name</label>
                                <input type="text" class="form-control" placeholder="Enter dish name" required value={dishname} onChange={(e)=>setDishname(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ingredients</label>
                                <textarea class="form-control" rows="1" placeholder="Add Ingredients" required value={ingredients} onChange={(e)=>setIngredients(e.target.value)}></textarea>
                            </div>
                       
                            <div class="mb-3">
                                <label class="form-label">Instructions</label>
                                <textarea class="form-control" rows="2" placeholder="Steps to make your Tales Tasty" required value={instructions} onChange={(e)=>setInstructions(e.target.value)} ></textarea>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Upload Dish Photo</label>
                                <input type="file" class="form-control" accept="image/*" required onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Estimated Time (minutes)</label>
                                <input type="number" class="form-control" placeholder="Enter time in minutes" required value={estimatedtime} onChange={(e)=>setEstimatedTime(e.target.value)}/>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-dark">Add Recipe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Add
