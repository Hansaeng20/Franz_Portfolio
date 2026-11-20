import type { IconType } from 'react-icons'
import { SiCisco, SiComptia, SiGoogle, SiGooglecloud, SiPearson } from 'react-icons/si'
import { LuAward } from 'react-icons/lu'
import { certifications, type Certification } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'

// Issuer logos used as the badge when no badge image is provided.
// Certiport is a Pearson company, so it uses the Pearson mark.
const issuerIcons: Record<string, IconType> = {
    Cisco: SiCisco,
    Google: SiGoogle,
    'Google Cloud': SiGooglecloud,
    Certiport: SiPearson,
    CompTIA: SiComptia,
}

function Badge({ certification }: { certification: Certification }) {
    if (certification.badge) {
        return (
            <img
                src={certification.badge}
                alt={`${certification.name} badge`}
                loading="lazy"
                className="size-10 object-contain"
            />
        )
    }

    const Icon = issuerIcons[certification.issuer] ?? LuAward
    return (
        <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full border border-line bg-stone text-muted transition-colors group-hover:border-sage group-hover:text-sage"
        >
            <Icon className="size-[18px]" />
        </span>
    )
}

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
                    {certifications.map((certification) => {
                        const name = certification.url ? (
                            <a
                                href={certification.url}
                                target="_blank"
                                rel="noreferrer"
                                className="underline-offset-4 hover:underline"
                            >
                                {certification.name}
                            </a>
                        ) : (
                            certification.name
                        )

                        return (
                            <li
                                key={certification.name}
                                className="group grid grid-cols-[40px_1fr_auto] items-center gap-x-4 border-t border-line py-4 sm:grid-cols-[40px_1fr_140px_80px] sm:gap-x-6"
                            >
                                <Badge certification={certification} />
                                <div className="min-w-0 sm:contents">
                                    <p className="text-[15px] text-ink transition-colors group-hover:text-sage">
                                        {name}
                                    </p>
                                    <p className="mt-1 text-xs text-faint sm:mt-0 sm:text-sm sm:text-muted">
                                        {certification.issuer}
                                    </p>
                                </div>
                                <p className="text-right text-xs tabular-nums text-faint">
                                    {certification.date}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </Reveal>
        </Section>
    )
}
