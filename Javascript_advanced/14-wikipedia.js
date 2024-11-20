function createElement(data) {
  const paragraph = document.createElement('p');
  const pageBody = document.querySelector('body');

  paragraph.textContent = data;

  pageBody.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const wikiURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  const req = new XMLHttpRequest();

  req.open('GET', wikiURL);

  req.onload = () => {
    if (req.status === 200) {
      const data = JSON.parse(req.responseText);
      // gets extract from first (only) page in json response
      const extract = Object.values(data.query.pages)[0].extract;

      callback(extract);
    } else {
      console.error(`Error: ${req.status}`);
    }
  }

  req.send();
}

queryWikipedia(createElement);
