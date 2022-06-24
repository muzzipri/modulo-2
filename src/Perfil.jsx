import  React, { useState } from "react";
import  "./Perfil.css";
function  Perfil({ nome, idade}){
   
    return(
            < div className="card">
           
            <p className="cardTitle"> {nome}</p>
            <p className="cardSubtitle"> {idade}</p>
            
        </div>
    )
}
export default Perfil;