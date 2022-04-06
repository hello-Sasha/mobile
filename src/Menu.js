import React, {useEffect, useState} from "react";
import './Menu.css';
import { HikingIconComp } from "./HikingIcon";


export const Menu=({mode})=>{
    const[showMenu, setShowMenu]=useState(false);
    const[menu, setMenu]=useState(["Calendar","Reviews", "Store", "Contacts"]);
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 1220px)")
        .addEventListener('change', e => setMenu(["Calendar","Reviews", " ", "Store", "Contacts"]));
      }, []);
      useEffect(() => {
        window
        .matchMedia("(min-width: 1219px)")
        .addEventListener('change', e => setMenu(["Calendar","Reviews", "Store", "Contacts"]));
      }, []);
     
    const BurgerButton=(click)=>{
        return (
            <button className="burger" onClick={click}>
                <div className="burger-line-container">
                    <hr className="line"/>
                    <hr className="line"/>
                    <hr className="line"/>
                </div>
            </button>
        )
    };
    const CloseButton=(click)=>{
        return (
            <button className="burger" onClick={click}>
                <div className="burger-close-container">
                    +
                </div>
            </button>
        )
    };
    const Menu=
        menu.map((item)=>
            <li key={item} className="listItem">{item}</li>
        );

    return(
            <div className={showMenu? "menu menuContainerOpen":" menu menuContainerClosed" }>
                <div className="imageIcon">
                    <HikingIconComp/>
                </div>
                {showMenu?
                    CloseButton(()=>setShowMenu(false)):
                    BurgerButton(()=>setShowMenu(true))
                }
                {showMenu?
                    <div className="listMenu">
                        <ul className="ulNone">{Menu}</ul>
                    </div>:""}

                    <div className="visibleMenu listMenu">
                        <ul className="ulNone">{Menu}</ul>
                    </div>
            </div>
    )
}