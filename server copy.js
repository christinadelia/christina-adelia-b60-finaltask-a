const { equal } = require("assert");
const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");
const path = require("path");
const {formatDateToWIB, getRelativeTime} = require('./utils/time')

app.set("view engine", "hbs" );
app.set("views",path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("assets"));

hbs.registerPartials(__dirname + "/views/partials", function(err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
 
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime",getRelativeTime)

let heros = [
  {
    title: "judul",
    content: "dll",
    image:"/img/1.jpg",
    type: "Christina Adelia",
    postedAt: new Date("Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"),
  },
  {
    title: "judul",
    content: "dll",
    image:"/img/1.jpg",
    type: "Christina Adelia",
    postedAt: new Date("Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"),
  }
];

//hero LIST
app.get("/hero", (req, res) => {
  console.log(heros);
  res.render("hero-list",{heros:heros})
});

// CREATE hero PAGE
app.get("/hero-create", (req, res) => {
  res.render("hero-create")
});

app.get("/hero-list", (req, res) => {
  res.redirect("/hero")
});

// SUBMIT NEW hero
app.post("/hero-create", (req,res) => {
  // const title = req.body.title;
  // const content = req.body.content;
  const {title,content} =req.body
  console.log("judulnya adalah",title);
  console.log("content adalah",content);

  let image = "https://picsum.photos/200/100"

  let newhero = {
    title: title,
    content: content,
    image:image,
    type: "Christina Adelia",
    postedAt: new Date(),
  };

  heros.push(newhero);
  res.redirect("/hero");
} )

// hero DETAIL
app.get("/hero/:id", (req, res) => {
  const id  = req.params.id;
  const heroYangDipilih = heros[id]
  res.render("hero-detail")
});

// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id
  res.send(`Hello! ${id}`);
});

// REQUEST QUERY
app.get("/hero", (req, res) => {
  // const title = req.query.title
  // const type = req.query.type
  // const year = req.query.year

  const {title,type,year} = req.query
  // console.log(req.query);
  res.send(`hero saya ${title} dengan type ${type} tahun ${year}`);
});

app.listen(port, () => {
  console.log(`Personal web app listening on port ${port}`)
}) ;