import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'

const facts = [
    { label: 'Studying', value: 'BS Information Technology' },
    { label: 'University', value: 'National University' },
    { label: 'Major', value: 'Mobile & Web Applications' },
    { label: 'Based in', value: profile.location },
]

export default function About() {
    return (
        <Section
            id="about"
            index="01"
            label="About"
            title={
                <>
                    From the API layer
                    <br />
                    <span className="italic text-sage">down to the server.</span>
                </>
            }
        >
            <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
                <Reveal className="max-w-xl space-y-5 text-[15px] leading-8 text-muted">
                    <p>{profile.about}</p>
                    <p>
                        I enjoy understanding how applications work end to end, from
                        writing the code to deploying it in production and keeping
                        it secure.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <dl className="divide-y divide-line border-y border-line text-sm">
                        {facts.map((fact) => (
                            <div key={fact.label} className="py-3">
                                <dt className="text-xs text-faint">{fact.label}</dt>
                                <dd className="mt-0.5 text-ink">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </Section>
    )
}
