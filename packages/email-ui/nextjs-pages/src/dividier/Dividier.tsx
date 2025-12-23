import { types } from 'react-bricks/frontend'
import { Hr } from '@react-email/components'

//=============================
// Local Types
//=============================

interface DividierProps {}

//=============================
// Component to be rendered
//=============================
const Dividier: types.Brick<DividierProps> = ({}) => {
  return <Hr className="my-[16px] border-gray-300" />
}

//=============================
// Brick Schema
//=============================
Dividier.schema = {
  name: 'email-dividier',
  label: 'Email dividier',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/nextjs-pages/src/dividier/Dividier.tsx',
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default Dividier
