let express = require('express');
let parser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static('public/'));
app.use(parser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  console.log('/');
});

app.get('/*', (req, res)=>{
  console.log('*');
  res.redirect('/');
});


app.listen(PORT)
console.log(`listening on port ${PORT}`);
