'use client'

import { motion } from 'framer-motion'

const Loading = () => {
    return (
        <section className="flex flex-col space-y-4 h-screen justify-center items-center">
            <motion.div
                className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
            
            <h1 className="text-2xl font-semibold text-black">Fetching page content</h1>
            <p className="font-normal text-sm text-[#253B4B]">Please wait...</p>
        </section>
    )
}

export default Loading;
