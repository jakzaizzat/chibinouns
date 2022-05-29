import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#ff4081',
      tertiary: '#f50057',
      quaternary: '#c51162',
      blue600: '#1976d2',
      white: '#fff',
    },
    size: {
      1: '0.25rem',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {},
})
