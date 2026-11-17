import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [active, setActive] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const sections = links
            .map((link) => document.querySelector(link.href))
            .filter((el): el is Element => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`)
                })
            },
            { rootMargin: '-45% 0px -50% 0px' },
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <header
            className={`sticky top-0 z-40 -mx-6 bg-paper/85 px-6 backdrop-blur-md transition-[border-color] duration-300 sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12 border-b ${scrolled ? 'border-line' : 'border-transparent'
                }`}
        >
            <nav className="flex items-center justify-between gap-4 py-5">
                <a
                    href="#home"
                    className="font-serif text-2xl font-semibold tracking-tight text-ink"
                >
                    {profile.shortName}
                    <span className="text-sage">.</span>
                </a>

                <ul className="flex items-center gap-5 text-[13px] text-muted sm:gap-8 sm:text-sm">
                    {links.map((link) => {
                        const isActive = active === link.href
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    aria-current={isActive ? 'true' : undefined}
                                    className={`relative transition-colors hover:text-ink ${isActive ? 'text-ink' : ''
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sage transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
