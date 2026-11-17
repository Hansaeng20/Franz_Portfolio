export default function Footer() {
    return (
        <footer className="flex flex-col justify-between gap-3 border-t border-line py-8 text-xs text-faint sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Franz Llanes · Built with React &amp; TypeScript</p>
            <a href="#home" className="link-underline self-start hover:text-ink sm:self-auto">
                Back to top ↑
            </a>
        </footer>
    )
}
