import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

export const handleScrollToAbout = () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#about", offsetY: 50 },
    })
}

export const handleScrollToProjects = () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#projects", offsetY: 50 },
    })
}