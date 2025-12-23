import { types, Text, Image, Link, isAdmin } from 'react-bricks/astro'
import { Column, Img, Row, Section } from '@react-email/components'

//=============================
// Local Types
//=============================

interface EmailListItemProps {
  title: types.TextValue
  description: types.TextValue
  withImage: boolean
  image: types.IImageSource
  index: number
  linkHref: string
  linkText: types.TextValue
}

//=============================
// Component to be rendered
//=============================
const EmailListItem: types.Brick<EmailListItemProps> = ({
  title,
  withImage,
  image,
  index,
  description,
  linkHref,
  linkText,
}) => {
  return (
    <Section className="mb-[30px]">
      {withImage ? (
        <Row className="mb-[24px]">
          <Column className="w-2/5 pr-[24px]">
            {isAdmin() ? (
              <Image
                propName="image"
                source={image}
                alt="Logo"
                aspectRatio={1}
                imageClassName="block w-full rounded-[4px] object-cover object-center h-[168px]"
              />
            ) : (
              <Img
                alt="Logo"
                src={image?.src}
                srcSet={image?.srcSet}
                className="block w-full rounded-[4px] object-cover object-center h-[168px]"
              />
            )}
          </Column>

          <Column className="w-3/5 pr-[24px]">
            <table className="text-center">
              <tbody>
                <tr>
                  <td
                    align="center"
                    className="text-center align-middle w-7 h-7 leading-[28px] rounded-full bg-indigo-600  text-[12px]"
                  >
                    <span className="text-white font-semibold">
                      {index + 1}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <h2 className="mt-[18px] mb-[8px] font-bold text-[20px]">
                  {props.children}
                </h2>
              )}
              renderPlaceholder={(props) => (
                <span className="opacity-30">{props.children}</span>
              )}
              placeholder="Type a text..."
            />

            <Text
              propName="description"
              value={description}
              multiline
              renderBlock={(props) => (
                <p className="m-0 text-gray-500 text-[14px] leading-[24px]">
                  {props.children}
                </p>
              )}
              renderPlaceholder={(props) => (
                <span className="opacity-30">{props.children}</span>
              )}
              placeholder="Type a text..."
            />

            <Link
              href={linkHref}
              className="mt-[12px] block font-semibold text-indigo-600 text-[14px] no-underline"
            >
              <Text
                propName="linkText"
                value={linkText}
                renderBlock={(props) => <span>{props.children}</span>}
                renderPlaceholder={(props) => (
                  <span className="opacity-30">{props.children}</span>
                )}
                placeholder="Type a text..."
              />
            </Link>
          </Column>
        </Row>
      ) : (
        <Section className="mb-[36px]">
          <div className="mr-[32px] ml-[12px] inline-flex items-start gap-x-4">
            <table className="text-center">
              <tbody>
                <tr>
                  <td
                    align="center"
                    valign="middle"
                    className="text-center [font-size:0] [line-height:0]"
                  >
                    <span className="inline-block align-middle w-7 h-7 leading-[28px] rounded-full bg-indigo-600 text-white text-[12px] font-semibold text-center align-middle">
                      {index + 1}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <Text
                propName="title"
                value={title}
                renderBlock={(props) => (
                  <h2 className="mt-[0px] mb-[8px] text-gray-900 text-[18px] leading-[28px] font-bold">
                    {props.children}
                  </h2>
                )}
                renderPlaceholder={(props) => (
                  <span className="opacity-30">{props.children}</span>
                )}
                placeholder="Type a text..."
              />

              <Text
                propName="description"
                value={description}
                renderBlock={(props) => (
                  <p className="m-0 text-gray-500 text-[14px] leading-[24px]">
                    {props.children}
                  </p>
                )}
                renderPlaceholder={(props) => (
                  <span className="opacity-30">{props.children}</span>
                )}
                placeholder="Type a text..."
              />
            </div>
          </div>
        </Section>
      )}
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
EmailListItem.schema = {
  name: 'email-list-item',
  label: 'Email list item',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/astro/src/list/ListItem.tsx',
  hideFromAddMenu: true,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'linkHref',
      label: 'Link url',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default EmailListItem
