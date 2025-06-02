import { useQuery } from "@tanstack/react-query";
import { getRandomImageOfBreed } from "../queries/dogs";
import "./BreedCard.css";
import BreedModal from "../modals/BreedModal";
import { useState } from "react";

export interface BreedCardProps {
    breed: string
}

function BreedCard({breed}: BreedCardProps) {

    const { data } = useQuery({queryKey: [`breed_image_${breed}`], queryFn: () => getRandomImageOfBreed(breed)});
    const [isBreedModalOpen, setIsBreedModalOpen] = useState<boolean>(false);
    
    const closeBreedModal = () => setIsBreedModalOpen(false);

    return (
        <>
            <div className="breed_card" onClick={() => setIsBreedModalOpen(true)}>
                <img src={data?.message} className="breed_image" alt={breed}/>
                <h4>{breed}</h4>
            </div>
            <BreedModal isOpen={isBreedModalOpen} onClose={closeBreedModal} breed={breed}/>
        </>
    );
}

export default BreedCard;