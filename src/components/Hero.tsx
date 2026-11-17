import { profile } from '../data/portfolio'
import Reveal from './Reveal'

const focusAreas = [
    'Backend Development',
    'Networking',
    'Cybersecurity',
    'Infrastructure',
    'Database Systems',
]

export default function Hero() {
    return (
        <section id="home" className="pt-16 pb-16 sm:pt-24 sm:pb-20">
            <div className="grid items-end gap-14 md:grid-cols-[1.25fr_0.75fr]">
                <div>
                    <Reveal>
                        <p className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-50" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
                            </span>
                            Open to internship opportunities
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h1 className="font-serif text-[clamp(3.25rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight">
                            Franz Romeo
                            <br />
                            <span className="italic text-sage">Isaac Llanes.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-9 max-w-md text-base leading-8 text-muted">
                            {profile.introduction}
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
                            <a href="#work" className="link-solid group font-medium">
                                View selected work
                                <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                                    ↓
                                </span>
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-underline text-muted hover:text-ink"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-underline text-muted hover:text-ink"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.2} className="mx-auto w-full max-w-[320px] md:mr-0">
                    <figure>
                        <div className="aspect-[3/4] overflow-hidden bg-stone">
                            <img
                                src="/images/profile.png"
                                alt="Franz Romeo Isaac Llanes"
                                className="h-full w-full object-cover object-center grayscale-[15%] transition duration-700 hover:scale-[1.02] hover:grayscale-0"
                            />
                        </div>
                        <figcaption className="mt-3 flex justify-between text-xs text-faint">
                            <span>{profile.location}</span>
                            <span>PH</span>
                        </figcaption>
                    </figure>
                </Reveal>
            </div>

            <Reveal delay={0.3}>
                <ul className="mt-20 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 text-xs tracking-wide text-faint">
                    {focusAreas.map((area) => (
                        <li key={area}>{area}</li>
                    ))}
                </ul>
            </Reveal>
        </section>
    )
}
