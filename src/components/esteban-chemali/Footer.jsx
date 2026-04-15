import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#09090b] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {year} · Propuesta técnica confidencial
          </p>
          <a
            href="https://wa.me/573012499710"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-[#22c55e] transition-colors"
          >
            +57 301 249 9710
          </a>
        </div>
      </div>
    </footer>
  )
}
