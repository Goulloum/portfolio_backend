const db = require("../model");
const { Op } = require("sequelize");
const Situation = db.Situation;



const addSituation = async (req, res) => {
    console.log(req.body.documents[0])
    let data = {
        name: req.body.name,
        img: req.body.img.map((img) => img.name),
        description: req.body.description,
        langages: req.body.langages.map((langage) => {langage.name}),
        date: req.body.date,
        documents: req.body.documents.map((document) => {document.name}),
        productions: req.body.productions.map((production) => {production.name}),
        type: req.body.type
    }

    



    const situation = await Situation.create(data)
    res.status(200).send(situation)
}

const getAllSituations = async (req, res) => {
    let situations = await Situation.findAll();
    res.status(200).send(situations)
}

module.exports = {
    addSituation,
    getAllSituations
}

// const addBlog = async (req, res) => {
//   let info = {
//     title: req.body.title,
//     post: req.body.post,
//     id_user: req.body.id_user,
//     img_post: req.body.img_post,
//     dateBlog: req.body.dateBlog,
//   };

//   const blogs = await Blog.create(info);
//   res.statu(200).send(blogs);
// };

// const getBlog = async (req, res) => {
//   let blogs = await Blog.findAll({
//     attributes: ["title", "post", "img_post", "dateBlog"],
//     order: [["dateBlog", "DESC"]],
//   });
//   res.status(200).send(blogs);
// };

// const getBlogsByCategories = async (req, res) => {
//   let blogs = await Blog.findAll({
//     attributes: ["title", "post", "img_post", "dateBlog"],
//     order: [["dateBlog", "DESC"]],
//     where: {
//       categories: req.body.categorie,
//     },
//   });
//   res.status(200).send(blogs);
// };

// const getRecentBlog = async (req, res) => {
//   let blogs = await Blog.findAll({
//     attributes: ["title", "dateBlog"],
//     limit: 3,
//     order: [["dateBlog", "DESC"]],
//   });
//   res.status(200).send(blogs);
// };

// const getAllCategories = async (req, res) => {
//   let categories = await Blog.findAll({
//     attributes: ["categories"],
//     group: ["categories"],
//   });
//   res.status(200).send(categories);
// };

// module.exports = {
//   addBlog,
//   getBlog,
//   getRecentBlog,
//   getAllCategories,
//   getBlogsByCategories,
// };
