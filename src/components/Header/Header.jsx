import React from "react";
import Button from "../Button/Button";
import './Header.css'
import {useTg} from "../../hooks/useTg";

const Header = () => {
    const {onClose, user} = useTg()
    return(
        <div className="Header">
            <Button onClick={onClose}>Закритть</Button>
            <span className={"username"}>{user?.username}</span>
        </div>
    )
}
export default Header;