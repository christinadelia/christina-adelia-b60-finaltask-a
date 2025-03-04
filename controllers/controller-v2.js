const {Sequelize, where} = require("sequelize");
const config = require("../config/config.json");
const { hero } = require ("../models");

const sequelize = new Sequelize(config.development)

async function renderhero(req,res) {
const heros = await hero.findAll({
    order: [["createdAt","DESC"]]
});

console.log("hasil",heros);
res.render("hero-list",{heros:heros});
}


async function renderheroDetail(req, res) {
    const id = req.params.id;

    const heroYangDipilih = await hero.findOne({
        where: {
            id:id,
        },
    });

    if(heroYangDipilih === null) {
        res.render("page-404")
    } else {

    console.log("V2",heroYangDipilih);

    res.render("hero-detail",{hero: heroYangDipilih});
    }
}


async function deletehero(req,res) {
    const {id} = req.params

    const deleteResult = await hero.destroy ({
        where: {
            id:id,
        }
    });

    console.log("result",deleteResult);

    res.redirect("/hero");
}

module.exports = {renderhero, renderheroDetail,deletehero};