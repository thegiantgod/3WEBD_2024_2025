import { createPortal } from "react-dom";
import "./BreedModal.css";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getMultipleRandomImageOfBreed } from "../queries/dogs";

interface BreedModalProps { // Try to use interfaces so your Component will show what props are mandatory
  isOpen: boolean,
  onClose: () => void,
  breed: string,
}

const NUMBER_OF_IMAGES: number = 3;

function BreedModal({isOpen, onClose, breed}: BreedModalProps) {
    const { data } = useQuery({queryKey: [`multiple_breed_images_${breed}`], queryFn: () => getMultipleRandomImageOfBreed(breed, NUMBER_OF_IMAGES)});
    const { t } = useTranslation();

    // We try to send to the modal all the necessary functions so it can receive and apply any behavior
    const portalTarget = document.getElementById("breed_modal");
    // Make sure portal target exists in index.html and cover cases if it does not exist
    if (!isOpen || !portalTarget) return null;

    return createPortal (
        <div className="modal-overlay" onClick={onClose}>
            <div className="breed_modal" onClick={(e) => e.stopPropagation()}>
                <button className="close_button" onClick={onClose}>{t("close")}</button>
                <h3>{t("modal_title", {breed})}</h3>
                <div className="modal_images">
                    {data?.message.map((breedImage: string | undefined) => (
                        <img src={breedImage} className="breed_image" alt={breed}/>
                    ))}
                </div>
            </div>
        </div>,
        portalTarget
    );
}

export default BreedModal;