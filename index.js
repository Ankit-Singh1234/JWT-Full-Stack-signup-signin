const express=require("express")
const jwt=require("jsonwebtoken")
const JWT_SECRET="randomankitsingh12345"

const app=express();

//to parse the post body
app.use(express.json())

let users=[];

// app.post("/signup",(req,res)=>{
//     const username=req.body.username;
//     const password=req.body.password;

//     users.push({username,password})

//     res.json({ msg:"you have signed up"})

//     console.log(users)
// })



//to host the index.html as the localhost homepage with the linke of localhost


//adding the logger middleware which shows the method is called
function logger(req,res,next){
    console.log(`The ${req.method} is requested`)
    next()
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/signup",logger,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({username,password});

    res.json({
        msg:"You have signed up"
    })

    console.log(users);

})

app.post("/signin",logger,(req,res)=>{

    //first time to DB mein chek karna padega ki user valid hai ki nahi
    const username=req.body.username;
    const password=req.body.password;
    let foundUser=null;
    for(let i=0; i<users.length; i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i];
        }
    }

    //agar user mil gaya matlab credentials dsahi to ise singin karake token issue kardo
    if(foundUser){
        //token bana bhai ab
        const token=jwt.sign({username},JWT_SECRET);
        //bam gaya token 

        // ab isko respones me dede taki it will be stored in FrontEnd
        res.json({
            token:token
        })

    }
    else{
        res.json({
            msg:"Invalid username or Password!..."
        })
    }

    console.log(users)

})

function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET)

    if(decodedData.username){
        //modifying the request object and this modified request object also reflect the request object for all endpoints
        req.username=decodedData.username;
        next();
    }
    else{
        res.json({
            msg:"Invalid token, You are not logged in!...."
        })
    }
}


app.get("/me",logger,auth,(req,res)=>{
    
    let foundUser=null;
    for(let i=0; i<users.length;i++){
        if(users[i].username==req.username){
            foundUser=users[i];
        }
    }

    res.json({
        username:foundUser.username,
        password:foundUser.password
    })


})

app.listen(3000)
