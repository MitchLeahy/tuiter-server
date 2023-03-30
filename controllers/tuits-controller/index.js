import * as tuitsDao from './tuits-dao.js'


const tuitsController = (app) => {
    app.get('/tuits', findTuits);
    app.delete('/tuits/:tid', deleteTuit);
    app.put('/tuits/:tid', updateTuit);
    app.post('/tuits', createTuit);

};

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
 }


const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
  }
  
const createTuit = async (req, res) => {
    const newTuit = req.body;

    newTuit.liked = false;
    newTuit.disLiked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    const insertedTuit = await tuitsDao
                               .createTuit(newTuit);
    res.json(insertedTuit);
  }
  const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
  }
  

export default tuitsController;