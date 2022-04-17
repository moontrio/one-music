import isImg from './isImg'
import isUrl from './isUrl'

export {
  isImg,
  isUrl,
}

export * from './time'

// TODO: move to other module
export function getImgUrlWithSize(url: string, size: string | number) {
  return `${url}?param=${size}y${size}`
}
