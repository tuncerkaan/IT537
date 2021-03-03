var prepare_request = function(){
    var car = {
        brand:"Alfa Romeo",
        model:"Giulia",
        series:"QV"
    };

    return car;
}

var send_request_to_server = function(data){
    $.post(server_host,data);
}

var display = function(response){
    return response.brand + " " + response.model  + " " + response.series;
}
/*---------------------------------------
//without async mechanism
----------------------------------------*/
request = prepare_request();
response = send_request_to_server(request);
display(response);

/*---------------------------------------
//with callback
----------------------------------------*/
request = prepare_request();
send_request_to_server(request, function(response) {
        display(response);
});