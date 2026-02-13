import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function Logo({ size = 'default', className = '' }) {
  const sizes = {
    small: {
      container: 'h-8',
      icon: 20,
      text: 'text-xl',
      iconPadding: 'p-1.5'
    },
    default: {
      container: 'h-10',
      icon: 24,
      text: 'text-2xl',
      iconPadding: 'p-2'
    },
    large: {
      container: 'h-16',
      icon: 32,
      text: 'text-4xl',
      iconPadding: 'p-3'
    }
  }

  const sizeConfig = sizes[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon with gradient background */}
      <div className={`${sizeConfig.iconPadding} bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-xl shadow-md flex items-center justify-center`}>
        <MessageCircle 
          size={sizeConfig.icon} 
          className="text-white" 
          strokeWidth={2.5}
          fill="white"
          fillOpacity={0.2}
        />
      </div>
      
      {/* Text Logo */}
      <div className={`font-bold ${sizeConfig.text} flex items-baseline`}>
        <span className="text-gray-800">What</span>
        <span className="bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] bg-clip-text text-transparent">
          IA
        </span>
      </div>
    </div>
  )
}

// Alternative logo with shield icon for more governmental look
export function LogoWithShield({ size = 'default', className = '' }) {
  const sizes = {
    small: {
      icon: 20,
      text: 'text-xl'
    },
    default: {
      icon: 24,
      text: 'text-2xl'
    },
    large: {
      icon: 32,
      text: 'text-4xl'
    }
  }

  const sizeConfig = sizes[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Shield + Chat bubble combined icon */}
      <div className="relative">
        <svg 
          width={sizeConfig.icon} 
          height={sizeConfig.icon} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="govwapp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#30f2ab" />
              <stop offset="100%" stopColor="#25c5ad" />
            </linearGradient>
          </defs>
          {/* Shield shape */}
          <path 
            d="M12 2L4 6V11C4 16 7 20.5 12 22C17 20.5 20 16 20 11V6L12 2Z" 
            fill="url(#govwapp-gradient)" 
            opacity="0.2"
            stroke="url(#govwapp-gradient)"
            strokeWidth="1.5"
          />
          {/* Chat bubble inside */}
          <path 
            d="M12 8C9.79 8 8 9.34 8 11C8 12.66 9.79 14 12 14C12.5 14 13 13.93 13.45 13.79L15 15V13.5C15.61 12.91 16 12 16 11C16 9.34 14.21 8 12 8Z" 
            fill="url(#govwapp-gradient)"
          />
        </svg>
      </div>
      
      {/* Text Logo */}
      <div className={`font-bold ${sizeConfig.text} flex items-baseline`}>
        <span className="text-gray-800">What</span>
        <span className="bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] bg-clip-text text-transparent">
          IA
        </span>
      </div>
    </div>
  )
}
