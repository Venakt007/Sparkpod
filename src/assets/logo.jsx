import transparentLogo from './logo-transparent.png'
import iconTransparentLogo from './logo-icon-transparent.png'
import iconLogo from './logo-icon.png'

/** S-figure icon — transparent, for dark navbar */
export function LogoSVGLight({ height = 44, style = {} }) {
  return (
    <img
      src={iconTransparentLogo}
      alt="SparkPod Technologies"
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  )
}

export function LogoSVG({ height = 44, style = {} }) {
  return (
    <img
      src={transparentLogo}
      alt="SparkPod Technologies"
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  )
}

/** Standalone S-figure icon only */
export function LogoIcon({ height = 60, style = {} }) {
  return (
    <img
      src={iconLogo}
      alt="SparkPod"
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  )
}
