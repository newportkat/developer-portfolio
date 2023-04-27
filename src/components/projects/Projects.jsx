import React from "react"

const Projects = () => {
    return (
        <div
            className="flex flex-col gap-10 bg-gradient-to-b from-gray-300 to-gray-100 p-4 py-12 text-gray-800 sm:px-10 md:px-24"
            id="projects"
        >
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-5">
                    <h2 className="mb-2 text-center">
                        <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl font-semibold tracking-wide">
                            PROJECTS
                        </span>
                    </h2>
                    <p>
                        Here is a selection of my recent projects, where I've
                        applied my ever-growing skillset to create practical and
                        engaging solutions.
                    </p>
                </div>
                <div>
                    <div>
                        <h3 className="text-lg font-bold underline">
                            TWEETOCRACY
                        </h3>
                        <img src="" alt="" />
                        <div>
                            <a href="">GITHUB REPO</a>
                            <a href="">LIVE DEMO</a>
                        </div>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
