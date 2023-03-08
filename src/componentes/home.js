import React from "react";

export default function Home(props){


    return(
        <header className='titulo'>
            <h1>{props.h1}</h1>
            <p>{props.subt}</p>
        </header>
    )
}