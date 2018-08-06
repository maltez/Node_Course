const router = require('express').Router();

let users = [
    {
        id: 1,
        name: 'Nick',
        age: 38,
    },
    {
        id: 2,
        name: 'Alexey',
        age: 35,
    },
    {
        id: 3,
        name: 'Alexey',
        age: 45,
    },
];

router.get('/', (req, res) => {
    return res.json(Object.assign({ users }, { status: 'OK', code: 200 }));
});

router.get('/:id', (req, res) => {
    const { params: { id } } = req;
    const user = users.find(item => item.id == id);
    return user ? res.json(Object.assign(user, { status: 'OK', code: 200 }))
        : res.status(404).json({ status: 'NOT FOUND', code: 404 });
});

router.post('/', (req, res) => {
    const { body } = req;
    const user = Object.assign(body, { id: users[users.length - 1].id + 1 });
    users.push(user);
    res.json(Object.assign(user, { status: 'OK', code: 201 }));
});

router.delete('/:id', (req, res) => {
    users = users.filter(item => item.id != req.params.id);
    res.json({ status: 'OK', code: 202 });
});

module.exports = router;
