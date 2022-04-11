// import posts from "./tuits.js"
// let tuits = posts;
import * as tuitsDao from "../database/tuits-dao.js";

const tuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}


const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);

    // newTuit._id = (new Date()).getTime()+'';
    // newTuit.likes = 0;
    // newTuit.dislikes = 0;
    // newTuit.postedBy = {};
    // newTuit.postedBy.username = "Jose";
    // newTuit.image = "/images/jose.jpeg"
    // newTuit.liked= false;
    // newTuit.disliked= false;
    // tuits.push(newTuit);
    // res.json(newTuit);
}


// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updatedTuit = req.body;
//     tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
//     // console.log(updatedTuit);
//     res.sendStatus(200);
// }
//
// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;
//     tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }

export default tuitController;