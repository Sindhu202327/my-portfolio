import { useEffect } from "react"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import { useLocation } from "react-router-dom"
export const Home = () => {
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if(hash){
            const element = document.querySelector(hash);
            if(element){
                setTimeout(() => {
                element.scrollIntoView({behavior: 'smooth'});
                },0)
            }
        }
    },[location]);
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />
        <Navbar />
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        <FooterSection />
    </div>
}