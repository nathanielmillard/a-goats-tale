import './StoryPage.scss'
import {mainStories} from '../../exports/storyArrays.js'
 const StoryPage = (props) => {
   let brokenUpStory = mainStories[0].split('*')
   let namedStory = brokenUpStory.join(` ${props.name} `)
   brokenUpStory = namedStory.split('_')
   let finalStory = brokenUpStory.reduce((finalStory, currentSentence, index) => {
     if (props.words[index]) {
       finalStory = finalStory + currentSentence + props.words[index]
     }
     else {
       finalStory = finalStory + currentSentence
     }
     return finalStory
   }, '')
   let sections = finalStory.split('(')
   sections = sections.map((section, index) => {
     return <p key={index}>{section}</p>
   })
   return (
    <section className='StoryPage'>
      {sections}
      <h2> The End! </h2>
      <section className='Button Pannel'>
        <button onClick={props.saveStory}> Save This Story </button>
        <button> See Saved Stories </button>
      </section>
    </section>
   )
 }

export default StoryPage
