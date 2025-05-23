import { POKEMON_URL, QUERY_URL } from "./constants";

// For JavaScript and useQuery (most used), make your fetch function return a promise 
// with response as JSON
export async function getPokemonById(id: number) {
    const response = await fetch(`${QUERY_URL}${POKEMON_URL}/${id}`);
    return response.json();
}