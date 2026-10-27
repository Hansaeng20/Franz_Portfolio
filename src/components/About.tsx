
import { profile } from '../data/portfolio'

export default function About() {
    return (
        <section id="about" className="border-t border-zinc-200 py-16">
            <div className="grid gap-7 sm:grid-cols-[180px_1fr]">
                <h2 className="text-sm font-semibold">About</h2>

                <div className="space-y-5 leading-7 text-zinc-600">
                    <p>{profile.about}</p>

                    <p>
                        My main interests are backend development, Linux
                        infrastructure, networking, and cybersecurity.
                        I enjoy understanding how applications work,
                        from development to production deployment.
                    </p>
                </div>
            </div>
        </section>
    )
}
