import React from "react"

const Navbar = () => {
    return (
        <nav className="sm:shadow-2xl">
            <ul className="flex items-center justify-between p-6 font-semibold text-gray-800 sm:justify-center sm:gap-28 sm:p-8">
                <a
                    className="mr-auto hidden text-2xl lg:block xl:ml-[5%]"
                    href=""
                >
                    <li>TOM KATILIUS</li>
                </a>
                <a className="group relative cursor-pointer" href="#about">
                    <li>
                        ABOUT
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-orange-500 transition-all group-hover:w-full"></span>
                    </li>
                </a>
                <a className="group relative cursor-pointer" href="projects">
                    <li>
                        PROJECTS
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-orange-500 transition-all group-hover:w-full"></span>
                    </li>
                </a>
                <a
                    href="/tom-katilius-cv.pdf"
                    target="_blank"
                    className="cursor-pointer rounded bg-orange-600 px-2 py-1 text-white shadow-lg hover:bg-orange-500 sm:px-6 xl:mr-[5%]"
                >
                    <li>MY CV</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar
