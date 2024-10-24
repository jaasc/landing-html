/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Alata': ['Alata', 'sans-serif'],
        'Josefin-Sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'darkGray': 'hsl(0, 0%, 55%)',
        'veryDarkGray': 'hsl(0, 0%, 41%)'
      },
      backgroundImage: {
        'img-hero-desktop': "url('./src/assets/desktop/image-hero.jpg')",
        'img-hero-mobile': "url('./src/assets/mobile/image-hero.jpg')",
        'deep-earth-desktop': "url('./src/assets/desktop/image-deep-earth.jpg')",
        'deep-earth-mobile': "url('./src/assets/mobile/image-deep-earth.jpg')",
        'night-arcade-desktop': "url('./src/assets/desktop/image-night-arcade.jpg')",
        'night-arcade-mobile': "url('./src/assets/mobile/image-night-arcade.jpg')",
        'soccer-team-desktop': "url('./src/assets/desktop/image-soccer-team.jpg')",
        'soccer-team-mobile': "url('./src/assets/mobile/image-soccer-team.jpg')",
        'grid-desktop': "url('./src/assets/desktop/image-grid.jpg')",
        'grid-mobile': "url('./src/assets/mobile/image-grid.jpg')",
        'up-above-desktop': "url('./src/assets/desktop/image-from-above.jpg')",
        'up-above-mobile': "url('./src/assets/mobile/image-from-above.jpg')",
        'pocket-borealis-desktop': "url('./src/assets/desktop/image-pocket-borealis.jpg')",
        'pocket-borealis-mobile': "url('./src/assets/mobile/image-pocket-borealis.jpg')",
        'curiosity-desktop': "url('./src/assets/desktop/image-curiosity.jpg')",
        'curiosity-mobile': "url('./src/assets/mobile/image-curiosity.jpg')",
        'fisheye-desktop': "url('./src/assets/desktop/image-fisheye.jpg')",
        'fisheye-mobile': "url('./src/assets/mobile/image-fisheye.jpg')",
      }
    },
  },
  plugins: [],
}

