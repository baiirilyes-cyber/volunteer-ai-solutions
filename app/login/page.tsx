import { Header } from "@/components/Header";

export default function LoginPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-xl px-6 py-20">
        <div className="glass rounded-[2rem] p-8">
          <h1 className="text-4xl font-black">Client Login</h1>
          <p className="mt-3 text-slate-300">Authentication will connect to Supabase Auth.</p>
          <form className="mt-8 grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-slate-950 p-4" placeholder="Email" />
            <input className="rounded-2xl border border-white/10 bg-slate-950 p-4" placeholder="Password" type="password" />
            <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 p-4 font-black text-slate-950">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
}
