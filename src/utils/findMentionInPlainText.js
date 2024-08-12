import iterateMentionsMarkup from './iterateMentionsMarkup'

// For a given indexInPlainText that lies inside a mention,
// returns a the index of of the first char of the mention in the plain text.
// If indexInPlainText does not lie inside a mention, returns indexInPlainText.
const findMentionInPlainText = (value, config, indexInPlainText) => {
  let result = indexInPlainText
  let foundMention = false

  let markupIteratee = (
    markup,
    index,
    mentionPlainTextIndex,
    id,
    display,
    childIndex,
    lastMentionEndIndex
  ) => {
    if (
      mentionPlainTextIndex <= indexInPlainText &&
      mentionPlainTextIndex + display.length > indexInPlainText
    ) {
      result = {
        id,
        display,
      }
      foundMention = true
    }
  }
  iterateMentionsMarkup(value, config, markupIteratee)

  if (foundMention) {
    return result
  }
}

export default findMentionInPlainText
