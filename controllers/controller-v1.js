const {Sequelize,QueryTypes} = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(config.development);

let heros = [
  {
  title: "Pasar Coding di Indonesia",
  content: 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum assumenda, voluptates maiores sequi quisquam pariatur voluptatem non consequuntur dolor architecto, unde magni enimitaque. Nostrum quod veniam quaerat modi ducimus accusamus dolorem, repellat iusto, autem, ex in nesciunt eos mollitia quo numquam deserunt pariatur aut fugiat id maiores enim.",
  image:"/img/1.jpg",
  type: "Alex Josua",
  postedAt: new Date ("Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"),
},
  {
  title: "Judul 2",
  content: 
    "1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum assumenda, voluptates maiores sequi quisquam pariatur voluptatem non consequuntur dolor architecto, unde magni enimitaque. Nostrum quod veniam quaerat modi ducimus accusamus dolorem, repellat iusto, autem, ex in nesciunt eos mollitia quo numquam deserunt pariatur aut fugiat id maiores enim.",
  image:"/img/1.jpg",
  type: "Alex Josua",
  postedAt: new Date ("Fri July 21 2024 20:15:00 GMT+0700 (Western Indonesia Time)"),
}];

async function renderHero(req,res){
  const heros = await sequelize.query (`SELECT * FROM public."Heros"`,{
    type: QueryTypes.SELECT,
  });
  // console.log(blogs);
  res.render("hero-list",{heros:heros});
}

function renderHeroDetail(req, res) {
  const id = req.params.id;
  const heroYangDipilih = heros[id];
  console.log(heroYangDipilih);
  res.render("hero-detail",{hero: heroYangDipilih})
}

function  posthero(req,res){
  const {title,content} =req.body
  console.log("judulnya adalah",title);
  console.log("content adalah",content);

  let image = "https://picsum.photos/200/100"

  let newhero = {
    title: title,
    content: content,
    image:"https://picsum.photos/200/100",
    type: "Christina Adelia",
    postedAt: new Date(),
  };

  heros.push(newhero);
  res.redirect("/hero");
}


function renderHeroEdit(req,res){
    const id = req.params.id;
    const heroYangDipilih = heros[id];
    console.log(heroYangDipilih);
    
    res.render("hero-edit", {hero:heroYangDipilih, index:id});
  }
  
function updatehero(req,res){
  const id = req.params.id;
  const {title,content} =req.body;
  console.log("judulnya baru",title);
  console.log("content baru",content);

  let image = "https://picsum.photos/200/100"

  let updatedhero = {
    title: title,
    content: content,
    image:image,
    type: "Christina Adelia",
    postedAt: new Date(),
  };

  heros[id]= updatedhero;

  res.redirect("/hero");
  }

function deletehero (req,res){
  const id = req.params.id;
  const heroYangDipilih = heros[id];
  console.log(heroYangDipilih);

  heros.splice(id,1);

  res.redirect("/hero")
}

module.exports = {
  renderHero,
  renderHeroEdit,
  posthero,
  renderHeroDetail,
  deletehero,
  updatehero
}