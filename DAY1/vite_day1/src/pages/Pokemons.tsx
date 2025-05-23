import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import CustomMenu from "../components/CustomMenu";
import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../queries/pokemonQueries";
import { useEffect, useState } from "react";


function pokemons() {
    const [id, setId] = useState<number>(0);
    const {data, refetch} = useQuery({queryKey: ["pokemon_id"], queryFn: () => getPokemonById(id)});

    const onIdSelectorClick = () => {
        setId(id + 1);
        refetch();
    }

    useEffect(() => {
        refetch();
    }, [id]);

    return (
        <div>
            <Grid container direction="column">
                <CustomMenu/>
                <Typography variant="h3" color="primary">Welcome to the pokemon page !</Typography>
                <Typography>Pokemon number: {id}</Typography>
                <Button variant="contained" onClick={onIdSelectorClick} sx={{maxWidth: 150}}>Another !</Button>

                {data && 
                <Card sx={{height: 400, width: 300}}>
                    <CardMedia
                        sx={{height: 350}}
                        image={data?.sprites?.front_default}
                        title={data?.name}
                    />
                    <CardContent>
                        <Typography variant="h5">{data?.name}</Typography>
                    </CardContent>
                </Card>}
            </Grid>
        </div>
    )
}

export default pokemons;