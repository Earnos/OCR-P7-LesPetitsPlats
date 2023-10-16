/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        fontFamily: {
          anton: ['Anton'],
          'sans': ['ui-sans-serif', 'system-ui'],
          'serif': ['ui-serif', 'Georgia'],
          'mono': ['ui-monospace', 'SFMono-Regular'],
          'body': ['"Open Sans"'],
        },
        colors: {
          yellow: '#FFD15B',
        }, 
      },
    },
    plugins: [],
}
