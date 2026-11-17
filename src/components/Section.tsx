import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionProps = {
    id: string
    index: string
    label: string
    title: ReactNode
    intro?: ReactNode
    children: ReactNode
}

/** Shared editorial section shell: numbered label, serif title, content. */
export default function Section({ id, index, label, title, intro, children }: SectionProps) {
    return (
        <section id={id} className="border-t border-line py-20 sm:py-28">
            <Reveal>
                <div className="mb-12 grid gap-6 sm:mb-16 md:grid-cols-[200px_1fr]">
                    <p className="flex items-center gap-3 pt-3 text-xs font-medium uppercase tracking-[0.2em] text-sage">
                        <span className="tabular-nums">{index}</span>
                        <span className="h-px w-6 bg-sage/60" />
                        <span>{label}</span>
                    </p>

                    <div>
                        <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                            {title}
                        </h2>
                        {intro && (
                            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
                                {intro}
                            </p>
                        )}
                    </div>
                </div>
            </Reveal>

            <div className="md:pl-[224px]">{children}</div>
        </section>
    )
}
