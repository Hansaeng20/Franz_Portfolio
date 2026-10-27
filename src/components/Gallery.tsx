
import { useEffect, useState } from 'react'
import { gallery } from '../data/gallery'

export default function Gallery() {
    const [selected, setSelected] = useState<
        (typeof gallery)[number] | null
    >(null)

    useEffect(() => {
        if (!selected) return

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelected(null)
        }

        window.addEventListener('keydown', closeOnEscape)

        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [selected])

    return (
        <section
            id="gallery"
            className="border-t border-[#e5e3dc] py-20"
        >
            <div className="mb-10">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#747b66]">
                    Selected visuals
                </p>

                <h2 className="font-editorial text-5xl font-medium">
                    Project Gallery
                </h2>

                <p className="mt-3 text-sm text-[#777]">
                    A closer look at the projects I've worked on.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
                {gallery.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelected(item)}
                        className="group cursor-zoom-in text-left"
                        aria-label={`View ${item.title} screenshot`}
                    >
                        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#eae8e1]">
                            <img
                                src={item.image}
                                alt={`${item.title} project screenshot`}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                            />
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-base font-medium">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-xs text-[#777]">
                                    {item.category}
                                </p>
                            </div>

                            <span className="text-sm text-[#747b66]">
                                ↗
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10"
                    role="presentation"
                    onClick={() => setSelected(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${selected.title} image preview`}
                        className="relative w-full max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelected(null)}
                            className="absolute -top-10 right-0 cursor-pointer text-sm text-white"
                            aria-label="Close image preview"
                            autoFocus
                        >
                            Close ×
                        </button>

                        <img
                            src={selected.image}
                            alt={`${selected.title} enlarged screenshot`}
                            className="max-h-[80vh] w-full object-contain"
                        />

                        <p className="mt-3 text-center text-sm text-white">
                            {selected.title}
                        </p>
                    </div>
                </div>
            )}
        </section>
    )
}
