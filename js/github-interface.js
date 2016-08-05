var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){
  var testSearch = new Github();


  $('#search').submit(function(event){
    event.preventDefault();
    var search = $('#username').val();
    $('#username').val('');
    event.preventDefault();
    testSearch.getRepos(search);
  });
});
