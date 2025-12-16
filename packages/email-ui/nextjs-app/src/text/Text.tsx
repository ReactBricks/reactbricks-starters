import { Section } from '@react-email/components'
import { types, RichText } from 'react-bricks/rsc'

//=============================
// Local Types
//=============================

interface MarkdownProps {
  text: types.TextValue
}

//=============================
// Component to be rendered
//=============================
const EmailText: types.Brick<MarkdownProps> = ({ text }) => {
  return (
    <Section>
      <RichText
        propName="text"
        value={text}
        renderBlock={(props) => <p>{props.children}</p>}
        placeholder="Type a text..."
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Link,
        ]}
        renderCode={(props) => (
          <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded-sm">
            {props.children}
          </code>
        )}
        renderLink={(props) => (
          <a
            href={props.href}
            target={props.target}
            rel={props.rel}
            className="text-sky-500 hover:text-sky-600 transition-colors"
          >
            {props.children}
          </a>
        )}
      />
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
EmailText.schema = {
  name: 'email-text',
  label: 'Email text',
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default EmailText
