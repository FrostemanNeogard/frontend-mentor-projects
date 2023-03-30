import { Children, PropsWithChildren, ReactNode } from "react"

// Custom component to display simple articles with a numbered list style
export function OrderedArticleList({ children }: PropsWithChildren) {
  const childrenArray = Children.toArray(children)
  return (
    <section className='mini-articles-section'>
      {childrenArray.map((component: ReactNode, index: number) => {
        // Format article index to add a leading zero if incremented index is less than 10
        const incrementedIndexString = (index + 1).toString()
        const formattedIndex = incrementedIndexString.padStart(2, '0')
        return (
          <article key={index}>
            <h1>{formattedIndex}</h1>
            {component}
          </article>
        )
      })}
    </section>
  )
}

// List item for the OrderedArticleList component
interface ArticleListItemProps {
  imageElement: ReactNode
  header: string,
  bodyText: string
}
export function ArticleListItem(props: ArticleListItemProps) {
  const { imageElement, header, bodyText } = props
  return (
    <>
      {imageElement}
      <h2>{header}</h2>
      <p>{bodyText}</p>
    </>
  )
}

// Article with only a header and bodytext
interface MiniArticleProps {
  header: string,
  bodyText: string
}
export function MiniArticle(props: MiniArticleProps) {
  const { header, bodyText } = props
  return (
    <article>
      <h2>{header}</h2>
      <p>{bodyText}</p>
    </article>
  )
}
