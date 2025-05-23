import { createPortal } from "react-dom";
import "./nameModal.css";
import { useEffect, useRef, useState } from "react";

interface NameModalProps { // Try to use interfaces so your Component will show what props are mandatory
  isOpen: boolean;
  onClose: () => void;
  name: string;
  saveName: (name: string) => void
}

function NameModal({isOpen, onClose, name, saveName}: NameModalProps) {
    // We try to send to the modal all the necessary functions so it can receive and apply any behavior
    const portalTarget = document.getElementById("name_modal");
    // Make sure portal target exists in index.html and cover cases if it does not exist
    if (!isOpen || !portalTarget) return null;

    const [inputName, setInputName] = useState<string>(name || "");
    const nameInputRef = useRef<HTMLInputElement>(null); // Use it to handle associated ref

    useEffect(() => {
        nameInputRef.current?.focus() // You can use DOM Node methods
        const data = {
            text: nameInputRef.current?.value, // Showing what data you can get from a DOM Node
            height: nameInputRef.current?.getBoundingClientRect()?.height,
            width: nameInputRef.current?.getBoundingClientRect()?.width
        }
        console.log(data);
    }, [isOpen,
        nameInputRef.current?.value])

    return createPortal (
        <div className="modal-overlay" onClick={onClose}>
            <div className="name_modal" onClick={(e) => e.stopPropagation()}>
                <button className="close_button" onClick={onClose}>Close modal</button>
                <p>Type to setup your name</p>
                <div>
                    <input type="text" className="name_input" ref={nameInputRef} value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                    <button className="save_button" onClick={() => saveName(inputName)}>Save name</button>
                </div>
            </div>
        </div>,
        portalTarget
    );
}

export default NameModal;