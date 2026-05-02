export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my WooCommerce store?',
      a: 'CartSense uses the WooCommerce REST API. After subscribing, you paste your store URL and API keys into the dashboard — no plugins required.'
    },
    {
      q: 'How does the abandonment prediction work?',
      a: 'We analyze behavioral signals — time on page, scroll depth, cart interactions, and session history — and score each session in real-time using a trained ML model.'
    },
    {
      q: 'What happens when high abandonment risk is detected?',
      a: 'CartSense automatically triggers your configured campaigns: a discount email, an SMS nudge, or an exit-intent popup — whichever you set up in the dashboard.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          WooCommerce AI
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict cart abandonment<br />
          <span className="text-[#58a6ff]">before it happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CartSense monitors real-time shopper behavior in your WooCommerce store and fires automated recovery campaigns the moment abandonment risk spikes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start recovering revenue — $16/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[['98%', 'Prediction accuracy'], ['3×', 'Recovery rate lift'], ['< 2 min', 'Setup time']].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited WooCommerce stores',
              'Real-time abandonment scoring',
              'Automated email & SMS campaigns',
              'Behavioral analytics dashboard',
              'Exit-intent popup triggers',
              'Priority support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-xs mt-10">
          &copy; {new Date().getFullYear()} CartSense. All rights reserved.
        </p>
      </section>
    </main>
  )
}
