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
export const Home = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if(hash){
            const element = document.querySelector(hash);
            if(element){
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    },[]);
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