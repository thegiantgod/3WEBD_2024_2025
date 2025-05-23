import { Button } from "@mui/material";
import { useNavigate, type NavigateFunction } from "react-router-dom";

function menu() {
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