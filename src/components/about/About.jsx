import React from "react"

const About = () => {
    return (
        <div className="bg-gray-900 p-4 text-gray-200 flex flex-col gap-10 py-12">
            <div className="flex flex-col items-center gap-8">
                <h2>
                    <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl font-semibold tracking-wide">
                        ABOUT
                    </span>
                </h2>
                <p>
                    I am a self-taught developer with a passion for
                    problem-solving and a love of learning. I have gained
                    experience working with React and have enjoyed building
                    projects using this framework.
                </p>
                <p>
                    I am eager to find a career opportunity where I can put my
                    skills to use, continue my professional development and make a
                    meaningful impact in the field of software development.
                </p>
                <p>
                    My primary focus is on roles that offer opportunities for
                    learning and advancement. I am confident in my ability to
                    tackle new challenges and quickly adapt to new technologies.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold">I Love Working With:</h3>
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
        </div>
    )
}

export default About
