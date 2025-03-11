function loadCategories (){
// 1- fetch the data

fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

// 2- convert promise to json
.then((res)=>res.json())

// 3- sent dat to displayCategories
.then((data)=> displayCategories(data.categories));  
}

// category:"Music"
// category_id:"1001"

function loadVideos (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json()
).then((data) => displayVideos(data.videos));
}

// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }



function displayCategories (categories){
    // get the container
const categoryContainer = document.getElementById('category-container');

    // loop operation on array of object

    for( let cat of categories){
        // console.log(cat);

        // create element
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
    //  append the element
    categoryContainer.append(categoryDiv);

    } 
}

const displayVideos = (videos)=>{
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video=>{
        console.log(video);

        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
       <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[250px] object-cover"
            src="${video.thumbnail}"
            alt="" />
            <span class="absolute bottom-2 right-2 text-sm text-white bg-black px-2 rounded-lg">3hrs 56 min ago</span>
        </figure>
        <div class="flex gap-3 px-0 py-5">
            <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
            </div>
            <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="text-sm py-1 text-gray-400 flex gap-1">${video.authors[0].profile_name}<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt=""></p>
                <p class="text-sm py-1 text-gray-400">${video.others.views}</p>
            </div>
         
          </div>
        </div>
        `;
        videoContainer.append(videoCard);




    })

}

loadCategories();
loadVideos();