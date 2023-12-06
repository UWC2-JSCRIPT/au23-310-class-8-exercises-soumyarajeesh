

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=1Jw96IYswQ7qyymaEwtxPHO8lVqB0XzX')
        .then(response => response.json())
        .then(data => {
            if (data.response.docs.length > 0) {
                const firstArticle = data.response.docs[0];
                document.getElementById('article-title').textContent = firstArticle.headline.main;
                document.getElementById('article-img').src = firstArticle.multimedia.length ? `https://www.nytimes.com/${firstArticle.multimedia[0].url}` : 'default_image.jpg';
                document.getElementById('article-snippet').textContent = firstArticle.snippet;
                document.getElementById('article-link').href = firstArticle.web_url;
            } else {
                console.log('No articles found');
            }
        })
        .catch(error => console.error('Error:', error));
});