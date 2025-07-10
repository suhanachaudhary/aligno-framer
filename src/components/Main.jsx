
import Features from "./pages/Features"
import HeroSection from "./pages/HeroSection"
import PricingSection from "./pages/PricingSection"
import TeamSection from "./pages/TeamSection"
import Why from "./pages/Why"

function Main(){
    return(
        <>
            <section id="home">
                <HeroSection />
            </section>
            <section id="feature">
                <Features />
            </section>
            <section id="testimonials">
                <TeamSection />
            </section>
            <section id="why">
                <Why />
            </section>
            <section id="pricing">
                <PricingSection />
            </section>
        </>
    )
}

export default Main