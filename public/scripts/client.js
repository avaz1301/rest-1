/* Object holding the request sequence */
var sequence = [
  {method: 'GET', path: '/people', load: null},
  {method: 'POST', path: '/people', load:{id: 1, name:'Sean', favoriteCity:'New York'} },
  {method: 'GET', path: '/last', load: null},
  {method: 'PUT', path: '/people/Sean', load:{favoriteCity:'Brooklyn'}},
  {method: 'GET', path: '/people/1', load: null},
  {method: 'DELETE', path: '/people/1', load: null},
  {method: 'GET', path: '/people', load: null}
];

/*
createRequest() passes data into submitRequest() and handles
API response on client side
*/
function createRequest(data){
  submitRequest(data.path, data.method, data.load, function(status, xhr){
    var result = (JSON.parse(xhr.responseText));
    console.log("Response: ");
    console.log(result);
    var elem = document.getElementById('response-text');
    elem.innerHTML += '<p><strong>RESPONSE:</strong> '+xhr.status+' '+JSON.stringify(result.body)+'</p>';
  })
};

/*
submitRequest() properly formats request and sends request
to proper endpoint
*/
function submitRequest(url, method, data, callback = undefined) {
  var elem = document.getElementById('response-text');
  elem.innerHTML += '<p><strong>REQUEST:</strong> '+method+'  '+url+'  '+ JSON.stringify(data)+'</p>';
  console.log(method+" "+url+" "+JSON.stringify(data));
  console.log();
  var _data = null;
  if(data){
     _data =  JSON.stringify(data);
  }
  var xhr = new XMLHttpRequest();
  // http://localhost:3001 for local testing
  //https://rest-1.herokuapp.com for heroku
  xhr.open(method, 'https://rest-1.herokuapp.com'+url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function(){
    //when request is complete and response status is 'OK'
    //fire off success callback
    if(xhr.readyState == 4 && xhr.status == 200){
      return callback(200, xhr);
    }else if(xhr.status == 400){
      return callback(400,xhr);
    }
  }
  xhr.send(_data);
};

/*
startRequestSequence() begins API calls in following order:
===========================================================
1)Make a GET request to /people
2)Make a POST request to /people
3)Please make the person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
4)Make a GET request to retrieve the object created in the previous request
5)Make a PUT request to /people and modify the attribute city to be “Brooklyn”
6)Make a GET request to /people/1
7)Make a DELETE request to /people/1
8)Make a GET request to /people
===========================================================
spacing out each request by 2 seconds
*/
function startRequestSequence(){
  var offset = 0;//initialize delay offset
  sequence.map(function(request){
      setTimeout(function(){
        console.log(request);
        createRequest(request);
      }, offset+2000);
      offset+=2000;
  });
  return;
};
