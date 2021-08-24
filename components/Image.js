import NextImage from 'next/image'
import { useAmp } from 'next/amp'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => {
  const isAmp = useAmp()
  return isAmp ? <amp-img {...rest} /> : <NextImage {...rest} />
}

export default Image
