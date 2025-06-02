
// For JavaScript and useQuery (most used), make your fetch function return a promise 

import { API_URL } from "../config/constants";

// with response as JSON
export async function getRandomDog() {
    const response = await fetch(`${API_URL}/breeds/image/random`);
    return response.json();
}

export async function getDogBreeds() {
    const response = await fetch(`${API_URL}/breeds/list/all`);
    return response.json();
}

export async function getRandomImageOfBreed(breed: string) {
    const response = await fetch(`${API_URL}/breed/${breed}/images/random`);
    return response.json();
}

export async function getMultipleRandomImageOfBreed(breed: string, numberOfImages: number) {
    const response = await fetch(`${API_URL}/breed/${breed}/images/random/${numberOfImages}`);
    return response.json();
}