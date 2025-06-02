import { useQuery } from "@tanstack/react-query";
import AppBar from "../components/AppBar";
import { getDogBreeds } from "../queries/dogs";
import "./Breeds.css";
import BreedCard from "../components/BreedCard";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { useTranslation } from "react-i18next";

function Breeds() {

    const {data} = useQuery({queryKey: ["dog_breeds"], queryFn: getDogBreeds});
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { t } = useTranslation();
    const breedsPerPage = 15;

    const breeds = data ? Object.keys(data.message) : [];
    const totalPages = Math.ceil(breeds.length / breedsPerPage);
    const startIndex = (currentPage - 1) * breedsPerPage;
    const currentBreeds = breeds.slice(startIndex, startIndex + breedsPerPage);
    const goToPreviousPage = () => setCurrentPage(currentPage - 1);
    const goToNextPage = () => setCurrentPage(currentPage + 1);

    return (
        <>
            <AppBar/>
            <h3>{t("breeds_title")}</h3>
            <div className="grid_container">
                {currentBreeds.map((breed) => (
                    <BreedCard key={breed} breed={breed} />
                ))}
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
            />
        </>
    );
}

export default Breeds;