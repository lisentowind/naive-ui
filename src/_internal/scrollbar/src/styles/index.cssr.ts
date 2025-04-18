import { fadeInTransition } from '../../../../_styles/transitions/fade-in.cssr'
import { c, cB, cE, cM } from '../../../../_utils/cssr'

// vars:
// --n-scrollbar-bezier
// --n-scrollbar-color
// --n-scrollbar-color-hover
// --n-scrollbar-width
// --n-scrollbar-height
// --n-scrollbar-border-radius
// --n-scrollbar-rail-inset-horizontal
// --n-scrollbar-rail-inset-vertical
// --n-scrollbar-rail-color
export default cB('scrollbar', `
  overflow: hidden;
  position: relative;
  z-index: auto;
  height: 100%;
  width: 100%;
`, [
  c('>', [
    cB('scrollbar-container', `
      width: 100%;
      overflow: scroll;
      height: 100%;
      min-height: inherit;
      max-height: inherit;
      scrollbar-width: none;
    `, [
      c('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
        width: 0;
        height: 0;
        display: none;
      `),
      c('>', [
        // We can't set overflow hidden since it affects positioning.
        cB('scrollbar-content', `
          box-sizing: border-box;
          min-width: 100%;
        `)
      ])
    ])
  ]),
  c('>, +', [
    cB('scrollbar-rail', `
      position: absolute;
      pointer-events: none;
      user-select: none;
      background: var(--n-scrollbar-rail-color);
      -webkit-user-select: none;
    `, [
      cM('horizontal', `
        height: var(--n-scrollbar-height);
      `, [
        c('>', [
          cE('scrollbar', `
            height: var(--n-scrollbar-height);
            border-radius: var(--n-scrollbar-border-radius);
            right: 0;
          `)
        ])
      ]),
      cM('horizontal--top', `
        top: var(--n-scrollbar-rail-top-horizontal-top);  
        right: var(--n-scrollbar-rail-right-horizontal-top);  
        bottom: var(--n-scrollbar-rail-bottom-horizontal-top);  
        left: var(--n-scrollbar-rail-left-horizontal-top);  
      `),
      cM('horizontal--bottom', `
        top: var(--n-scrollbar-rail-top-horizontal-bottom);  
        right: var(--n-scrollbar-rail-right-horizontal-bottom);  
        bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom);  
        left: var(--n-scrollbar-rail-left-horizontal-bottom);  
      `),
      cM('vertical', `
        width: var(--n-scrollbar-width);
      `, [
        c('>', [
          cE('scrollbar', `
            width: var(--n-scrollbar-width);
            border-radius: var(--n-scrollbar-border-radius);
            bottom: 0;
          `)
        ])
      ]),
      cM('vertical--left', `
        top: var(--n-scrollbar-rail-top-vertical-left);  
        right: var(--n-scrollbar-rail-right-vertical-left);  
        bottom: var(--n-scrollbar-rail-bottom-vertical-left);  
        left: var(--n-scrollbar-rail-left-vertical-left);  
      `),
      cM('vertical--right', `
        top: var(--n-scrollbar-rail-top-vertical-right);  
        right: var(--n-scrollbar-rail-right-vertical-right);  
        bottom: var(--n-scrollbar-rail-bottom-vertical-right);  
        left: var(--n-scrollbar-rail-left-vertical-right);  
      `),
      cM('disabled', [
        c('>', [
          cE('scrollbar', 'pointer-events: none;')
        ])
      ]),
      c('>', [
        cE('scrollbar', `
          z-index: 1;
          position: absolute;
          cursor: pointer;
          pointer-events: all;
          background-color: var(--n-scrollbar-color);
          transition: background-color .2s var(--n-scrollbar-bezier);
        `, [
          fadeInTransition(),
          c('&:hover', 'background-color: var(--n-scrollbar-color-hover);')
        ])
      ])
    ])
  ])
])
