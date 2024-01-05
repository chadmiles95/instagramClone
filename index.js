const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

document.getElementById("loadFeed").addEventListener("click", function(){
    const mainDiv = document.getElementById("mainDiv")
     mainDiv.innerHTML = ``
    
         renderPosts(posts)
})
       
function incrementLikes(postLikes) {
    return postLikes + 1;
}

function handleLikeButtonClick(postIndex, postLikes, liked) {
    if (!liked) {
        posts[postIndex].likes = incrementLikes(postLikes);
        posts[postIndex].liked = true; // Set liked to true after the first like
        renderPosts(posts);
    }
}


function renderPosts(posts){
    const mainDiv = document.getElementById("mainDiv")
     mainDiv.innerHTML = ``
         posts.forEach((post, index)  => {
         let postLikes = post.likes
         
         mainDiv.innerHTML += `<header>
        <img class = "logo" src="images/logo.png">
        <img class = "avatar" src=${post.avatar}> 
        </header>
        
        <section>
        
        <img class="avatar" src =${post.avatar}>
        <div class ="name">
        <h3> ${post.name} </h3>
        <p> ${post.location}</p>
        </div>
        </section>
        
        <section class = "main-pic">
            <img class = "post" src=${post.post}>
        </section>
        <footer>
            <div class = "icons-div">
                
                <button class="like-button" id="likeButton" onclick="handleLikeButtonClick(${index}, ${post.likes}, ${post.liked || false})" ${post.liked ? 'disabled' : ''}> 
                 <img class = "icons" src = "images/icon-heart.png"></button>
                <img class = "icons" src = "images/icon-comment.png">
                <img class = "icons" src = "images/icon-dm.png">
             </div>
            <p class = "interactions" > ${postLikes} Likes </p>
            <p class = "interactions" > ${post.username}        <span id="normal">  ${post.comment}</span> </p>
        </footer>`

   })
    
    
}


