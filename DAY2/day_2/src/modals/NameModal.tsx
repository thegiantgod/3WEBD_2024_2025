import { createPortal } from "react-dom";
import "./nameModal.css";
import { useEffect, useRef, useState } from "react";

interface NameModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  saveName: (name: string) => void
}

function NameModal({isOpen, onClose, name, saveName}: NameModalProps) {
    const portalTarget = document.getElementById("name_modal");
    if (!isOpen || !portalTarget) return null;

    const [inputName, setInputName] = useState<string>(name || "");
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        nameInputRef.current?.focus()
        const data = {
            text: nameInputRef.current?.value,
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