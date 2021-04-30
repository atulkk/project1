const express = require("express")
const path = require("path");
const fs = require("fs")
const app = express();
port = 8000;

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')

app.set('views', path.join(__dirname,'views'))

app.get('/',(req, res)=>{
    
    const params = { }
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req, res)=>{

    const params = { }
    res.status(200).render('contact.pug',params)
})
app.get('/about',(req, res)=>{

    const params = { }
    res.status(200).render('about.pug',params)
})
app.get('/services',(req, res)=>{

    const params = { }
    res.status(200).render('services.pug',params)
})
app.post('/contact',(req, res)=>{
    //  console.log(req,res)
    name = req.body.name
    phone = req.body.phone
    email = req.body.email
    address = req.body.address
    desc = req.body.desc
      
    let outputtowrite = `the name of the client is ${name}, ${phone} number, ${email} id , residing a
     ${address}, more about him/her: ${desc}`
    fs.writeFileSync('output2.txt', outputtowrite)
     
    const params = {'message': 'your form has been submitted succesesfully'}
    res.status(200).render('contact.pug',params)
})


app.listen(port, ()=>{
    console.log(`this application started succesfully on port ${port}`)
});