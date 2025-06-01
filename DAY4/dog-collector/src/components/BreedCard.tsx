import { useQuery } from "@tanstack/react-query";
import { getRandomImageOfBreed } from "../queries/dogs";
import "./BreedCard.css";

export interface BreedCardProps {
    breed: string
}

function BreedCard({breed}: BreedCardProps) {

    const { data } = useQuery({queryKey: [`breed_image_${breed}`], queryFn: () => getRandomImageOfBreed(breed)})

    return (
        <div className="breed_card">
            <img src={data?.message} className="breed_image" alt={breed}/>
            <h4>{breed}</h4>
        </div>
    );
}

export default BreedCard;