'use client'
import { Button } from "../ui/button";
import PropertyFilter from "../property/property-filter";

const Hero = () => {
    return (
        <main className="bg-[url('/hero.png')] w-full flex flex-col items-center bg-cover bg-center h-[666px] bg-no-repeat relative justify-around px-4 md:px-8 lg:px-16">
            <div className="flex flex-col items-center justify-start gap-6 text-center md:gap-8 lg:gap-10 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
                <h4 className="text-white font-lora font-medium text-3xl md:text-4xl lg:text-5xl">
                    Your Dream Property Awaits in Nevis & St. Kitts
                </h4>
                <p className="text-white font-sans text-lg md:text-xl lg:text-2xl">
                    Explore opportunities in the Caribbean’s hidden gem. Whether you're buying, selling, or investing, your ideal property awaits.
                </p>
                <Button className="w-[134px] rounded-full bg-white font-sans">
                    Get Started
                </Button>     
            </div>
            <div className="w-full mt-6 md:mt-8 lg:mt-10">
                <PropertyFilter type="rect" />
            </div>
        </main>
    )
}

export default Hero;
