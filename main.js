window.onload = () => {
  document.querySelector('.btn').addEventListener('click', function () {
    let serch = document.serchForm.serchVal.value;
    let htmlReques = new XMLHttpRequest();
    htmlReques.open('GET', `https://it-ebooks-api.info/v1/search/${serch}`)
    document.serchForm.reset();
    document.querySelector('.result').innerHTML = '';
    htmlReques.onload = () => {
      if (htmlReques.readyState == 4 && htmlReques.status == 200) {
        let data = JSON.parse(htmlReques.responseText.toLowerCase());
        if (data.total > 0) {
          document.querySelector('.result').innerHTML = `<p>first ${data.books.length} books from ${data.total}</p>`
          for (let items of data.books) {
            document.querySelector('.result').innerHTML += `<a href="https://itbook.store/books/${items.isbn}" title="${items.description}"> ${items.title}</a><br>`
          }
        } else {
          document.querySelector('.result').innerText = 'no result'
        }
      } else {
        document.querySelector('.result').innerText = 'not today'
      }
    }
    htmlReques.send()
  })
};