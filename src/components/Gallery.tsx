import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { gallery } from '../data/gallery'
import Reveal from './Reveal'
import Section from './Section'

export default function Gallery() {
    const [index, setIndex] = useState<number | null>(null)
    const selected = index === null ? null : gallery[index]

    const close = useCallback(() => setIndex(null), [])
    const step = useCallback(
        (dir: 1 | -1) =>
            setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
        [],
    )

    useEffect(() => {
        if (index === null) return

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') close()
            if (event.key === 'ArrowRight') step(1)
            if (event.key === 'ArrowLeft') step(-1)
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', onKey)
        }
    }, [index, close, step])

    return (
        <Section
            id="gallery"
            index="03"
            label="Gallery"
            title="A closer look"
            intro="Screenshots from the projects above: code, tooling, deployment and the finished product."
        >
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                {gallery.map((item, i) => (
                    <Reveal key={item.id} delay={(i % 2) * 0.08}>
                        <button
                            type="button"
                            onClick={() => setIndex(i)}
                            className="group block w-full cursor-zoom-in text-left"
                            aria-label={`View ${item.title} screenshot`}
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-stone ring-1 ring-line ring-inset">
                                <img
                                    src={item.image}
                                    alt={`${item.title} project screenshot`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="mt-4 flex items-baseline justify-between gap-3">
                                <div>
                                    <h3 className="text-[15px] font-medium transition-colors group-hover:text-sage">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-faint">{item.category}</p>
                                </div>
                                <span className="text-xs tabular-nums text-faint">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </button>
                    </Reveal>
                ))}
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="lightbox"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#151513]/90 p-4 backdrop-blur-sm sm:p-10"
                        role="presentation"
                        onClick={close}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${selected.title} image preview`}
                            className="relative w-full max-w-5xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                                <span className="tabular-nums">
                                    {String((index ?? 0) + 1).padStart(2, '0')} /{' '}
                                    {String(gallery.length).padStart(2, '0')}
                                </span>
                                <button
                                    type="button"
                                    onClick={close}
                                    className="cursor-pointer transition-colors hover:text-white"
                                    aria-label="Close image preview"
                                    autoFocus
                                >
                                    Close ✕
                                </button>
                            </div>

                            <motion.img
                                key={selected.id}
                                src={selected.image}
                                alt={`${selected.title} enlarged screenshot`}
                                className="max-h-[78vh] w-full object-contain"
                                initial={{ opacity: 0, scale: 0.985 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/80">
                                <button
                                    type="button"
                                    onClick={() => step(-1)}
                                    className="cursor-pointer px-2 py-1 transition-colors hover:text-white"
                                    aria-label="Previous image"
                                >
                                    ←
                                </button>
                                <div className="text-center">
                                    <p className="text-white">{selected.title}</p>
                                    <p className="mt-0.5 text-xs text-white/50">
                                        {selected.category}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => step(1)}
                                    className="cursor-pointer px-2 py-1 transition-colors hover:text-white"
                                    aria-label="Next image"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}
