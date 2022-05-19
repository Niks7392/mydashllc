const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const user = require('./models/user.model')
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb+srv://niks7392:niks7392@cluster0.we50x.mongodb.net/Assignments?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(cors())


app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        // console.log(err)
        res.json({ status: 'error', error: 'Duplicate Email' })
    }
});

app.post('/api/login', async (req, res) => {
    const User =  user.findOne({
        email : req.body.email,
        password : req.body.password,
    })
    
    if(User){
        const token = jwt.sign({
            name : req.body.name,
            email : req.body.email,

        }, 'secret123')
        return res.json({status: 'ok', User : token})
    }else{
        return res.json({status : "error", User : false})
    }
})

// app.get('/api/barchart', async(req, res)=>{
//     const token = req.headers['x-access-token']
//     try{
//         const decoded = jwt.verify('token', 'secret123')
//         const email = decoded.email
//         const User = await user.findOne({email : email})


//         return res.json({status: 'ok', User : User.name})
//     }catch(error){
//         console.log(error)
//         res.json({status:'error', error: 'invalid token'})
//     }

// })

app.listen(3001, () => {
    console.log('server running')
})