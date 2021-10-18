function search()
{
    let News = document.getElementById("news").value;

    if(localStorage.getItem("news")==null)
    {
        localStorage.setItem("news",JSON.stringify([]));
    }

    let srngsnews = JSON.parse(localStorage.getItem("news"));
    
    news.push(news);

    localStorage.setItem("news",JSON.stringify(news));

    window.location.href = "Search.html";
}

    



async function NewsShow()
{
    let res = await fetch("http://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=bca15799205646a794e7582a6a80b40a")

    let data = await res.json()
    
    data = data.articles;

    //console.log(data);

    let News1 = document.getElementById("News1");

    data.forEach(News2 => 
    {
        let div = document.createElement("div");
        
        let img = document.createElement("img");
        img.src = News2.urlToImage

        let Title = document.createElement("p");

        Title.append(News2.title);

        div.append(img,Title);

        div.onclick = function()
        {
            if(localStorage.getItem("news")==null)
            {
                localStorage.setItem("news",JSON.stringify([]));
            }

            let srngnews = JSON.parse(localStorage.getItem("news"));
           
            news.push(News2);


            localStorage.setItem("news",JSON.stringify(news));

            window.location.href = "News.html";
        }

        main.append(div);

    });

}

NewsShow();
