var Twit = require('twit')

var T = new Twit({
  consumer_key:         'sT4YaweyRxy6GFHEdJ2Q1PD39',
  consumer_secret:      'O9ZmPXKjV6D289mTUs839X4smQBSpz4Ya34WQqjdNVEfU213bb',
  access_token:         '3129675625-d3rV8fHDPJkwn7Hn8pVRNta6eCbdFpvd0tOYdIs',
  access_token_secret:  'ib2hxMSqwvJXNPXzjue64H5B3xZriDpzRQrQHWkEH09YF',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var stream = T.stream('user')

stream.on('message', function (event) {
  console.log(event)
  if(event.target != null){
  if(event.target.screen_name != 'mastashake08'){
 	var user = event.target;
	}
	else{
	var user = event.source;
	}
 switch(event.event){
case 'follow':

  T.post('direct_messages/new',{screen_name:user.screen_name, text:"Thank you for the follow! I teach coding for free at my website https://jyroneparker.com I also do live streams subscribe on Youtube https://www.youtube.com/channel/UCFDt6Z1zxEF0f_aY0i6Bcfg"}, function (err, data, response) {
  console.log(data)
})
break;
case 'favorited':
T.post('friendships/create',{screen_name:user.screen_name,follow:true}, function(err,data,response){
  console.log(data)
});
break;
case 'list_member_added':
T.post('friendships/create',{screen_name:user.screen_name,follow:true}, function(err,data,response){
  console.log(data)
});
break;
default:
break;
 }}
})
