import { POKEMON_URL, QUERY_URL } from "./constants";


export async function getPokemonById(id: number) {
    const response = await fetch(`${QUERY_URL}${POKEMON_URL}/${id}`);
    return response.json();
}