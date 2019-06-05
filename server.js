// Start up node server using express. 
// The web server listens for interactions on static files, 
// which are the index.html and news.html pages.

const express = require('express');
const app = express();

app.use(express.static('static_files'));

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});