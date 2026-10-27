
import { profile } from '../data/portfolio'

export default function Contact() {
    return (
        <section id="contact" className="border-t border-zinc-200 py-16">
            <div className="grid gap-7 sm:grid-cols-[180px_1fr]">
                <h2 className="text-sm font-semibold">Contact</h2>

                <div>
                    <p className="mb-6 leading-7 text-zinc-600">
                        I'm currently looking for internship opportunities
                        in backend development, DevOps, infrastructure,
                        and networking.
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                        <a
                            href={`mailto:${profile.email}`}
                            className="border-b border-zinc-900 pb-1"
                        >
                            Email ↗
                        </a>

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-zinc-900 pb-1"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-zinc-900 pb-1"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
