var http = require("http")

function server1Request(request, response){
    response.end(`Dude, you're jacked!`)
}

function server2Request(request, response){
    response.end(`Do you even lift, bro?`)
}

var server1 = http.createServer(server1Request)
server1.listen(7000, function(){
    console.log(`Listening at http://localhost:7000/`)
})

var server2 = http.createServer(server2Request)
server2.listen(7500, function(){
    console.log(`Listening at http://localhost:7500/`)
})