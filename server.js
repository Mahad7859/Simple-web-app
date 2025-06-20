const express = require("express");
const path = require("Path");
const app = express();
cosnt port = 3000;
app.use(express.static(path.join(__dirname, 'Public')));
App.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Simple web app listening at http://localhost:${port}`);
});
