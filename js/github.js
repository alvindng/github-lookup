var apiKey = require('./../.env').apiKey;

function Github() {
}

Github.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repo){
      console.log(repo);
      $('#repos').append('<h4>Name: ' + repo.name +'<br><h5> Description: '+ repo.description + '</h5></h4>');
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
