import React from "react"
import Article from "./Article"
function ArticleList({posts}){

  const renderPosts = posts.map(post => {
    const icons = []
    if(post.minutes < 30){
      const time = Math.ceil(post.minutes / 5)
      for (let i=0; i<time; i++){
        icons.push("☕️")
      }
      return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={icons.join("") + " " + post.minutes}/>
    }
    else{  
      const time = Math.ceil(post.minutes / 10)
      for (let i=0; i < time; i++){
        icons.push("🍱")
      }
      return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={icons.join("") + " " + post.minutes}/>
    }
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