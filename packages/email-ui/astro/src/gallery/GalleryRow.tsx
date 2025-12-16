import { types, Image, isAdmin } from 'react-bricks/astro'
import { Column, Row, Link, Section, Img } from '@react-email/components'

//=============================
// Local Types
//=============================

interface GalleryRowProps {
  rowStyle: string
  image: types.IImageSource
  image2: types.IImageSource
  image3: types.IImageSource
  linkUrl: string
  linkUrl2: string
  linkUrl3: string
  rounded: boolean
}

//=============================
// Component to be rendered
//=============================
const GalleryRow: types.Brick<GalleryRowProps> = ({
  rowStyle,
  image,
  image2,
  image3,
  linkUrl,
  linkUrl2,
  linkUrl3,
  rounded,
}) => {
  return rowStyle === '1' ? (
    <Row className="my-[16px]">
      <Column className={'w-1/2 h-[288px] pr-[8px]'}>
        <Link href={linkUrl}>
          {isAdmin() ? (
            <Image
              propName="image"
              source={image}
              alt="Image"
              imageClassName={rounded ? 'rounded-[12px]' : ''}
            />
          ) : (
            <Img
              src={image?.src}
              srcSet={image?.srcSet}
              alt="Image"
              className={rounded ? 'rounded-[12px]' : ''}
            />
          )}
        </Link>
      </Column>

      <Column className={'w-1/2 h-[288px] pl-[8px]'}>
        <Link href={linkUrl2}>
          {isAdmin() ? (
            <Image
              propName="image2"
              source={image2}
              alt="Image"
              imageClassName={rounded ? 'rounded-[12px]' : ''}
            />
          ) : (
            <Img
              src={image2?.src}
              srcSet={image2?.srcSet}
              alt="Image2"
              className={rounded ? 'rounded-[12px]' : ''}
            />
          )}
        </Link>
      </Column>
    </Row>
  ) : rowStyle === '2' ? (
    <Row className="my-[16px]">
      <Column className="w-1/2 pr-[8px]">
        <Row>
          <td>
            <Link href={linkUrl}>
              {isAdmin() ? (
                <Image
                  propName="image"
                  source={image}
                  alt="Image"
                  imageClassName={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[152px]`}
                />
              ) : (
                <Img
                  src={image?.src}
                  srcSet={image?.srcSet}
                  alt="Image"
                  className={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[152px]`}
                />
              )}
            </Link>
          </td>
        </Row>
        <Row>
          <td>
            <Link href={linkUrl2}>
              {isAdmin() ? (
                <Image
                  propName="image2"
                  source={image2}
                  alt="Image"
                  imageClassName={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[152px] mt-4`}
                />
              ) : (
                <Img
                  src={image2?.src}
                  srcSet={image2?.srcSet}
                  alt="Image2"
                  className={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[152px] mt-4`}
                />
              )}
            </Link>
          </td>
        </Row>
      </Column>
      <Column className="w-1/2 py-[8px] pl-[8px]">
        <Link href={linkUrl3}>
          {isAdmin() ? (
            <Image
              propName="image3"
              source={image3}
              alt="Image"
              imageClassName={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[320px]`}
            />
          ) : (
            <Img
              src={image3?.src}
              srcSet={image3?.srcSet}
              alt="Image3"
              className={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[320px]`}
            />
          )}
        </Link>
      </Column>
    </Row>
  ) : rowStyle === '3' ? (
    <Section className="my-[16px]">
      <Link href={linkUrl} className="w-full">
        {isAdmin() ? (
          <Image
            propName="image"
            source={image}
            alt="Image"
            imageClassName={`${rounded ? 'rounded-[12px]' : ''} object-cover h-[288px] w-full`}
            containerClassName="w-full"
          />
        ) : (
          <Img
            src={image?.src}
            srcSet={image?.srcSet}
            alt="Image"
            className={`${rounded ? 'rounded-[12px]' : ''} object-cover h-[288px] w-full`}
          />
        )}
      </Link>
      <Row className="mt-[16px]" width={'100%'}>
        <Column className="w-1/2 pr-[8px]">
          <Link href={linkUrl2} className="w-full">
            {isAdmin() ? (
              <Image
                propName="image2"
                source={image2}
                alt="Image"
                imageClassName={`${rounded ? 'rounded-[12px]' : ''} object-cover h-[288px] w-full`}
                containerClassName="w-full"
              />
            ) : (
              <Img
                src={image2?.src}
                srcSet={image2?.srcSet}
                alt="Image2"
                className={`${rounded ? 'rounded-[12px]' : ''} object-cover h-[288px] w-full`}
              />
            )}
          </Link>
        </Column>
        <Column className="w-1/2 pl-[8px]" width={'100%'}>
          <Link href={linkUrl3} className="w-full">
            {isAdmin() ? (
              <Image
                propName="image3"
                source={image3}
                alt="Image"
                imageClassName={`${rounded ? 'rounded-[12px]' : ''} object-cover h-[288px] w-full`}
                containerClassName="w-full"
              />
            ) : (
              <Img
                src={image3?.src}
                srcSet={image3?.srcSet}
                alt="Image3"
                className={`${rounded ? 'rounded-[12px]' : ''} object-cover h-[288px] w-full`}
              />
            )}
          </Link>
        </Column>
      </Row>
    </Section>
  ) : (
    <Row className="my-[16px]">
      <Column className="w-1/3 pr-[8px]">
        <Link href={linkUrl}>
          {isAdmin() ? (
            <Image
              propName="image"
              source={image}
              alt="Image"
              imageClassName={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[186px]`}
            />
          ) : (
            <Img
              src={image?.src}
              srcSet={image?.srcSet}
              alt="Image"
              className={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[186px]`}
            />
          )}
        </Link>
      </Column>
      <Column className="w-1/3 px-[8px]">
        <Link href={linkUrl2}>
          {isAdmin() ? (
            <Image
              propName="image2"
              source={image2}
              alt="Image"
              imageClassName={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[186px]`}
            />
          ) : (
            <Img
              src={image2?.src}
              srcSet={image2?.srcSet}
              alt="Image2"
              className={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[186px]`}
            />
          )}
        </Link>
      </Column>
      <Column className="w-1/3 pl-[8px]">
        <Link href={linkUrl3}>
          {isAdmin() ? (
            <Image
              propName="image3"
              source={image3}
              alt="Image"
              imageClassName={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[186px]`}
            />
          ) : (
            <Img
              src={image3?.src}
              srcSet={image3?.srcSet}
              alt="Image3"
              className={`w-full ${rounded ? 'rounded-[12px]' : ''} object-cover h-[186px]`}
            />
          )}
        </Link>
      </Column>
    </Row>
  )
}

//=============================
// Brick Schema
//=============================
GalleryRow.schema = {
  name: 'email-gallery-row',
  label: 'Email gallery row',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    rounded: true,
  }),
  sideEditProps: [
    {
      name: 'rowStyle',
      label: 'Row style',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '1', label: 'Grid' },
          { value: '2', label: 'Horizontal grid' },
          { value: '3', label: 'Vertical grid' },
          { value: '4', label: 'Three images' },
        ],
      },
    },
    {
      name: 'rounded',
      label: 'Rounded image',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkUrl',
      label: 'Link url',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'linkUrl2',
      label: 'Link url 2',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'linkUrl3',
      label: 'Link url 3',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default GalleryRow
