import React from "react"
import Down from "../../assets/svgFunctions/Down"

const About = () => {
    return (
        <div
            className="flex min-h-screen flex-col justify-center gap-10 bg-gray-900 p-4 py-12 text-gray-200 sm:px-10 md:gap-20 md:px-24"
            id="about"
        >
            <div className="flex flex-col items-center gap-8">
                <h2>
                    <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl font-semibold tracking-wide">
                        ABOUT
                    </span>
                </h2>
                <p>
                    As a self-taught developer, I have cultivated a strong
                    foundation in problem-solving and a keen interest in
                    expanding my knowledge.{" "}
                    <span className="text-orange-500">Working with React,</span>{" "}
                    I have gained valuable hands-on experience building projects
                    using this versatile framework.
                </p>
                <p>
                    Prepared to launch my professional career in the tech
                    sector, I am actively seeking opportunities that will
                    facilitate my growth and enable me to{" "}
                    <span className="text-orange-500">
                        make meaningful contributions
                    </span>{" "}
                    to the field of software development.
                </p>
                <p>
                    Equipped with a solid foundation in various technologies,
                    I'm enthusiastic about{" "}
                    <span className="text-orange-500">
                        embracing novel challenges
                    </span>{" "}
                    and staying ahead in the ever-changing landscape of software
                    development.
                </p>
            </div>
            <div className="flex flex-col gap-4 md:items-center">
                <h3 className="font-semibold">
                    Technologies I Love Working With:
                </h3>
                <div className="flex gap-8">
                    <ul>
                        <li>- JavaScript</li>
                        <li>- TypeScript</li>
                        <li>- React</li>
                        <li>- HTML</li>
                        <li>- CSS</li>
                        <li>- Tailwind</li>
                    </ul>
                    <ul>
                        <li>- Sass</li>
                        <li>- Node.js</li>
                        <li>- Git</li>
                        <li>- Figma</li>
                        <li>- Worpress</li>
                        <li>- Ubuntu</li>
                    </ul>
                </div>
            </div>
            <a href="#projects" className="self-center">
                <Down className="h-6 w-6 animate-bounce cursor-pointer stroke-orange-500 xl:h-12 xl:w-12" />
            </a>
        </div>
    )
}

export default About
