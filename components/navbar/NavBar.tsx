'use client'

import Link from 'next/link';
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "../ui/dropdown-menu"


const NavBar = () => {

    return (
        <nav className="bg-primary-dark px-6 py-3 flex items-center justify-between">
            <div className="flex items-center justify-between w-[55%]">
                <div className='text-neutral-lightGray'>
                    <Link href="/">
                        <h1>MLS REALITY</h1>
                    </Link>
                </div>


                <div className="hidden md:flex items-center space-x-6 text-neutral-lightGray text-sm font-semibold">

                    <Link href="/" className="hover:underline">Home</Link>

                    <Link href="/about" className="hover:underline">About Us</Link>


                    <Link href="/sales" className="hover:underline">Sales</Link>


                    <Link href="/rentals" className="hover:underline">Rentals</Link>


                    <DropdownMenu>
                        <DropdownMenuTrigger className="hover:underline">
                            <div className="flex w-[104px] items-center justify-between">
                                <Link href="/">Resources</Link>
                                <img src="/dropdown-icon.svg" alt="Oualie Realty Logo" className="h-8 w-auto" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <Link href="/resources/resource1">Resource 1</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/resources/resource2">Resource 2</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>

            <div className="md:hidden flex items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image src="/hambuger.png" alt="Menu" width={24} height={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={8}>
                        <DropdownMenuItem asChild>
                            <Link href="/" className="hover:underline">Home</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/about" className="hover:underline">About Us</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/sales" className="hover:underline">Sales</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/rentals" className="hover:underline">Rentals</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/resources/resource1">Resource 1</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/resources/resource2">Resource 2</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/contact" className="hover:underline">Contact Us</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>



            <Link href="/contact" className="hidden md:block w-[123px] text-center bg-neutral-lightGray text-primary-dark font-semibold text-sm px-4 py-2 rounded-full hover:bg-neutral-mediumGray">
                Contact Us
            </Link>
        </nav>
    )
}

export default NavBar;