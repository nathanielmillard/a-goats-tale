import {mainStories} from '../../exports/storyArrays.js'
 const StoryPage = (props) => {

   let brokenUpStory = mainStories[0].split('*')
   let namedStory = brokenUpStory.join(` ${props.name} `)
   // let namedStory = brokenUpStory.reduce((finalStory, currentSentence, index) => {
   //   if (testArray[index]) {
   //     finalStory = finalStory + currentSentence + testArray[index]
   //   }
   //   else {
   //     finalStory = finalStory + currentSentence
   //   }
   //   return finalStory
   // }, '')
   return (
    <p>{namedStory}</p>
   )
 }

export default StoryPage
