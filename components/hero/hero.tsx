'use client'
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <>
        <main className="bg-[url('./../public/hero.png')] w-[100%] flex items-center bg-cover bg-[50%] h-[666px] bg-no-repeat relative justify-around">
                <div className="flex flex-col justify-start gap-[24px]">
                <h4 className="text-white font-lora font-medium text-5xl">Your Dream Property Awaits in Nevis & St. Kitts</h4>
                <p className="text-white font-sans text-xl">Explore opportunities in the Caribbean’s hidden gem. Whether you're buying, selling, or investing, your ideal property awaits.</p>
                <Button className="w-[134px] rounded-full bg-white font-sans">
                    Get Started
                </Button>     
                </div>
                <div>
                    <h1 className="text-white">Filter</h1>
                </div>
        </main>
        </>
    )
}

export default Hero;