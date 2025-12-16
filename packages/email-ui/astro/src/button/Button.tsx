import { types, Text, Link } from 'react-bricks/astro'

//=============================
// Local Types
//=============================

interface ButtonProps {
  buttonHref: string
  buttonColor: {
    color: string
    classNameSolid: string
    classNameOutline: string
  }
  buttonText: types.TextValue
}

//=============================
// Component to be rendered
//=============================
const EmailButton: types.Brick<ButtonProps> = ({
  buttonHref,
  buttonColor,
  buttonText,
}) => {
  return (
    <Link
      className={
        'block w-full rounded-[8px] px-[12px] py-[12px] text-center font-semibold text-white ' +
        buttonColor?.classNameSolid
      }
      href={buttonHref}
    >
      <Text
        propName="buttonText"
        value={buttonText}
        renderBlock={(props) => <span>{props.children}</span>}
        renderPlaceholder={(props) => (
          <span className="opacity-30">{props.children}</span>
        )}
        placeholder="Type a text..."
      />
    </Link>
  )
}

//=============================
// Brick Schema
//=============================
EmailButton.schema = {
  name: 'email-button',
  label: 'Email button',
  hideFromAddMenu: true,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'buttonHref',
      label: 'Button link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default EmailButton
