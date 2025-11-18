const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}) / 1)`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: withOpacityValue('--color-bg'),
          subtle: withOpacityValue('--color-bg-subtle'),
        },
        surface: {
          DEFAULT: withOpacityValue('--color-surface'),
          raised: withOpacityValue('--color-surface-raised'),
        },
        border: {
          DEFAULT: withOpacityValue('--color-border'),
          strong: withOpacityValue('--color-border-strong'),
        },
        ink: {
          primary: withOpacityValue('--color-text-primary'),
          secondary: withOpacityValue('--color-text-secondary'),
          muted: withOpacityValue('--color-text-muted'),
          inverted: withOpacityValue('--color-text-inverted'),
        },
        accent: {
          DEFAULT: withOpacityValue('--color-accent'),
          soft: withOpacityValue('--color-accent-soft'),
          strong: withOpacityValue('--color-accent-strong'),
          contrast: withOpacityValue('--color-accent-contrast'),
        },
        status: {
          success: withOpacityValue('--color-success'),
          warning: withOpacityValue('--color-warning'),
          danger: withOpacityValue('--color-danger'),
        },
      },
    },
  },
  plugins: [],
}
