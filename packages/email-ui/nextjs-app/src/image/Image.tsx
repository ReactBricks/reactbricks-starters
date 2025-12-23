import { Img } from '@react-email/components'
import { types, Image, isAdmin } from 'react-bricks/rsc'

//=============================
// Local Types
//=============================

interface EmailImageProps {
  image: types.IImageSource
  rounded: boolean
}

//=============================
// Component to be rendered
//=============================
const EmailImage: types.Brick<EmailImageProps> = ({ image, rounded }) => {
  return isAdmin() ? (
    <Image
      propName="image"
      source={image}
      alt="Logo"
      aspectRatio={1}
      imageClassName={`w-full ${rounded && 'rounded-md'}`}
    />
  ) : (
    <Img
      alt="Logo"
      src={image?.src}
      srcSet={image?.srcSet}
      className={`w-full ${rounded && 'rounded-md'}`}
    />
  )
}

//=============================
// Brick Schema
//=============================
EmailImage.schema = {
  name: 'email-image',
  label: 'Email Image',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/nextjs-app/src/image/Image.tsx',
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'rounded',
      label: 'Rounded',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default EmailImage
