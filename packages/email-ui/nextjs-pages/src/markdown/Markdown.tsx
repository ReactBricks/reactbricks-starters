import { types } from 'react-bricks/frontend'
import { Markdown } from '@react-email/components'

//=============================
// Local Types
//=============================

interface MarkdownProps {
  markdown: string
}

//=============================
// Component to be rendered
//=============================
const EmailMarkdown: types.Brick<MarkdownProps> = ({ markdown }) => {
  return (
    <Markdown>
      {`${markdown}
      `}
    </Markdown>
  )
}

//=============================
// Brick Schema
//=============================
EmailMarkdown.schema = {
  name: 'email-markdown',
  label: 'Email markdown',
  getDefaultProps: () => ({
    markdown: `## Hello, this is my email template

This is meant to be rendered as a paragraph. There is no way around it.

### Another heading that I wrote`,
  }),
  sideEditProps: [
    {
      name: 'markdown',
      label: 'Markdown',
      type: types.SideEditPropType.Textarea,
    },
  ],
}

export default EmailMarkdown
