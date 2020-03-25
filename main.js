document.querySelector('.btn').addEventListener('click', function () {
  let serch = document.serchForm.serchVal.value;
  let htmlReques = new XMLHttpRequest();

  // htmlReques.open('GET', `https://api.itbook.store/1.0/search/${serch}`)
  htmlReques.open('GET', `https://it-ebooks-api.info/v1/search/${serch}`)

  document.serchForm.reset();
  document.querySelector('.result').innerHTML = ''

  htmlReques.onload = () => {
    if (htmlReques.readyState == 4 && htmlReques.status == 200) {
      let data = JSON.parse(htmlReques.responseText.toLowerCase());
      // console.log(data)
      // console.log(data.total)
      // console.log(htmlReques.readyState)
      // console.log(htmlReques.status)

      if (data.total > 0) {
        let foundBooks = data.books.length;
        let allBooks = data.total;
        let arrBooks = data.books;
 document.querySelector('.result').innerHTML = `<p> first ${foundBooks} books from ${allBooks}</p>`
        
        for (let items of arrBooks) {
          document.querySelector('.result').innerHTML += `<a href="${items.url}" > ${items.title}</a><br>`
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
