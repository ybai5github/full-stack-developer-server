import importedUsers from "./users.js";
let users = importedUsers;


const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body; //req.body object allows you to access data in a string or JSON object from the client side.
    users = users.map(usr => usr._id === userId ?
            updatedUser : usr);
    res.sendStatus(200);
}


const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr => usr._id !== userId);
    res.sendStatus(200);
}


const createUser = (req, res) => {
    const newUser = req.body; // by default, don't know how to parse body,
    // so need to tell it in server.js -> app.use(express.json()); <- json parser
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}


const findUserById = (req, res) =>{
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findUsersByType = (type) => {
    return users.filter(u => u.type === type);
}


const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}


export default userController;