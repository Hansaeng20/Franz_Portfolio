
import { profile } from '../data/portfolio'

export default function Hero() {
    return (
        <section
            id="home"
            className="py-20 sm:py-28"
        >
            <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">

                {/* LEFT: Introduction */}
                <div>
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#747b66]" />
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#747b66]">
                            Personal Portfolio — 2026
                        </p>
                    </div>

                    <h1 className="font-editorial text-[clamp(3.5rem,6vw,5.8rem)] font-medium leading-[0.98] tracking-tight">
                        Franz Romeo
                        <br />
                        <span className="italic text-[#747b66]">
                            Isaac Llanes.
                        </span>
                    </h1>

                    <div className="mt-9 border-l-2 border-[#747b66] pl-5">
                        <p className="max-w-lg text-base leading-8 text-[#62625e]">
                            {profile.introduction}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-7">
                        <a
                            href="#work"
                            className="border-b border-[#262626] pb-2 text-sm font-medium hover:text-[#747b66]"
                        >
                            Explore selected work ↗
                        </a>

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#777] hover:text-[#262626]"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>

                {/* RIGHT: Profile Photo */}
                <div className="mx-auto w-full max-w-[330px] md:ml-auto">
                    <div className="aspect-[3/4] overflow-hidden bg-[#e8e6df]">
                        <img
                            src="/images/profile.png"
                            alt="Franz Romeo Isaac Llanes"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <p className="mt-3 text-right text-xs tracking-wide text-[#777]">
                        Angeles City, Pampanga · Philippines
                    </p>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e3dc] pt-6 text-xs tracking-wide text-[#777]">
                <span>
                    Backend Development · Networking · Cybersecurity ·
                    Infrastructure · Database Systems
                </span>
                <span>Portfolio / 2026</span>
            </div>
        </section>
    )
}
