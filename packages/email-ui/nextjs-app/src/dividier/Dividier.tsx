import { types } from 'react-bricks/rsc'
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
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default Dividier
