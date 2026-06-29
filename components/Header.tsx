import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Volunteer AI Solutions" className="h-14 w-24 rounded-xl bg-white object-contain p-1" />
          <div>
            <div className="text-xl font-black">Volunteer AI Solutions</div>
            <div className="text-xs font-bold text-slate-400">AI Automation • Websites • SEO • Ads • CRM</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 font-black text-slate-200 md:flex">
          <a href="/#services">Services</a>
          <a href="/#demo">AI Demos</a>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/portal">Portal</Link>
          <a href="/#pricing">Pricing</a>
          <a href="tel:4235345554">Call: (423) 534-5554</a>
          <a href="/#contact" className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3 text-slate-950">Book Demo</a>
        </nav>
      </div>
    </header>
  );
}
