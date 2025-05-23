import { useQuery } from "@tanstack/react-query";
import { getAllObjectIDs } from "../queries/paintings";
import { useEffect } from "react";

function Met() {


    const {data, isError, isLoading, isFetching, refetch} = useQuery({queryKey: ["met"], queryFn: getAllObjectIDs});

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