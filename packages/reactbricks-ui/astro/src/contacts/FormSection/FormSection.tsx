import { Repeater, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import CaptchaProvider from '../../shared/Captcha/CaptchaProvider'

export interface FormSectionProps extends LayoutProps {
  form: types.RepeaterItems
}

const FormSection: types.Brick<FormSectionProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  form,
}) => {
  const reCaptchaKey = import.meta.env.PUBLIC_RECAPTCHA_KEY || ''
  const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || ''

  return (
    <div>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          size={width}
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
        >
          <CaptchaProvider
            reCaptchaKey={reCaptchaKey}
            turnstileSiteKey={turnstileSiteKey}
          >
            <Repeater propName="form" items={form} />
          </CaptchaProvider>
        </Container>
      </Section>
    </div>
  )
}

FormSection.schema = {
  name: blockNames.FormSection,
  label: 'Form',
  category: 'contact',
  previewImageUrl: `/bricks-preview-images/${blockNames.FormSection}.png`,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/reactbricks-ui/astro/src/contacts/FormSection/FormSection.tsx',

  repeaterItems: [
    {
      name: 'form',
      itemType: blockNames.FormBuilder,
      itemLabel: 'form',
      min: 1,
      max: 1,
    },
  ],

  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],

  getDefaultProps: () => ({
    ...sectionDefaults,
  }),

  astroInteractivity: 'idle',
}

export default FormSection
