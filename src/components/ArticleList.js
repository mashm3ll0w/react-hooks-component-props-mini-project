import React from "react"
import Article from "./Article"

function handlePost(postObj){
  const readingIcons = []
  let readingTime = 0
  if(postObj.minutes < 30){
    readingTime = Math.ceil(postObj.minutes / 5)
    for(let i = 0; i < readingTime; i++){
      readingIcons.push("☕️")
    }
  }
  else{
    readingTime = Math.ceil(postObj.minutes / 10)
    for(let i = 0; i < readingTime; i++){
      readingIcons.push("🍱")
    }
  }
  return <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} minutes={`${readingIcons.join("")} ${postObj.minutes}`}/>
}

function ArticleList({posts}){
  const renderPosts = posts.map(post => {
    return handlePost(post)
  })

  return(
    <main>
      {renderPosts}
    </main>
  )
}


// ArticleList
// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article

export default ArticleList