const users = {};

users.getUsers = (req, res) => res.json({message: [34,23]});

users.createUsers = (req, res) => res.json({message: 'Users guardada'});

users.deleteUsers = (req, res) => res.json({message: 'Users eliminada'});

module.exports = users;