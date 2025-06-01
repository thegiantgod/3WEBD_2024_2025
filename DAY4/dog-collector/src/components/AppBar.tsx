import { useTranslation } from "react-i18next";
import "./appBar.css";
import { useNavigate } from "react-router-dom";

function AppBar() {

    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
    <div className="app_bar">
        <div className="menu_buttons">
            <button onClick={() => navigate("/")}>{t("home")}</button>
            <button onClick={() => navigate("/breeds")}>{t("breeds")}</button>
        </div>
        <h2>Dog Collector</h2>
        <select
            id="language-select"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
        >
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    </div>
    );
}


export default AppBar;