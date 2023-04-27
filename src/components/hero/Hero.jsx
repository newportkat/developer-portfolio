import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import React, { useLayoutEffect, useRef } from "react"
import Down from "../../assets/svgFunctions/Down"
import Cat from "../../assets/svgFunctions/cat/Cat"
import CatMobile from "../../assets/svgFunctions/cat/CatMobile"

gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {
    const hero = useRef()
    const catImage = useRef()
    const heroContent = useRef()

    useLayoutEffect(() => {
        let heroCtx = gsap.context(() => {
            gsap.fromTo(
                catImage.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            )
            gsap.fromTo(
                heroContent.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            )
        }, hero)

        return () => heroCtx.revert()
    }, [])

    return (
        <div
            className="mb-8 mt-2 flex flex-col items-center sm:flex-row sm:p-4 md:p-10 xl:gap-8"
            ref={hero}
        >
            <div
                className="flex flex-col gap-4 p-4 leading-relaxed text-gray-800 sm:w-1/2 lg:p-10 xl:gap-10"
                ref={heroContent}
            >
                <h1 className="mb-4 text-center text-xl text-gray-800 sm:text-left xl:text-4xl">
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
                <a href="#about" className="self-center">
                    <Down className="h-6 w-6 animate-bounce cursor-pointer stroke-orange-500 xl:h-12 xl:w-12" />
                </a>
            </div>
            <div className="hidden sm:block sm:w-1/2 lg:p-12" ref={catImage}>
                <Cat />
            </div>
        </div>
    )
}

export default Hero
