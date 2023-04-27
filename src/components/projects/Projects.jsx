import React from "react"
import PalettePro from "../../assets/palettepro.png"
import Eye from "../../assets/svgFunctions/Eye"
import GitHub from "../../assets/svgFunctions/GitHub"
import TackleShop from "../../assets/tackleshop.png"
import Tweetocracy from "../../assets/tweetocracy.png"

const Projects = () => {
    return (
        <div
            className="flex flex-col gap-10 bg-gradient-to-b from-gray-200 to-gray-100 p-4 py-12 text-gray-800 sm:px-10 md:px-24"
            id="projects"
        >
            <div className="flex flex-col items-center gap-8 xl:gap-24">
                <div className="flex flex-col gap-5">
                    <h2 className="mb-2 text-center">
                        <span className="border-b-8 border-orange-500 pb-2 text-center text-2xl font-semibold tracking-wide">
                            PROJECTS
                        </span>
                    </h2>
                    <p className="lg:px-96">
                        Here is a selection of my recent projects, where I've
                        applied my ever-growing skillset to create practical and
                        engaging solutions.
                    </p>
                </div>
                <div className="flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:w-1/2 xl:gap-10">
                        <h3 className="text-center text-xl font-bold underline xl:text-3xl">
                            TWEETOCRACY
                        </h3>
                        <div className="group overflow-hidden rounded border-4 xl:hidden">
                            <a
                                href="https://www.tweetocracy.com.au/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Tweetocracy}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/newportkat/tweetocracy"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://www.tweetocracy.com.au/"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p>
                            Delve into the world of Australian politics with
                            Tweetocracy, a web application that offers insights
                            into the nation's political parties and Members of
                            Parliament by analyzing their tweets and presenting
                            their voting records.
                        </p>
                        <p>
                            Tweeetocracy is a{" "}
                            <span className="font-bold text-orange-500">
                                full-stack project
                            </span>{" "}
                            utilising the following technologies:
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-bold">- Frontend:</span>{" "}
                                React and Tailwind CSS
                            </li>
                            <li>
                                <span className="font-bold">- Backend:</span>{" "}
                                Node.js with Express Server
                            </li>
                            <li>
                                <span className="font-bold">- Deployment:</span>{" "}
                                AWS Amplify and Elastic Beanstalk
                            </li>
                            <li>
                                <span className="font-bold">- APIs:</span>{" "}
                                Twitter API and theyvoteforyou API
                            </li>
                        </ul>
                        <hr className="border-4 border-orange-500 text-orange-500 xl:hidden" />
                    </div>
                    <div className="hidden w-1/2 flex-col items-center gap-4 xl:flex">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://www.tweetocracy.com.au/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={Tweetocracy}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/newportkat/tweetocracy"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://www.tweetocracy.com.au/"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className="hidden w-full border-4 border-orange-500 xl:block" />
                <div className="flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:w-1/2 xl:gap-10">
                        <h3 className="text-center text-xl font-bold underline xl:text-3xl">
                            PALETTE PRO
                        </h3>
                        <div className="group overflow-hidden rounded border-4 xl:hidden">
                            <a
                                href="https://palettepro.digital/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={PalettePro}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/newportkat/color-scheme-generator"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://palettepro.digital/"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p>
                            Delve into the world of Australian politics with
                            Tweetocracy, a web application that offers insights
                            into the nation's political parties and Members of
                            Parliament by analyzing their tweets and presenting
                            their voting records.
                        </p>
                        <p>
                            Tweeetocracy is a{" "}
                            <span className="font-bold text-orange-500">
                                full-stack project
                            </span>{" "}
                            utilising the following technologies:
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-bold">- Frontend:</span>{" "}
                                React and Tailwind CSS
                            </li>
                            <li>
                                <span className="font-bold">- Backend:</span>{" "}
                                Node.js with Express Server
                            </li>
                            <li>
                                <span className="font-bold">- Deployment:</span>{" "}
                                AWS Amplify and Elastic Beanstalk
                            </li>
                            <li>
                                <span className="font-bold">- APIs:</span>{" "}
                                Twitter API and theyvoteforyou API
                            </li>
                        </ul>
                        <hr className="border-4 border-orange-500 text-orange-500 xl:hidden" />
                    </div>
                    <div className="hidden w-1/2 flex-col items-center gap-4 xl:flex">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="https://palettepro.digital/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={PalettePro}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/newportkat/color-scheme-generator"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="https://palettepro.digital/"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className="hidden w-full border-4 border-orange-500 xl:block" />
                <div className="mb-10 flex items-start justify-center gap-10">
                    <div className="flex flex-col gap-4 xl:w-1/2 xl:gap-10">
                        <h3 className="text-center text-xl font-bold underline xl:text-3xl">
                            TACKLE SHOP
                        </h3>
                        <div className="group overflow-hidden rounded border-4 xl:hidden">
                            <a
                                href="http://shop.tomkatilius.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={TackleShop}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/newportkat/e-commerce"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="http://shop.tomkatilius.com/"
                            rel="noreferrer"
                            target="_blank"
                            className="xl:hidden"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                        <p>
                            Delve into the world of Australian politics with
                            Tweetocracy, a web application that offers insights
                            into the nation's political parties and Members of
                            Parliament by analyzing their tweets and presenting
                            their voting records.
                        </p>
                        <p>
                            Tweeetocracy is a{" "}
                            <span className="font-bold text-orange-500">
                                full-stack project
                            </span>{" "}
                            utilising the following technologies:
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-bold">- Frontend:</span>{" "}
                                React and Tailwind CSS
                            </li>
                            <li>
                                <span className="font-bold">- Backend:</span>{" "}
                                Node.js with Express Server
                            </li>
                            <li>
                                <span className="font-bold">- Deployment:</span>{" "}
                                AWS Amplify and Elastic Beanstalk
                            </li>
                            <li>
                                <span className="font-bold">- APIs:</span>{" "}
                                Twitter API and theyvoteforyou API
                            </li>
                        </ul>
                        <hr className="border-4 border-orange-500 text-orange-500 xl:hidden" />
                    </div>
                    <div className="hidden w-1/2 flex-col items-center gap-4 xl:flex">
                        <div className="group overflow-hidden rounded border-4 shadow-xl">
                            <a
                                href="http://shop.tomkatilius.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={TackleShop}
                                    alt=""
                                    className="transition-all duration-1000 ease-in-out group-hover:scale-125"
                                />
                            </a>
                        </div>
                        <a
                            href="https://github.com/newportkat/e-commerce"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <GitHub className="h-6 w-6" />
                                <p>GITHUB REPO</p>
                            </div>
                        </a>
                        <a
                            href="http://shop.tomkatilius.com/"
                            rel="noreferrer"
                            target="_blank"
                            className="w-72"
                        >
                            <div className="flex items-center justify-center gap-2 rounded bg-orange-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-orange-400">
                                <Eye className="h-6 w-6" />
                                <p>LIVE DEMO</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
