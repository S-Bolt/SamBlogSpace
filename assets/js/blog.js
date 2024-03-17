$(document).ready(function() {

    const blogPosts = JSON.parse(localStorage.getItem(`blogKey`));//BlogKey is local key
    const $blogPostContainer = $(`#blogContainer`);//div id

    $.each(blogPosts, function(index, blogPost){

    const $postElement = $(`<div>`).addClass(`blog-post`);
    const $titleElement = $(`<h2>`).text(blogPost.title);
    const $contentElement = $(`<p>`).text(blogPost.content);
    const $usernameElement =$(`<p>`).text("Posted by " + blogPost.username);

    $postElement.append($titleElement, $contentElement, $usernameElement);

    $blogPostContainer.append($postElement);

    //styling

    $postElement.css({
        "border": "3px solid black",
        "margin-bottom": "20px"
    });

    });
});