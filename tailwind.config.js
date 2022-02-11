module.exports = {
  purge: {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      options: {
        safelist: [
          /data-theme$/,
        ]
      },
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
