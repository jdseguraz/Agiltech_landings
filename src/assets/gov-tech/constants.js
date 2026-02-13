// GovWapp Brand Colors and Design Constants

export const colors = {
  primary: '#30f2ab',      // Verde menta brillante
  secondary: '#25c5ad',    // Verde azulado
  
  // Gradients
  gradient: {
    primary: 'linear-gradient(to right, #30f2ab, #25c5ad)',
    primaryBr: 'linear-gradient(to bottom right, #30f2ab, #25c5ad)',
    primaryTl: 'linear-gradient(to top left, #30f2ab, #25c5ad)',
  },
  
  // Backgrounds
  bg: {
    white: '#ffffff',
    light: '#f9fafb',
    gray: '#f3f4f6',
  },
  
  // Text colors
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    light: '#9ca3af',
  }
}

export const spacing = {
  section: 'py-20 md:py-32',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
}

export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
  h4: 'text-xl md:text-2xl font-bold',
  body: 'text-base md:text-lg',
  small: 'text-sm md:text-base',
}

export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  hover: 'hover:scale-105 transition-all duration-200',
  hoverShadow: 'hover:shadow-xl transition-shadow duration-200',
}
