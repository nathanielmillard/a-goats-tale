import {mainStories} from '../../exports/storyArrays.js'
 const StoryPage = (props) => {
   let testArray= [1,2,3,4,5,6,7,8,9,10]
   let brokenUpStory = mainStories[0].split('_')
   let finalStory = brokenUpStory.reduce((finalStory, currentSentence, index) => {
     if (testArray[index]) {
       finalStory = finalStory + currentSentence + testArray[index]
     }
     else {
       finalStory = finalStory + currentSentence
     }
     return finalStory
   }, '')
   return (
    <p>{finalStory}</p>
   )
 }

export default StoryPage
