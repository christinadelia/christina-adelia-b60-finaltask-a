const { equal } = require("assert");
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const methodOverride = require("method-override")

const {
  renderHero, 
  posthero,
  renderHeroDetail,
  renderHeroEdit,
  deletehero,
  updatehero,
} = require("./controllers/controller-v1")
const {formatDateToWIB, getRelativeTime} = require('./utils/time')

const port = 3000;
app.set("view engine", "hbs" );
app.set("views",path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("assets"));
app.use(methodOverride("_methode"))


hbs.registerPartials(__dirname + "/views/partials", function(err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
 
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime",getRelativeTime)


//hero LIST
app.get("/hero", renderHero);

// CREATE hero PAGE
app.get("/hero-create", (req, res) => {
  res.render("hero-create")
});

app.get("/hero-list", (req, res) => {
  res.redirect("/hero")
});

// SUBMIT NEW hero
app.post("/hero-create",posthero )


// RENDER EDIT 
app.get("/hero-edit/:id", renderHeroEdit);

// Submit/Save Edit 
app.post("/hero-update/:id",updatehero)


// DELETE EXISTING hero
app.delete("/hero/:id",deletehero);

// hero DETAIL
app.get("/hero/:id", renderHeroDetail);
 


// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id
  res.send(`Hello! ${id}`);
});

// REQUEST QUERY
app.get("/hero", (req, res) => {
  // const title = req.query.title
  // const  = req.query.type
  // const year = req.query.year

  const {title,type,year} = req.query
  // console.log(req.query);
  res.send(`hero saya ${title} dengan type ${type} tahun ${year}`);
});

app.listen(port, () => {
  console.log(`Personal web app listening on port ${port}`)
}) ;