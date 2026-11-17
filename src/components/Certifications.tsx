import { certifications } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'

export default function Certifications() {
    return (
        <Section
            id="certifications"
            index="05"
            label="Credentials"
            title="Certifications"
        >
            <Reveal>
                <ul className="border-b border-line">
                    {certifications.map((certification) => (
                        <li
                            key={certification.name}
                            className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-t border-line py-4 sm:grid-cols-[1fr_140px_80px]"
                        >
                            <p className="text-[15px] text-ink transition-colors group-hover:text-sage">
                                {certification.name}
                            </p>
                            <p className="order-3 text-xs text-faint sm:order-none sm:pt-1 sm:text-sm sm:text-muted">
                                {certification.issuer}
                            </p>
                            <p className="pt-1 text-right text-xs tabular-nums text-faint">
                                {certification.date}
                            </p>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    )
}
