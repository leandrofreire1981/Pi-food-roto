import { Link } from "react-router-dom";
import Recipes from "./Recipes";

export default function Nav() {

    return (
        <>
            Recetario
            <Link to='/home'>
                <p>Home</p>
            </Link>
            <Link to='/recipes'>
                <p>Recetas</p>
            </Link>
            <Link to='/createrecipes'>
                <p>Crear Receta</p>
            </Link>
        </>
    )
    }