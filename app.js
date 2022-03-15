const express=require('express')
const port=3000;
const app=express();
const db=require('./db')

app.use(express.json());

const users=require('./routes/verifylogin')
app.use('/verifylogin',users)


app.listen(port,()=>{
    console.log(`Server listening at ${port}`)
}
)