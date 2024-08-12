import React from 'react'
import { StylesViaJss } from 'substyle-jss'

import Advanced from './Advanced'
import AsyncGithubUserMentions from './AsyncGithubUserMentions'
import CssModules from './CssModules'
import Emojis from './Emojis'
import CutCopyPaste from './CutCopyPaste'
import MultipleTrigger from './MultipleTrigger'
import Scrollable from './Scrollable'
import SingleLine from './SingleLine'
import SingleLineIgnoringAccents from './SingleLineIgnoringAccents'
import SuggestionPortal from './SuggestionPortal'
import BottomGuard from './BottomGuard'
import CustomSuggestionsContainer from './CustomSuggestionsContainer'

const users = [
  {
    id: 'walter',
    display: 'Walter White',
    link: 'https://google.com/search?q=walter+white',
  },
  {
    id: 'pipilu',
    display: '皮皮鲁',
    link: 'https://google.com/search?q=pipilu',
  },
  {
    id: 'luxixi',
    display: '鲁西西',
    link: 'https://google.com/search?q=luxixi',
  },
  {
    id: 'satoshi1',
    display: '中本聪',
    link: 'https://google.com/search?q=satoshi1',
  },
  {
    id: 'satoshi2',
    display: 'サトシ・ナカモト',
    link: 'https://google.com/search?q=satoshi2',
  },
  {
    id: 'nobi',
    display: '野比のび太',
    link: 'https://google.com/search?q=nobi',
  },
  {
    id: 'sung',
    display: '성덕선',
    link: 'https://google.com/search?q=sung',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
    link: 'https://google.com/search?q=jesse',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
    link: 'https://google.com/search?q=gus',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
    link: 'https://google.com/search?q=saul',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
    link: 'https://google.com/search?q=hank',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
    link: 'https://google.com/search?q=skyler',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
    link: 'https://google.com/search?q=mike',
  },
  {
    id: 'lydia',
    display: 'Lydìã Rôdarté-Qüayle',
    link: 'https://google.com/search?q=lydia',
  },
]

export default function Examples() {
  return (
    <StylesViaJss>
      <div>
        <MultipleTrigger data={users} />
        <SingleLine data={users} />
        <SingleLineIgnoringAccents data={users} />
        <Scrollable data={users} />
        <Advanced data={users} />
        <CutCopyPaste data={users} />
        <CutCopyPaste data={users} disabledSource />
        <CssModules data={users} />
        <AsyncGithubUserMentions data={users} />
        <Emojis data={users} />
        <SuggestionPortal data={users} />
        <BottomGuard data={users} />
        <CustomSuggestionsContainer data={users} />
      </div>
    </StylesViaJss>
  )
}
