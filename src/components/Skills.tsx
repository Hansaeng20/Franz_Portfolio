import { skills } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
    return (
        <Section id="skills" index="04" label="Skills" title="Toolkit">
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {skills.map((group, i) => (
                    <Reveal key={group.category} delay={(i % 2) * 0.08}>
                        <h3 className="border-b border-line pb-3 text-xs uppercase tracking-[0.16em] text-sage">
                            {group.category}
                        </h3>
                        <ul className="mt-4 space-y-2 text-[15px] text-muted">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}
