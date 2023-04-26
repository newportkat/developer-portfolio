import React from "react"
import Down from "../../assets/svgFunctions/Down"
import Cat from "../../assets/svgFunctions/cat/Cat"
import CatMobile from "../../assets/svgFunctions/cat/CatMobile"

const Hero = () => {
    return (
        <div className="flex flex-col items-center sm:flex-row md:p-10 xl:gap-8 mb-8">
            <div className="flex flex-col gap-4 p-4 leading-relaxed text-gray-800 sm:w-1/2 xl:gap-10 lg:p-10">
                <h1 className="mb-4 text-center text-2xl text-gray-800 xl:text-4xl sm:text-left">
                    <span className="border-b-8 border-orange-500 pb-2 font-semibold tracking-wide">
                        Hi, I'm TomKat 👋
                    </span>
                </h1>
                <CatMobile className="sm:hidden" />
                <p className="tracking-wide xl:text-xl xl:leading-loose">
                    I'm a Melbourne-based{" "}
                    <span className="text-orange-500">software developer</span>{" "}
                    who thrives on challenges and loves creating innovative
                    solutions. My portfolio reflects not only my skillset, but
                    also my{" "}
                    <span className="text-orange-500">
                        passion for continuous learning,
                    </span>{" "}
                    personal growth, and making a meaningful impact in the world
                    of software development.
                </p>
                <Down className="h-6 w-6 animate-bounce self-center stroke-orange-500 xl:h-12 xl:w-12 cursor-pointer" />
            </div>
            <Cat className="hidden sm:block sm:w-1/2 lg:p-12"/>
        </div>
    )
}

export default Hero
