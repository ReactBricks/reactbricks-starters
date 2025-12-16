import classnames from 'classnames'
import { RichText, Text, types } from 'react-bricks/astro'

import type { textAccentColorType } from '../../colors'
import { textAccentColorOptions } from '../../colors'

export interface TitleProps {
  eyebrow: types.TextValue
  title: types.TextValue
  subtitle: types.TextValue
  withEyebrow: boolean
  withSubtitle: boolean
  titleHeadingLevel: 'h1' | 'h2' | 'h3'
  titleSize: 'medium' | 'big'
  titleAccentColor?: textAccentColorType
}

const getTextAccentColor = (titleAccentColor: textAccentColorType) => {
  return textAccentColorOptions.find(
    (option) => option.value.toLowerCase() === titleAccentColor.toLowerCase()
  )
}

const EyebrowContent = ({ eyebrow }: { eyebrow: types.TextValue }) => {
  return (
    <Text
      propName="eyebrow"
      value={eyebrow}
      placeholder="Type a text..."
      renderBlock={({ children }) => (
        <span className="block text-blue-900/60 dark:text-white/60 font-semibold mb-6 uppercase text-sm tracking-widest">
          {children}
        </span>
      )}
    />
  )
}
const TitleContent = ({
  title,
  titleSize,
  titleAccentColor,
}: {
  title: types.TextValue
  titleSize: 'medium' | 'big'
  titleAccentColor: textAccentColorType
}) => {
  return (
    <RichText
      propName="title"
      value={title}
      placeholder="Type a title..."
      allowedFeatures={[types.RichTextFeatures.Highlight]}
      renderBlock={({ children }) => (
        <span
          className={classnames(
            'font-display block font-semibold tracking-tight leading-[1.15] dark:text-white',
            { 'text-2xl sm:text-4xl': titleSize === 'medium' },
            { 'text-4xl sm:text-5xl': titleSize === 'big' }
          )}
        >
          {children}
        </span>
      )}
      renderHighlight={({ children }) => (
        <span
          className={classnames(
            getTextAccentColor(titleAccentColor)?.className
          )}
        >
          {children}
        </span>
      )}
    />
  )
}

export default function Title({
  eyebrow,
  title,
  subtitle,
  titleAccentColor = 'lime',
  withEyebrow,
  withSubtitle,
  titleHeadingLevel = 'h2',
  titleSize = 'medium',
}: TitleProps) {
  return (
    <>
      {titleHeadingLevel === 'h1' && (
        <h1>
          {withEyebrow && <EyebrowContent eyebrow={eyebrow} />}

          <TitleContent
            title={title}
            titleSize={titleSize}
            titleAccentColor={titleAccentColor}
          />
        </h1>
      )}
      {titleHeadingLevel === 'h2' && (
        <h2>
          {withEyebrow && <EyebrowContent eyebrow={eyebrow} />}

          <TitleContent
            title={title}
            titleSize={titleSize}
            titleAccentColor={titleAccentColor}
          />
        </h2>
      )}
      {titleHeadingLevel === 'h3' && (
        <h3>
          {withEyebrow && <EyebrowContent eyebrow={eyebrow} />}

          <TitleContent
            title={title}
            titleSize={titleSize}
            titleAccentColor={titleAccentColor}
          />
        </h3>
      )}

      <div className="my-6">
        {withSubtitle && (
          <RichText
            propName="subtitle"
            value={subtitle}
            placeholder="Type a subtitle..."
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Link,
            ]}
            renderBold={(props) => (
              <b className="text-black dark:text-white">{props.children}</b>
            )}
            renderLink={(props) => (
              <a
                href={props.href}
                target={props.target}
                rel={props.rel}
                className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                {props.children}
              </a>
            )}
            renderBlock={({ children }) => (
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {children}
              </p>
            )}
          />
        )}
      </div>
    </>
  )
}
