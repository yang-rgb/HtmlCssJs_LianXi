function startServer(route,handle){
	route(handle,"request.url")
}

module.exports={
	startServer:startServer
}