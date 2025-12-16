import { types, Text } from 'react-bricks/astro'
import { Heading } from '@react-email/components'

//=============================
// Local Types
//=============================

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: types.TextValue
  centered: boolean
}

//=============================
// Component to be rendered
//=============================
const HeadingBrick: types.Brick<HeadingProps> = ({ as, title, centered }) => {
  let className

  switch (as) {
    case 'h1':
      className = 'text-4xl'
      break
    case 'h2':
      className = 'text-3xl'
      break

    case 'h3':
      className = 'text-2xl'
      break

    case 'h4':
      className = 'text-xl'
      break

    case 'h5':
      className = 'text-lg'
      break

    case 'h6':
      className = 'text-base'
      break
  }

  return (
    <Heading as={as} className={centered ? 'text-center' : ''}>
      <Text
        propName="title"
        value={title}
        renderBlock={(props) => (
          <div className={className}>{props.children}</div>
        )}
        renderPlaceholder={(props) => (
          <span className="opacity-30">{props.children}</span>
        )}
        placeholder="Type a text..."
      />
    </Heading>
  )
}

//=============================
// Brick Schema
//=============================
HeadingBrick.schema = {
  name: 'email-heading',
  label: 'Email heading',
  getDefaultProps: () => ({
    as: 'h2',
  }),
  sideEditProps: [
    {
      name: 'as',
      label: 'As',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'h1', label: 'h1' },
          { value: 'h2', label: 'h2' },
          { value: 'h3', label: 'h3' },
          { value: 'h4', label: 'h4' },
          { value: 'h5', label: 'h5' },
          { value: 'h6', label: 'h6' },
        ],
      },
    },
    {
      name: 'centered',
      label: 'Centered',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default HeadingBrick
