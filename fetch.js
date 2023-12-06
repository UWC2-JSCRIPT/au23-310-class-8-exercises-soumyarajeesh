// create api-key.js file with const API_KEY="your_api_key" in this same directory to use


//const API_KEY = "YduGGuARwVvRUMhOF74arkPJAFNp0E7sg"; 
//const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${My_API}`;
//const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

//const date = '2022-03-12'
//const list = 'hardcover-fiction'
//const booksurl = 'https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${My_API}'


// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const My_API= 'duGGuARwVvRUMhOF74arkPJAFNp0E7sg'
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
