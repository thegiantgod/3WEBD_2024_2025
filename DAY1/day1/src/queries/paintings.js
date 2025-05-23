import { QUERY_URL } from "./constants";

export async function getAllObjectIDs() {
    const response =  (await fetch(`${QUERY_URL}/objects?departmentIds=1`));
    if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Must return a promise
}