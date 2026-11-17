import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'

function StatusBadge({ status }: { status: string }) {
    const live = status === 'Live'
    const dev = status === 'In Development'

    return (
        <span className="inline-flex items-center gap-1.5 text-xs text-faint">
            <span
                className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-sage' : dev ? 'border border-sage' : 'bg-faint/60'
                    }`}
            />
            {status}
        </span>
    )
}

export default function Projects() {
    return (
        <Section
            id="work"
            index="02"
            label="Work"
            title="Selected work"
            intro="A few projects across backend, infrastructure and the web."
        >
            <ol className="border-b border-line">
                {projects.map((project, index) => (
                    <li key={project.name} className="border-t border-line">
                        <Reveal delay={index * 0.05}>
                            <article className="group grid gap-4 py-10 sm:grid-cols-[48px_1fr]">
                                <span className="pt-2 text-xs tabular-nums text-faint">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                                        <p className="text-xs uppercase tracking-[0.16em] text-sage">
                                            {project.category}
                                        </p>
                                        <StatusBadge status={project.status} />
                                    </div>

                                    <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-sage sm:text-4xl">
                                        {project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-baseline gap-2"
                                            >
                                                {project.name}
                                                <span className="font-sans text-base text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage">
                                                    ↗
                                                </span>
                                            </a>
                                        ) : (
                                            project.name
                                        )}
                                    </h3>

                                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
                                        {project.description}
                                    </p>

                                    <ul className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </Section>
    )
}
