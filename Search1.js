async function NewsShow()
{

    let Search = JSON.parse(localStorage.getItem("news"));

    Search = Search[0]

    console.log(n);

    let res = await fetch(`http://newsapi.org/v2/everything?q=${Search}&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=45312d0a4dff48abb48ed37a902c52e8`)

    let data = await res.json()
    
    data = data.articles;

    console.log(data);

    let News = document.getElementById("div1");

    data.forEach(News2 => 
    {
        let div = document.createElement("div");
        
        let img = document.createElement("img");
        img.src = i.urlToImage
        let title = document.createElement("div");

        title.append(News2.title);

        div.append(img,title);

        div.onclick = function()
        {
            if(localStorage.getItem("news")==null)
            {
                localStorage.setItem("news",JSON.stringify([]));
            }

            let news = JSON.parse(localStorage.getItem("news"));
    
            news.push(News2);


            localStorage.setItem("news",JSON.stringify(news));

            window.location.href = "News.html";
        }

        div1.append(div);

    });

}

NewsShow();
