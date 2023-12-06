

const apiCar = '1Jw96IYswQ7qyymaEwtxPHO8lVqB0XzX'

fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cars&api-key=${apiCar}')

    .then(response => response.json())
    .then(data => {
        const firstArticle = data.response.docs[0];

        document.getElementById('article-title').textContent = firstArticle.headline.main;
        document.getElementById('article-img').src = firstArticle.multimedia.length ? `https://www.nytimes.com/${firstArticle.multimedia[0].url}` : 'default_image.jpg';
        document.getElementById('article-snippet').textContent = firstArticle.snippet;
        document.getElementById('article-link').href = firstArticle.web_url;
        // Display an additional item, e.g., the author
        document.getElementById('additional-item').textContent = `Author: ${firstArticle.byline.original}`;
    })
    .catch(error => console.error('Error:', error));




