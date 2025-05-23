import { useQuery } from "@tanstack/react-query";
import { getAllObjectIDs } from "../queries/paintings";
import { useEffect } from "react";

function Met() {

    // useQuery is your greatest ally to fetch data, use its possibilities
    // especially things like isFetching, so you can switch display when reloading data
    const {data, isFetching, refetch} = useQuery({queryKey: ["met"], queryFn: getAllObjectIDs});

    useEffect(() => {
        console.log(data);
    }, [data])
    return(
    <section>
        {!isFetching && 
            <ul>
                {data?.objectIDs && data?.objectIDs.map((id) => <li>{id}</li>)}
            </ul>
        }
        {isFetching && <h1>Loading !</h1>}
        <button onClick={refetch}>Refetch</button>
    </section>
    );
}

export default Met;