import { types, Repeater } from 'react-bricks/astro'
import { Row, Hr, Section, Column } from '@react-email/components'

//=============================
// Local Types
//=============================

interface ArticleAuthorsProps {
  authors: types.RepeaterItems
}

//=============================
// Component to be rendered
//=============================
const ArticleAuthors: types.Brick<ArticleAuthorsProps> = ({ authors }) => {
  const getColumnWidth = (l: number) => {
    let width
    let maxWidth
    switch (l) {
      case 1:
        width = '100%'
        maxWidth = 'max-w-full'
        break
      case 2:
        width = '50%'
        maxWidth = 'max-w-[50%]'
        break
      case 3:
        width = '33%'
        maxWidth = 'max-w-[33%]'
        break
      case 4:
        width = '25%'
        maxWidth = 'max-w-[25%]'
        break
      case 5:
        width = '20%'
        maxWidth = 'max-w-[20%]'
        break
      case 6:
        width = '16%'
        maxWidth = 'max-w-[16%]'
        break
      default:
        width = ''
        maxWidth = ''
        break
    }

    return { maxWidth, width }
  }

  return (
    <Section>
      <Hr className="!border-gray-300 my-[16px]" />
      <Row>
        <Repeater
          propName="authors"
          items={authors}
          itemProps={{ authorsLength: authors?.length }}
          renderItemWrapper={(props, index) => {
            return index !== 0 && index < authors.length ? (
              <Column
                valign="middle"
                key={index}
                width={`${getColumnWidth(authors.length).width}`}
                className={getColumnWidth(authors.length).maxWidth}
              >
                <div className="relative">
                  <div className="absolute top-4 md:top-0 left-0 w-[1px] h-[100px] md:h-[48px] bg-gray-300"></div>
                </div>

                {props}
              </Column>
            ) : (
              <Column
                valign="middle"
                key={index}
                width={`${getColumnWidth(authors.length).width}`}
                className={getColumnWidth(authors.length).maxWidth}
              >
                {props}
              </Column>
            )
          }}
        />
      </Row>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
ArticleAuthors.schema = {
  name: 'email-article-authors',
  label: 'Email article authors',
  getDefaultProps: () => ({
    authors: [
      {
        name: 'Joe Doe',
        title: 'Software engineer',
        icons: [
          {
            linkUrl: '#',
          },
          {
            linkUrl: '#',
          },
          {
            linkUrl: '#',
          },
        ],
      },
      {
        name: 'Serena Jones',
        title: 'SEO Expert',
        icons: [
          {
            linkUrl: '#',
          },
          {
            linkUrl: '#',
          },
          {
            linkUrl: '#',
          },
        ],
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'authors',
      itemType: 'email-article-author',
      min: 1,
      max: 2,
    },
  ],
  sideEditProps: [],
}

export default ArticleAuthors
