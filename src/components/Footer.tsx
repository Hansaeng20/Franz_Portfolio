
export default function Footer() {
    return (
        <footer className="flex flex-col justify-between gap-3 border-t border-zinc-200 py-8 text-xs text-zinc-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Franz Llanes</p>
            <p>Built with React & TypeScript</p>
        </footer>
    )
}
