export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Theme-aware colors via CSS variables
        background: 'var(--color-bg)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
          border: 'var(--color-surface-border)',
          card: 'var(--color-surface-card)',
        },
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        accent: {
          DEFAULT: '#8b5cf6',
          cyan: '#06b6d4',
          glow: 'rgba(139, 92, 246, 0.4)',
        },
        ide: {
          bg: 'var(--ide-bg)',
          border: 'var(--ide-border)',
          topbar: 'var(--ide-topbar)',
          text: 'var(--ide-text)',
          keyword: 'var(--ide-keyword)',
          string: 'var(--ide-string)',
          function: 'var(--ide-function)',
          variable: 'var(--ide-variable)',
          comment: 'var(--ide-comment)',
          tag: 'var(--ide-tag)',
          component: 'var(--ide-component)',
          lineNum: 'var(--ide-lineNum)',
        }
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
