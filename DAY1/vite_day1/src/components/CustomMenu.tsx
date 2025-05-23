import { Button } from "@mui/material";
import { useNavigate, type NavigateFunction } from "react-router-dom";

function menu() {
    // All reusable components go in a separate folder, create as Much 
    // reusable components as needed, factorization is key to better code

    // useNavigate is a great tool to go to other pages in react-router-dom
    const navigate: NavigateFunction = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate("/")}>
                Home
            </Button>
            <Button onClick={() => navigate("pokemons")}>
                Pokemon
            </Button>
        </div>
    )
}

export default menu;