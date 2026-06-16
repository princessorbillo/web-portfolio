export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#f8fafc',  // Slate 50 - soft off-white
        primary: '#0f172a',     // Slate 900
        secondary: '#64748b',   // Slate 500
        accent: '#3b82f6',      // Blue 500
        ide: {
          bg: '#ffffff',        
          border: '#e2e8f0',    
          topbar: '#f1f5f9',    
          text: '#334155',      
          keyword: '#d73a49',   
          string: '#032f62',
          function: '#6f42c1',
          variable: '#e36209',
          comment: '#6a737d',
          tag: '#22863a',
          component: '#005cc5',
        }
      },
    },
  },
  plugins: [],
}
