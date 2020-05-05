var express = require('express')

app = express()

app.use(express.static('./dist/client'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/client/' }
    );
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Angular server is listening...');
});