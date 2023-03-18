import React, { useContext, useEffect } from 'react'
import { GoblaData } from '../../../App'
import './home.css'

function Home() {
    const { linkClicked } = useContext(GoblaData)
    useEffect(() => {
        console.log("Welcome to Home");
        linkClicked("home")
    }, [])
    return (
        <div className="home">
            <h1>Welcome to React</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus possimus sapiente aperiam quos, eveniet voluptatum amet vitae asperiores, ad nam dolorem illum sequi nihil cupiditate cumque debitis culpa aliquam alias eaque quisquam soluta. Vitae delectus fugiat aliquid eos. Qui animi blanditiis sit, fugit quibusdam impedit explicabo est adipisci repellendus odit?</p>
            <button className='em'>Explore More !!!</button>
        </div>
    )
}

export default Home