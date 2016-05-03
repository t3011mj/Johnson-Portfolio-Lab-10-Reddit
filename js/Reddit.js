 
$ (function () {
   $.get("https://www.reddit.com/r/aww/.json", function(response) {

     response.data.children.forEach(function(parameter) {

     var author=parameter.data.author
     var title=parameter.data.title
     var thumbnail=parameter.data.thumbnail
     var url=parameter.data.url
     var comments=parameter.data.num_comments

     var container = $("<div>");
     var makeImage = $("<img>").attr('src', thumbnail).attr('width', 140).attr('height',140);
     var makeTitle = $("<h2>").text(title);
     var makeAuthor = $("<p>").text("Author: " + author);
     var makeURL = $("<a>").attr('href',url);
     var makeComments = $("<p>").text(comments + " Comments");
     $("#redditIMG").append(container,makeImage); 
     $("#redditText").append(container, makeTitle, makeAuthor, makeComments);
     makeTitle.wrap(makeURL);
});
});
});
  