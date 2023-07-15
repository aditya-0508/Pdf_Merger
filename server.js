const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const {mergePdfs} = require('./merge')

const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get("/", (req, res) => {//get is used to create the request
  res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=>{//accepts the request 
    console.log(req.files)
    await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))//gives a new path of the merged pdf 
    res.redirect("http://localhost:3000/static/merged.pdf")
})

app.listen(port, () => {
  console.log(`The application is successfully running on the port ${port}`)
})


//here multer is used it is a nodejs middleware which is used for handling the multipart form/data 
//where multipart is typically used for uploadinga and sending the data  
//if u see the max part is the same as that of a normal express 
