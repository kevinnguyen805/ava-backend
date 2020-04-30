const express = require('express')
const router = express.Router()
const Users = require('../users/usersModel.js')
// Todo: add notesModel 

//TODO: GET all users ---- /api/users
router.get('/', (req, res) => {
     Users
     .findAll()
     .then(users => {
          res.status(201).json(users)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to retrieve all users. Please try again."})
     })
})

//TODO: GET user by id --- /api/users/:id
router.get('/:id', (req, res) => {
     const id = req.params.id 

     Users
     .findById(id)
     .then(user => {
          res.status(201).json(user)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to retrieve user by ID"})
     })
})

//TODO DELETE user --- /api/users/:id
router.delete('/:id', (req, res) => {
     const id = req.params.id 

     Users
     .remove(id)
     .then(user => {
          res.status(200).json(user)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to delete user by ID"})
     })
})



//TODO UPDATE user 
router.put('/:id', (req, res) => {
     const id = req.params.id 
     const userInfo = req.body 

     Users
     .update(id, userInfo)
     .then(updated => {
          res.status(200).json(updated)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to update user."})
     })
})



module.exports = router;