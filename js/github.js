var apiKey = require('./../.env').apiKey;

function Github() {
}

Github.prototype.getUser = function(user){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#user').append('<h3>User: ' + response.login + '</h3><h5>Name: ' + response.name + '</h5><h5>Email: ' + response.email + '</h5><h5>Followers: ' + response.followers + '</h5>');
    $('#user-pic').html("<img src='" + response.avatar_url + "'/>");
  }).fail(function(error){
    $('#results').html(error.responseJSON.message);
  });
};

Github.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repo){
      $('#repos').append("<h4><a href='" + repo.html_url + "'>" + repo.name + "</a><br><h5> Description: "+ repo.description + "</h5><h5> Creation Date: " + moment(repo.created_at).format('MMMM DD, YYYY') + "</h5></h4><br>");
    });
  }).fail(function(error){
    $('#results').html(error.responseJSON.message);
  });
};

exports.githubModule = Github;
