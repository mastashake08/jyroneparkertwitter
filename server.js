var Twit = require('twit')

var T = new Twit({
  consumer_key:         'hCj9YbSEyaO2RidupBka1VEmJ',
  consumer_secret:      'K1SlDkSXMH7V7K6YNzfxSFOeh83JmRLHer4nDX4EaKBJiZri0p',
  access_token:         '3129675625-lXEFMO6oKkQtC5lCVBiP4TEPsCX9TgMePDroiTe',
  access_token_secret:  's3CbeXYMUQWymRsPK6q2rewBT1FzhdaWX1Rw8Rwb9XruV',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

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

  T.post('direct_messages/new',{screen_name:user.screen_name, text:"Thank you for the follow! I teach coding for free at my website https://jyroneparker.com I also do live streams subscribe on Youtube https://www.youtube.com/channel/UCFDt6Z1zxEF0f_aY0i6Bcfg"}, function (err, data, response) {

})
break;
case 'favorited':
T.post('friendships/create',{screen_name:user.screen_name,follow:true}, function(err,data,response){

});
break;
case 'list_member_added':
T.post('friendships/create',{screen_name:user.screen_name,follow:true}, function(err,data,response){

});
break;
default:
break;
 }}
})
var statuses = T.stream('statuses/filter', { track: 'webdev, laravel, mobile apps, nodejs, #blackpower,saas,hair dresser, nails,tutoring,babysitting, chef, massage, artist' })

statuses.on('tweet', function (tweet) {
  console.log(tweet)
  T.post('friendships/create',{screen_name:tweet.user.screen_name,follow:true}, function(err,data,response){});
  T.post('favorites/create',{id:tweet.id},function(err,data,response){
    console.log(data);
  });
/*
  var nameID = tweet.id_str;

var name = tweet.user.screen_name;

T.post('statuses/update', {in_reply_to_status_id: nameID, status: '@' + name + ' check out my new web app #TreatMeAtHome sign up and make money as a service provider!'}, function(err, data, response) {});
*/
})
