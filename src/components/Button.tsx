import { styled } from '../../stitches.config'

export const Button = styled('button', {
  color: '$white',
  fontWeight: 'bold',
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: '#00bcd4',

  '&:hover': {
    transform: 'scale(1.05)',
  },

  '& + button': {
    marginLeft: '10px',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$blue600',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$blue100',
        color: '$blue500',
      },
    },
  },
})
