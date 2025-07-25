
import Features from "./pages/Features"
import HeroSection from "./pages/HeroSection"
import AlignoDashboard from "./pages/LightEffect"
import LightEffect from "./pages/LightEffect"
import PricingSection from "./pages/PricingSection"
import TeamSection from "./pages/TeamSection"
import Why from "./pages/Why"
import React, { useState, useEffect } from 'react';
import Cards from "./pages/cards"
import Dashboard from "./pages/Dashboard1"

function Main() {
    return (
        <div className="bg-gray-900">
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
        </div>
    )
}

export default Main