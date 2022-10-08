import { GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_BY_DB, SET_RECIPES_BY_NAME } from "./const"
import image from '../img/plato-base.jpg'


export function getAllRecipes() {

   return function(dispatch) {
        //fetch(`http://localhost:5000/recipes`)
        fetch('http://localhost:3003')
            .then(r => r.json())
            .then(r => {
                console.log('lo que llega', r)   
                dispatch({
                    type: GET_ALL_RECIPES,
                    payload: r
                }) }
            ).catch(e => {
                console.log('Hubo error: ', e)
            })
    }   
}

/* export function getRecipesByName(name) {

    return function(dispatch) {
         //fetch(`http://localhost:5000/recipes`)
         fetch(`http://localhost:3003/${name}`)
             .then(r => r.json())
             .then(r => {
                 console.log('lo que llega', r)   
                 dispatch({
                     type: GET_RECIPES_BY_NAME,
                     payload: r.results
                 }) }
             ).catch(e => {
                 console.log('Hubo error: ', e)
             })
     }   
 } */

 export function setRecipeByName(array, dispatch){
    return dispatch({
        type: SET_RECIPES_BY_NAME,
        payload: [...array]
    })
 }

 export function getDiets(){

    return function(dispatch){
        fetch('http://localhost:5000/diets')
            .then(r => r.json())
            .then(r => {
                return dispatch({
                    type: GET_DIETS,
                    payload: r
                })
            })
    }
 }


export function postRecipe(recipe){
 fetch('http://localhost:5000/post', {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    alert('receta creada con exito')
    getRecipesFromDb()
}

export function getRecipesFromDb(){
    
    return function(dispatch){
        fetch('http://localhost:5000/recipedb')
                    .then(r => r.json())
                    .then(r => {
                        for (const iterator of r) {
                            iterator.image = image
                        }
                      //  console.log('recipe de DB: ', r[3].diets)
                    dispatch({
                        type: GET_RECIPE_BY_DB,
                        payload: r
                        })
                    })
                }

}
 





        