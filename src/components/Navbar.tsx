
import { profile } from '../data/portfolio'

export default function Navbar() {
    return (
        <header className="border-b border-[#e5e3dc]">
            <nav className="mx-auto flex items-center justify-between gap-4 py-7">
                <a
                    href="#home"
                    className="font-editorial text-2xl font-semibold tracking-tight text-[#262626]"
                >
                    Franz Llanes<span className="text-[#747b66]">.</span>
                </a>

                <div className="flex items-center gap-5 text-xs font-medium tracking-wide text-[#666] sm:gap-8 sm:text-sm">
                    <a
                        href="#about"
                        className="transition-colors hover:text-[#747b66]"
                    >
                        About
                    </a>

                    <a
                        href="#work"
                        className="transition-colors hover:text-[#747b66]"
                    >
                        Work
                    </a>

                    <a
                        href="#gallery"
                        className="transition-colors hover:text-[#747b66]"
                    >
                        Gallery
                    </a>

                    <a
                        href="#contact"
                        className="transition-colors hover:text-[#747b66]"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    )
}
