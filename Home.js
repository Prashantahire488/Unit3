let div1 = document.getElementById("div1");
async function News(){
   let res = await fetch(`https://newsapi.org/v2/everything?q=world&from=2021-10-18&sortBy=popularity&apiKey=bca15799205646a794e7582a6a80b40a`)

   let data = await res.json()
   

    data = data.articles;
    console.log(data)

    data.forEach((news)=>{
        console.log(news)
        let title = document.createElement("div");
        title.innerText = news.title;
    
        let desc = document.createElement("p");
        desc.innerText = news.description;
 

        let img = document.createElement("img")
        img.src = news.urlToImage;


        let News1 = document.createElement("div")

        News1.onclick = function(){
            details(news)
        }

        news_box.append(title, desc, img)

        div1.append(news_box)
    })
}

News()



function details(news){
    localStorage.setItem("news",JSON.stringify(news))
    location.href = "news.html"
}

function Search(){
    let keywords = document.getElementById("search").value;

    console.log(keywords)
    
    localStorage.setItem("search",JSON.stringify())

    location.href = "search.html"
}
