import React from "react";
import img from './../img/witcher.jpg'

export default function Livros(props){


    return(

        <ul>
            <li>{props.estoque[0]} </li>
            <img src={img} className="livros"/>
            <li>{props.estoque[1]}</li>
            <li>{props.estoque[2]}</li>
        </ul>
    )
}