var apiKey = require('./../.env').apiKey;

function Github() {
}

Github.prototype.getUser = function(user){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#user').append('<h4>User: ' + response.login + '</h4>');
    $('#user-pic').html("<img src='" + response.avatar_url + "'/>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

Github.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repo){
      console.log(repo);
      $('#repos').append("<h4>Respository: <a href='" + repo.html_url + "'>" + repo.name + "</a><br><h5> Description: "+ repo.description + "</h5><br><h5> Creation Date: " + a + "</h5></h4>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
