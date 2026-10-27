
import { certifications } from '../data/portfolio'

export default function Certifications() {
    return (
        <section id="certifications" className="border-t border-zinc-200 py-16">
            <div className="grid gap-7 sm:grid-cols-[180px_1fr]">
                <h2 className="text-sm font-semibold">
                    Certifications
                </h2>

                <div className="divide-y divide-zinc-200">
                    {certifications.map((certification) => (
                        <div
                            key={certification.name}
                            className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:gap-6"
                        >
                            <div>
                                <p className="text-sm font-medium">
                                    {certification.name}
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    {certification.issuer}
                                </p>
                            </div>

                            <span className="shrink-0 text-xs text-zinc-500">
                                {certification.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
