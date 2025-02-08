const express  = require("express")

const app = express();

const users = [ {
    name: "yash",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.post("/", function(req,res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res) {
    for(let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//removing all the unhealthy kidneys
app.delete("/", function(req,res) {
    const newKidneys = [];
    for(let i=0 ; i<users[0].kidneys.length ; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({healthy: true})
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"})
})

app.get("/", function(req,res) {
    const yashKidneys = users[0].kidneys;
    const numberOfKidneys = yashKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<yashKidneys.length;i++) {
        if(yashKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    const numbeOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({numberOfKidneys,
        numberOfHealthyKidneys,
        numbeOfUnhealthyKidneys
    })
})

app.listen(3001);