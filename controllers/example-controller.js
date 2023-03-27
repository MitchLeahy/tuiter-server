const exampleController = (app) => {
    app.get('/hello', (req,res) => {
        res.send('hello')
    })
    
    app.get('/goodbye', (req,res) => {
        res.send('weeeeeeeeee')
    })
    
    app.get('/add/:a/:b', (req,res) => {
        //create variables from the passed params
        const A = parseInt(req.params.a)
        const B = parseInt(req.params.b)
        const C = A + B
        res.send(`${A} + ${B} = ${C}`)
    })
    app.post('', () => {})
    app.delete('', () => {})
    app.put('', () => {}) 
};


export default exampleController;