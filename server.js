var Twit = require('twit')

var T = new Twit({
  consumer_key:         'VViqlRsgG601PJAGhYQYr7pf4',
  consumer_secret:      'I6ovM7zLPKahPRkSMsxCETCW35vLVUthen45soz0JBmrYPd5NQ',
  access_token:         '3129675625-xYUHhDbijGpgMBuR1b7toLjzWJ8wVDkDOdUqES8',
  access_token_secret:  'NALYKWMfMVtYfsCxcmjyJSDonaQyg4LwB3wgpQ7gtGH4G',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var statusArray = [
'Check out my new web app #TreatMeAtHome sign up and make money as a service provider it is free treatmeathome.online',
'Want to work on your own time doing what you are good at? Sign up as a service provider for #TreatMeAtHome treatmeathome.online',
'I need service providers to join my new startup #TreatMeAtHome it is free and you can earn money on your time treatmeathome.online',
'Make some extra $$ doing work you want to do? Sign up for my start up #TreatMeAtHome it is free treatmeathome.online',
'Support my startup #TreatMeAtHome featured in the #TNW2017 Boost program. It is free to sign up treatmeathome.online'

];
var usa = ['-124.8','25.01','-64.42','48.75'];
var stream = T.stream('user')

stream.on('message', function (event) {
  if(event.target != null){
  if(event.target.screen_name != 'mastashake08'){
 	var user = event.target;
	}
	else{
	var user = event.source;
	}
 switch(event.event){
case 'follow':

  T.post('direct_messages/new',{screen_name:user.screen_name, text:"Thank you for the follow! I teach coding for free at my website https://jyroneparker.com I also do live streams subscribe on Youtube https://www.youtube.com/channel/UCFDt6Z1zxEF0f_aY0i6Bcfg lastly I own a startup called Treat Me At Home sign up today and make money part-time and full-time https://treatmeathome.online"}, function (err, data, response) {

})
break;
case 'favorited':
//T.post('friendships/create',{screen_name:user.screen_name,follow:true}, function(err,data,response){

//});
break;
case 'list_member_added':
//T.post('friendships/create',{screen_name:user.screen_name,follow:true}, function(err,data,response){

});
break;
default:
break;
 }}
})
var statuses = T.stream('statuses/filter', { locations:usa,track: 'technology, startups, on demand economy, laravel, web development, mobile development, game development, reactjs, vuejs, php, javascript, linux, command line, ubuntu, software engineering ' })
console.log(statuses);
statuses.on('tweet', function (tweet) {
  console.log(tweet)
  //T.post('friendships/create',{screen_name:tweet.user.screen_name,follow:true}, function(err,data,response){});
  T.post('favorites/create',{id:tweet.id},function(err,data,response){
    console.log(data);
  });

/*
var nameID = tweet.id_str;

var name = tweet.user.screen_name;

T.post('statuses/update', {in_reply_to_status_id: nameID, status: '@' + name + '  '+statusArray[Math.floor(Math.random()*statusArray.length)]}, function(err, data, response) {
  console.log(data);
});
*/
})
