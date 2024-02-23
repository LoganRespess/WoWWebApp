const express = require('express')


// Starting App
const app = express()

//routes
app.get('/', (req,res) =>{
	res.json({mssg: 'Welcome to the app mf'})
})

//listen for requests
app.listen(4500, () => {
	console.log('listening on port 4500')
})
