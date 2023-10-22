/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const purgecssOption = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
}

module.exports = {
  plugins:
  {
    tailwindcss: {},
    autoprefixer: {},
  }
}
