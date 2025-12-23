import { RichText, types } from 'react-bricks/frontend'
import { Section } from '@react-email/components'
import {
  emailBackgroundColorsEditProps,
  EmailLayoutProps,
} from '../LayoutSideProps'

//=============================
// Local Types
//=============================

interface TextContainerProps extends EmailLayoutProps {
  text: types.TextValue
}

//=============================
// Component to be rendered
//=============================
const TextContainer: types.Brick<TextContainerProps> = ({
  text,
  backgroundColor,
}) => {
  return (
    <Section className={`max-w-full ${backgroundColor?.className}`}>
      <RichText
        propName="text"
        value={text}
        renderBlock={(props) => <p className="">{props.children}</p>}
        renderPlaceholder={(props) => (
          <span className="opacity-30">{props.children}</span>
        )}
        placeholder="Type a text..."
      />
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
TextContainer.schema = {
  name: 'email-text-container',
  label: 'Email text container',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/nextjs-pages/src/text-container/TextContainer.tsx',

  getDefaultProps: () => ({}),
  sideEditProps: [emailBackgroundColorsEditProps],
}

export default TextContainer
