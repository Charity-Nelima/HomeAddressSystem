const express = require('express');
const router = express.Router();
const User = require('./models');

router.post('/', async(req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        idnumber: req.body.idnumber
    })
    try{
        const a1 = await user.save()
        console.log(a1)
        res.json(a1)
    }
    catch(err){
        res.send('did not work')
    }
});

router.get('/', async(req, res) => {
    try{
        const user = await User.find()
        res.json(user)
    }
    catch(err){
        res.send(err)
    }
});

router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }
    catch(err){
        res.send('error')
    }
});

router.patch('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        user.sub = req.body.sub
        const a1 = await user.save()
        res.json(a1)
    }
    catch(err){
        res.send(err)
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
    const a1 = await user.remove()
    res.json(a1)
    }
    catch(err){
        res.send('error')
    }
});

module.exports = router;