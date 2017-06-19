var Twit = require('twit')

var T = new Twit({
  consumer_key:         'VViqlRsgG601PJAGhYQYr7pf4',
  consumer_secret:      'I6ovM7zLPKahPRkSMsxCETCW35vLVUthen45soz0JBmrYPd5NQ',
  access_token:         '3129675625-xYUHhDbijGpgMBuR1b7toLjzWJ8wVDkDOdUqES8',
  access_token_secret:  'NALYKWMfMVtYfsCxcmjyJSDonaQyg4LwB3wgpQ7gtGH4G',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
/*
T.get('followers/ids',  function (err, data, response) {
  var followers = data;
  //
  // Start the prompt
  //
  //console.log(followers);
})

T.get('friends/ids', function(err,data,response){
  var following = data.ids;
    //console.log(following);

    for( var j=0; j<following.length; j++){
      console.log(following[j]);
    T.post('friendships/destroy',{user_id: following[j]},function(err,data,response){

      console.log(data);
    })

  }

})
*/

T.get('favorites/list',{screen_name:'mastashake08',count:200},function(err,data,response){
  var statuses = data;
  //console.log(statuses);
  for(var i=0; i < statuses.length; ++i){
    console.log(statuses[i].id);
    T.post('favorites/destroy',{id:statuses[i].id},function(err,data,response){

    })
  }
});
