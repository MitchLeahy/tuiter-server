import people from './users.js'
let users = people

const UserController = (app) => {
    //add new controls here
   app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);

}

// This is how to handle a request by query parameter or (?...)
const findUsers = (req, res) => {
    const type = req.query.type
    if(type) {
      const usersOfType = users
        .filter(u => u.type === type)
      res.json(usersOfType)
      return
    }
    res.json(users)
  }
  
// finds a user by id when the id is passed in by (/:"id")
const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
      .find(u => u._id === userId);
    res.json(user);
  }

  const createUser = (req, res) => {
    // this grabs the body of the request which should be a json object
    const newUser = req.body;
    // this creates a new id for the new user
    newUser._id = (new Date()).getTime() + '';
    // this adds the new user to the array of users
    users.push(newUser);
    // this sends the new user back to the client in the form of a json object
    res.json(newUser);
  }
  
  const deleteUser = (req, res) => {
    const userId = req.params.uid;
    users = users.filter(u => u._id !== userId);
    res.sendStatus(200);
  }
  const updateUser = (req, res) => {
    //holds the id of the user to update
    const userId = req.params.uid;
    // holds the updates user object
    const updates = req.body;

    // this loops through the users array and updates the user with the matching id
    users = users.map((usr) =>
        usr._id === userId ?
            {...usr, ...updates} :
            usr
        );
        res.sendStatus(200);


  }


export default UserController