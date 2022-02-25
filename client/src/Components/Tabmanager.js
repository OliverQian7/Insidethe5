import React, {useState} from "react"
import Home from "./Tabs/Home"
import Menu from "./Tabs/Menu"
function Tabmanager() {
    const [activeTab, setActiveTab] = useState(<Home />);

    const handleHome=() => {
        setActiveTab(<Home/>)
    }
    const handleMenu=() => {
        setActiveTab(<Menu/>)
    }

    return ( <div>
        <header>
            <ul>
                <li><a href = "home" onClick = {handleHome}>Home</a></li>
                <li><a href = "menu" onClick = {handleMenu}>Menu</a></li>
            </ul>
        </header>
        <body>
            {activeTab}
        </body>
    </div>)
}

export default Tabmanager