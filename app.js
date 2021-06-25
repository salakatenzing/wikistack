const express = require ('express');
const morgan = require ('morgan');
const app = express();
const layout = require('./views/layout');
const {db, Page, User } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
    })




app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // res.send('hello world');
  res.send(layout());
})

const port = 8020;

const runApp = async() => {
  try {
    await Page.sync();
    await User.sync();
  } catch(err){
    console.log(err);
  }
app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
}
runApp();
