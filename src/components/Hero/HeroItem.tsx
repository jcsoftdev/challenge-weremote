import React, { useMemo, useRef } from "react"

const divideText = (text: string) => {
  const strSplitedInThreeParts = text.trim().split(" ")
  const lengthOfWords = strSplitedInThreeParts.length
  const getWordsOfMiddleLength = (length: number) => {
    if (length < 3) return 0
    if (length === 3) return 1
    if (length < 8) return 2
    if (length < 11) return 3
    return 4
  }
  console.log({ strSplitedInThreeParts, lengthOfWords, getWordsOfMiddleLength })
  const lengthOfDividedWords =
    lengthOfWords > 5
      ? Math.ceil(lengthOfWords / 3)
      : Math.floor(lengthOfWords / 3)

  const firstText = strSplitedInThreeParts
    .slice(0, lengthOfDividedWords)
    .join(" ")
  const secondText = ` ${strSplitedInThreeParts
    .slice(
      lengthOfDividedWords,
      lengthOfDividedWords + getWordsOfMiddleLength(lengthOfWords)
    )
    .join(" ")} `
  const thirdText = strSplitedInThreeParts
    .slice(
      lengthOfDividedWords + getWordsOfMiddleLength(lengthOfWords),
      lengthOfWords
    )
    .join(" ")
  return [firstText, secondText, thirdText]
}

const HeroItem = ({
  description,
  imageUrl,
  isActive,
  isPrevious,
  subtitle,
  title,
}: {
  description: string
  imageUrl: string
  isActive: boolean
  isPrevious: boolean
  subtitle: string
  title: string
}) => {
  const texts = useMemo(() => {
    return divideText(title)
  }, [title])

  return (
    <div
      style={
        {
          backgroundImage: `url(${imageUrl})`,
        } as React.CSSProperties
      }
      className={`hero ${isPrevious ? "previous" : ""} ${
        isActive ? "active" : ""
      }`}
    >
      <div className="ui-wrapper">
        <h1 className="hero__title">
          <span>{texts[0]}</span>
          <span className="hero__title--pink">{texts[1]}</span>
          <span>{texts[2]}</span>
        </h1>
        <p className="hero__subtitle">
          <span>{subtitle}</span>
        </p>
        <p className="hero__description">
          <span>{description}</span>
        </p>
      </div>
    </div>
  )
}

export default HeroItem
