import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { alphaOrder, getAllRecipes, getRecipesByName, getRecipesFromDb, reverseAlphaOrder, setRecipeByName } from "../actions"

import image from '../img/error.jpg'
import PostRecipes from "./PostRecipes"
import { useEffect } from "react"
import Page from "./Page"
import OrderRecipes from "./OrderRecipes"
import style from '../styles/Home.module.css'

export default function Home(props) {
    const RECIPE_PAGE = 9
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const [ render, setRender ] = useState(0)
    
    
  
 

  

    console.log('inicio')
   
    
    function alphaOrderRecipes(e){
        dispatch(alphaOrder(recipes))
      
        setCurrentPage(1)
        setRender(render + 1)
    }

    function reverseOrder(){
        dispatch(reverseAlphaOrder(recipes))
        setCurrentPage(1)
        setRender(render + 1)
    }
  
    const [ currentPage, setCurrentPage ] = useState(1)
    const lastRecipe = currentPage * RECIPE_PAGE
    const firstRecipe = lastRecipe - RECIPE_PAGE
    const renderRecipes = recipes.slice(firstRecipe, lastRecipe)
    console.log('asignacion')
    
    function refresh(ref){
        console.log('cambio de pagia')
        setCurrentPage(ref)
    }
        
    return (
        
            <main className={style.Home}>
            <div className={style.controls}>
            <button className={style.button} onClick={alphaOrderRecipes}>a-z</button>   
            <button className={style.button} onClick={reverseOrder}>z-a</button> 
                
            <h1>Recetas</h1>
                    
            {<Page refresh={refresh} currentPage={currentPage} length={recipes.length} />}
                </div>    
            <div className={style.conteiner}>

                {    
                    renderRecipes?.map((r, i) => (
                        <div key={i}> 
                             <PostRecipes id={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />    
                          </div>
              ))} 
              
              </div>
              </main>
        
    
    )



}
