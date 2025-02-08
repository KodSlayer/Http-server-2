const express = require("express")

function calculateSum(n) {
    let ans =0;
    for(let i=0;i<n;i++) {
        ans = ans+i;
    }
    return ans;
}

const app = express();

// req, res => request and response

app.get("/", function(req, res) {
    const n = req.query.n;   
    const ans = calculateSum(n)
    res.send("Hi your answer is " + ans);  
})

app.listen(3000);