

  
  const apiKey = 'duGGuARwVvRUMhOF74arkPJAFNp0E7sg';

  document.getElementById('best-books-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const date = document.getElementById('date').value;
    const formattedDate = `${year}-${month}-${date}`;

    fetch(`https://api.nytimes.com/svc/books/v3/lists/${formattedDate}/hardcover-fiction.json?api-key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const books = data.results.books.slice(0, 5);
            const booksHtml = books.map(book => `
                <div>
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <img src="${book.book_image}" alt="Cover of ${book.title}">
                    <p>Description: ${book.description}</p>
                </div>
            `).join('');
            document.getElementById('books-container').innerHTML = booksHtml;
        })
        .catch(error => console.error('Error:', error));
});