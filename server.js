const express = require('express')
var axios = require("axios").default;
const path = require('path');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    console.log(path.join(__dirname, 'public'));
    return res.sendFile('public/index.html',{root:__dirname});
})

app.get('/searchword', (req, res) => {
    res.send('Hello World!')
    console.log(req.params);

    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/',
        params: { entry: 'abscond' },
        headers: {
            'x-rapidapi-key': '57a33d8002msh2d8478326d29ae0p10ff24jsnae40a15ff959',
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}-http://localhost:3000`)
})