const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '/dist'));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info('==>  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});
