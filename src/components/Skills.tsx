
import { skills } from '../data/portfolio'

export default function Skills() {
    return (
        <section id="skills" className="border-t border-zinc-200 py-16">
            <div className="grid gap-7 sm:grid-cols-[180px_1fr]">
                <h2 className="text-sm font-semibold">Technical skills</h2>

                <div className="space-y-5">
                    {skills.map((group) => (
                        <div key={group.category}>
                            <h3 className="text-sm font-medium">
                                {group.category}
                            </h3>

                            <p className="mt-1 text-sm leading-7 text-zinc-600">
                                {group.items.join(' · ')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
