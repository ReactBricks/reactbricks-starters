import { Img } from '@react-email/components'
import { types, Image, useAdminContext } from 'react-bricks/frontend'

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
  const { isAdmin } = useAdminContext()

  return isAdmin ? (
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
