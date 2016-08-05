var apiKey = require('./../.env').apiKey;

function Github() {
}

Github.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
