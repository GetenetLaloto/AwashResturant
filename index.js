let express = require('express');
let parser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static('public/'));
app.use(parser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  const imagesPath = [];
  for(let i = 0; i < 10; i++){
    imagesPath.push(`images/slideshow/slideshow_img_${i}.jpg`);
  }
  res.render('pages/index', {imagesPath: imagesPath});
});

app.get('/*', (req, res)=>{
  res.redirect('/');
});


app.listen(PORT)
console.log(`listening on port ${PORT}`);
