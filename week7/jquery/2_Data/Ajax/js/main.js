/*var rootUrl = 'https://jsonplaceholder.typicode.com'


$.ajax({
    url:rootUrl + '/posts/1',
    method: 'GET'
}).then(function(response){
    console.log(response)
    $('#data').html('<div><p> Response TITLE:' + response.title +'</p><p> Response BODY: '+ response.body +'</p></div>')
});
*/

var data = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

$.post({
    url : rootUrl + '/posts',
    data: data
}).then(function(response){
    console.log(response)
    $('#data').html('<div><p> Response TITLE:' + response.title +'</p><p> Response BODY: '+ response.body +'</p></div>')
});
