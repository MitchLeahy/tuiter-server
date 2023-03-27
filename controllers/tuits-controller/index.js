import tuitsArray from './tuits.js';
let tuits = tuitsArray;



const tuitsController = (app) => {

    app.get('/tuits', (req,res) => {
        res.send(tuits)
    })
    app.get('/tuits/:tid', (req,res) => {
        const tuitId = parseInt(req.params.tid);
        const tuit = tuits.find(t => t._id === tuitId);
        res.send(tuit)
    })

    app.delete('/tuits/:tid', (req,res) => {
        res.send('Deleteing tuit')
        const tuitId = parseInt(req.params.tid);
       tuits = tuits.filter(t => t._id !== tuitId);

       res.send(200)


    })

    app.post('/tuits', (req,res) => {
        const newTuit = req.body;
        newTuit._id = (new Date()).getTime();
        newTuit.liked = false;
        newTuit.disLiked = false;
        newTuit.replies = 0;
        newTuit.retuits = 0;
        newTuit.likes = 0;
        newTuit.dislikes = 0;
        tuits.push(newTuit);
        res.send(200)
    })
    app.put('/tuits/:tid', (req,res) => {
        const tuitdIdToUpdate = req.params.tid;
        const updates = req.body;
        const tuitIndex = tuits.findIndex(
          (t) => t._id === tuitdIdToUpdate)
        tuits[tuitIndex] = 
          {...tuits[tuitIndex], ...updates};
        res.sendStatus(200);
      })
      


};

export default tuitsController;