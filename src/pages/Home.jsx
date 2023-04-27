import React from "react"
import About from "../components/about/About"
import Hero from "../components/hero/Hero"
import Projects from "../components/projects/Projects"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
        </div>
    )
}

export default Home
