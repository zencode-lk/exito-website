/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: "#261410",
        cognac: "#c2955a",
        amber: "#bb6b36",
        emerald: "#1b3a34",
        blush: "#f9edf1",
        "yellow-exito": "#ffd400",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        cookie: ["var(--font-cookie)", "cursive"],
      },
      fontSize: {
        // Display Typography - Largest sizes for hero sections
        "display-xl": [
          "clamp(4.5rem, 6.429vw + 3.214rem, 9rem)",
          { lineHeight: "1.05", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(3.75rem, 5.357vw + 2.678rem, 7.5rem)",
          { lineHeight: "1.1", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(3rem, 4.286vw + 2.142rem, 6rem)",
          { lineHeight: "1.15", fontWeight: "700" },
        ],

        // Heading Typography - For section headings
        "heading-xl": [
          "clamp(2.5rem, 3.571vw + 1.786rem, 5rem)",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        "heading-lg": [
          "clamp(2rem, 2.857vw + 1.429rem, 4rem)",
          { lineHeight: "1.25", fontWeight: "600" },
        ],
        "heading-md": [
          "clamp(1.75rem, 2.143vw + 1.321rem, 3rem)",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        "heading-sm": [
          "clamp(1.5rem, 1.786vw + 1.214rem, 2.5rem)",
          { lineHeight: "1.35", fontWeight: "600" },
        ],

        // Body Typography - For content text
        "body-xl": [
          "clamp(1.25rem, 1.071vw + 1.107rem, 1.875rem)",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
        "body-lg": [
          "clamp(1.125rem, 0.714vw + 1.036rem, 1.5rem)",
          { lineHeight: "1.65", fontWeight: "400" },
        ],
        "body-md": [
          "clamp(1rem, 0.357vw + 0.964rem, 1.25rem)",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        "body-sm": [
          "clamp(0.875rem, 0.179vw + 0.857rem, 1rem)",
          { lineHeight: "1.75", fontWeight: "400" },
        ],

        // Caption & Label Typography
        "caption-lg": [
          "clamp(0.875rem, 0.357vw + 0.821rem, 1.125rem)",
          { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.08em" },
        ],
        caption: [
          "clamp(0.75rem, 0.357vw + 0.678rem, 1rem)",
          { lineHeight: "1.5", fontWeight: "400", letterSpacing: "0.1em" },
        ],
        "caption-sm": [
          "clamp(0.625rem, 0.179vw + 0.607rem, 0.75rem)",
          { lineHeight: "1.6", fontWeight: "400", letterSpacing: "0.12em" },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
