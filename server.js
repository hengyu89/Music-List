const express = require('express');

const app = express();
const PORT = 3001;
const path = require('path');

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3000/images/cat.jpg
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
