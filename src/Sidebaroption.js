import React from 'react'
import './Media/Css/Sidebar.css'
import Sidebar from './Sidebar'


function Sidebaroption(probs) {
    return (
        <div className={probs.active ? 'sidebaroption--active sidebaroptions' : 'sidebaroptions'} >
            <probs.icon />
            <h3>{probs.text}
            </h3>
        </div>



    )
}

export default Sidebaroption
