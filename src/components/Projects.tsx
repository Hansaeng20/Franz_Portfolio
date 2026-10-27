
import { projects } from '../data/portfolio'

export default function Projects() {
    return (
        <section id="work" className="border-t border-zinc-200 py-16">
            <div className="grid gap-7 sm:grid-cols-[180px_1fr]">
                <h2 className="text-sm font-semibold">Selected work</h2>

                <div>
                    {projects.map((project, index) => (
                        <article
                            key={project.name}
                            className={`py-7 ${index === 0 ? 'pt-0' : 'border-t border-zinc-200'
                                }`}
                        >
                            <p className="text-xs text-zinc-500">
                                {project.category}
                            </p>

                            <div className="mt-2 flex items-center justify-between gap-4">
                                <h3 className="text-xl font-medium">{project.name}</h3>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-sm text-zinc-600 hover:text-black"
                                    >
                                        Visit site ↗
                                    </a>
                                )}
                            </div>

                            <p className="mt-3 leading-7 text-zinc-600">
                                {project.description}
                            </p>

                            <p className="mt-4 text-xs text-zinc-500">
                                {project.technologies.join(' · ')}
                            </p>

                            {project.status === 'In Development' && (
                                <p className="mt-3 text-xs text-zinc-400">
                                    Currently in development
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
