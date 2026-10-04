export default function Footer() {
  return (
    <footer className="border-t border-[#283d3b]/5 px-6 py-8 dark:border-[#edddd4]/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-[#283d3b]/40 sm:flex-row dark:text-[#edddd4]/40">
        <p>© {new Date().getFullYear()} Darshil Pandya.</p>
        <p>Built with React, Vite & Tailwind.</p>
      </div>
    </footer>
  )
}
