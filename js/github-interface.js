var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){
  var testSearch = new Github();

  $('#search').submit(function(event){
    event.preventDefault();
    $("#user").empty();
    $("#user-pic").empty();
    $("#repos").empty();
    $('#results').show();
    var search = $('#username').val();
    $('#username').val('');
    testSearch.getUser(search);
    testSearch.getRepos(search);
  });
});
