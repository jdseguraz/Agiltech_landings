import React, { useState, useEffect, useRef } from 'react'
import { CheckCheck, Phone, Video, MoreVertical, ArrowLeft } from 'lucide-react'

// ─── Messages definition ──────────────────────────────────────────────────────

const messages = [
  {
    from: 'user',
    text: 'Hola, busco zapatillas Nike talla 42, menos de $120',
    time: '14:02',
  },
  {
    from: 'bot',
    text: '¡Hola! 👋 Encontré 3 opciones:',
    time: '14:02',
  },
  {
    from: 'bot',
    isCard: true,
    products: [
      { name: 'Nike Air Max 270',    price: '$98',  rating: '⭐ 4.8', stock: 'En stock' },
      { name: 'Nike React Vision',   price: '$109', rating: '⭐ 4.6', stock: 'En stock' },
      { name: 'Nike Air Force 1 Low',price: '$115', rating: '⭐ 4.9', stock: 'Últimas 3' },
    ],
    time: '14:02',
  },
  {
    from: 'user',
    text: 'Me interesa la Air Force 1 👟',
    time: '14:03',
  },
  {
    from: 'bot',
    isConfirm: true,
    product: 'Nike Air Force 1 Low',
    details: 'Talla 42 · Blanca/Blanca',
    price: '$115 USD',
    shipping: '📦 Envío 2–4 días',
    time: '14:03',
  },
  {
    from: 'user',
    text: '✅ Confirmar compra',
    time: '14:04',
  },
  {
    from: 'bot',
    text: '🎉 *¡Pedido confirmado!*\n\nN° de orden: *#48291*\nTe aviso cuando sea despachado. ¡Gracias! 🙌',
    time: '14:04',
  },
]

// ─── Animation timeline (absolute ms from start) ─────────────────────────────

const EVENTS = [
  { time: 600,   type: 'show',   index: 0 },  // user: busco zapatillas
  { time: 1100,  type: 'typing' },
  { time: 2400,  type: 'show',   index: 1 },  // bot: encontré 3 opciones
  { time: 2700,  type: 'show',   index: 2 },  // bot: product card
  { time: 3400,  type: 'typing' },
  { time: 4600,  type: 'show',   index: 3 },  // user: air force 1
  { time: 5100,  type: 'typing' },
  { time: 6500,  type: 'show',   index: 4 },  // bot: confirm card
  { time: 7400,  type: 'show',   index: 5 },  // user: confirmar
  { time: 7900,  type: 'typing' },
  { time: 9000,  type: 'show',   index: 6 },  // bot: pedido confirmado
  { time: 12500, type: 'restart' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseBold(text) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith('*') && part.endsWith('*')
      ? <strong key={i}>{part.slice(1, -1)}</strong>
      : <span key={i}>{part}</span>
  )
}

function BotAvatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center flex-shrink-0 self-end">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-1.5">
      <BotAvatar />
      <div
        className="flex items-center gap-1 px-4 py-3 rounded-xl rounded-bl-sm"
        style={{ background: '#202c33' }}
      >
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-zinc-400"
            style={{ animation: `typingBounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  )
}

function MessageBubble({ msg }) {
  const isUser = msg.from === 'user'

  if (msg.isCard) {
    return (
      <div className="flex items-end gap-1.5 justify-start">
        <BotAvatar />
        <div
          className="rounded-xl rounded-bl-sm overflow-hidden shadow-sm max-w-[78%]"
          style={{ background: '#202c33' }}
        >
          <div className="divide-y divide-white/5">
            {msg.products.map((p, j) => (
              <div key={j} className="flex items-center justify-between px-3.5 py-2.5 gap-4">
                <div>
                  <p className="text-[#e9edef] text-[12px] font-semibold leading-tight">{p.name}</p>
                  <p className="text-[#8696a0] text-[10px] mt-0.5">{p.rating} · {p.stock}</p>
                </div>
                <span className="text-[#25D366] text-sm font-bold flex-shrink-0">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="px-3 pb-2 flex justify-end">
            <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
          </div>
        </div>
      </div>
    )
  }

  if (msg.isConfirm) {
    return (
      <div className="flex items-end gap-1.5 justify-start">
        <BotAvatar />
        <div
          className="rounded-xl rounded-bl-sm overflow-hidden shadow-sm max-w-[78%]"
          style={{ background: '#202c33' }}
        >
          <div className="px-3.5 pt-3 pb-1.5">
            <p className="text-[#8696a0] text-[10px] uppercase tracking-widest mb-1.5">Resumen del pedido</p>
            <p className="text-[#e9edef] text-[13px] font-semibold">{msg.product}</p>
            <p className="text-[#8696a0] text-[11px] mt-0.5">{msg.details}</p>
            <div className="flex items-center justify-between mt-2.5">
              <span className="text-[#25D366] text-base font-bold">{msg.price}</span>
              <span className="text-[#8696a0] text-[10px]">{msg.shipping}</span>
            </div>
          </div>
          <div className="border-t border-white/8 grid grid-cols-2 divide-x divide-white/8 mt-1">
            <button className="py-2.5 text-[#25D366] text-[12px] font-semibold">✅ Confirmar</button>
            <button className="py-2.5 text-[#8696a0] text-[12px]">Ver más</button>
          </div>
          <div className="px-3 pb-2 flex justify-end">
            <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-end gap-1.5 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <BotAvatar />}
      <div className="max-w-[78%] relative">
        <div
          className={`relative px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
            isUser ? 'rounded-xl rounded-br-sm text-white' : 'rounded-xl rounded-bl-sm text-[#e9edef]'
          }`}
          style={{ background: isUser ? '#005c4b' : '#202c33' }}
        >
          {/* Tail */}
          {isUser && (
            <span className="absolute -right-[7px] bottom-0 text-[#005c4b] pointer-events-none">
              <svg width="8" height="13" viewBox="0 0 8 13"><path d="M5.188 1H0v12L8 1H5.188z" fill="currentColor"/></svg>
            </span>
          )}
          {!isUser && (
            <span className="absolute -left-[7px] bottom-0 text-[#202c33] pointer-events-none">
              <svg width="8" height="13" viewBox="0 0 8 13"><path d="M2.812 1H8v12L0 1h2.812z" fill="currentColor"/></svg>
            </span>
          )}
          <span className="whitespace-pre-line">{parseBold(msg.text)}</span>
          <div className="flex items-center justify-end gap-1 mt-0.5">
            <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
            {isUser && <CheckCheck size={14} className="text-[#53bdeb]" />}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DemoSection() {
  const [visible, setVisible] = useState([])
  const [typing, setTyping] = useState(false)
  const [cycle, setCycle] = useState(0)
  const chatRef = useRef(null)

  useEffect(() => {
    setVisible([])
    setTyping(false)

    const timers = EVENTS.map(ev =>
      setTimeout(() => {
        if (ev.type === 'show') {
          setVisible(prev => [...prev, ev.index])
          setTyping(false)
        } else if (ev.type === 'typing') {
          setTyping(true)
        } else if (ev.type === 'restart') {
          setCycle(c => c + 1)
        }
      }, ev.time)
    )

    return () => timers.forEach(clearTimeout)
  }, [cycle])

  // Auto-scroll to bottom on every change
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [visible, typing])

  return (
    <section id="demo" className="relative bg-[#09090b] py-24 overflow-hidden">
      {/* Keyframes injected inline */}
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes msgPop {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .msg-enter { animation: msgPop 0.22s ease-out both; }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#22c55e]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Vista previa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            ¿Cómo se ve en acción?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Una conversación real entre tu cliente y el agente — desde la búsqueda hasta la confirmación.
          </p>
        </div>

        {/* Phone */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -inset-6 bg-[#22c55e]/6 rounded-[3.5rem] blur-3xl pointer-events-none" />

            {/* Device shell */}
            <div
              className="relative rounded-[2.4rem] overflow-hidden shadow-2xl"
              style={{ background: '#111b21', boxShadow: '0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)' }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-1.5" style={{ background: '#1f2c34' }}>
                <span className="text-white text-[11px] font-semibold">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal bars */}
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="white" opacity="0.85">
                    <rect x="0" y="5" width="3" height="6" rx="0.8"/>
                    <rect x="4" y="3" width="3" height="8" rx="0.8"/>
                    <rect x="8" y="1.5" width="3" height="9.5" rx="0.8"/>
                    <rect x="12" y="0" width="3" height="11" rx="0.8"/>
                  </svg>
                  {/* Battery */}
                  <svg width="25" height="11" viewBox="0 0 25 11" fill="none">
                    <rect x="0.5" y="0.5" width="21" height="10" rx="3" stroke="white" strokeOpacity="0.4"/>
                    <rect x="1.5" y="1.5" width="16" height="8" rx="2" fill="white"/>
                    <path d="M23 3.5v4a2 2 0 0 0 0-4z" fill="white" fillOpacity="0.35"/>
                  </svg>
                </div>
              </div>

              {/* WA header */}
              <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: '#1f2c34' }}>
                <button className="text-white/60"><ArrowLeft size={20} /></button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold leading-none">Asistente IA</p>
                  <p className="text-[11px] mt-0.5" style={{ color: typing ? '#8696a0' : '#25D366' }}>
                    {typing ? 'escribiendo...' : 'en línea'}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                  <Video size={19} />
                  <Phone size={19} />
                  <MoreVertical size={19} />
                </div>
              </div>

              {/* Chat area */}
              <div
                ref={chatRef}
                className="px-3 py-4 space-y-2 overflow-y-auto"
                style={{
                  background: '#0b141a',
                  minHeight: '420px',
                  maxHeight: '420px',
                  scrollbarWidth: 'none',
                }}
              >
                {/* Date chip */}
                <div className="flex justify-center mb-2">
                  <span className="text-[10px] text-[#8696a0] bg-[#182229] rounded-full px-3 py-1">Hoy</span>
                </div>

                {visible.map(idx => (
                  <div key={idx} className="msg-enter">
                    <MessageBubble msg={messages[idx]} />
                  </div>
                ))}

                {typing && (
                  <div className="msg-enter">
                    <TypingIndicator />
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2.5 px-3 py-2.5" style={{ background: '#1f2c34' }}>
                <div
                  className="flex-1 flex items-center rounded-full px-4 py-2.5"
                  style={{ background: '#2a3942' }}
                >
                  <span className="text-[#8696a0] text-[12px]">Mensaje</span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#00a884' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V22H8v2h8v-2h-3v-1.06A9 9 0 0 0 21 12v-2h-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
