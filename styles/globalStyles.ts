import {globalCss} from '@stitches';
import {normalize} from 'stitches-normalize-css';

export const globalStyles = globalCss(...normalize, {
  '@font-face ': {
    fontFamily: '',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'optional',
    src: 'url("/fonts/") format("woff2")',
  },

  html: {
    font: '100%/1.25 $fonts$primary',
    boxSizing: 'border-box',
  },

  '*, ::before, ::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    WebkitTapHighlightColor: 'transparent',
  },

  a: {
    textDecoration: 'none',
  },

  img: {
    maxWidth: '100%',
  },

  body: {
    lineHeight: 1.5,
  },

  'h1, h2, h3, h4,li,p': {
    overflowWrap: 'break-word',
    hyphens: 'auto',
    WebkitHyphens: 'auto',
  },
});
