const posts = [
    { title: 'Post one', body: 'this is post one', createdAt: Date.now() },
    { title: 'Post two', body: 'this is post two', createdAt: Date.now() },
];

/*
function getPosts()
{
    setTimeout(()=> {
        let output = '';
        posts.forEach((post)=> {
            output += `<li> ${post.title} is created ${(Date.now()-post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
*/

let id = 0;
function getPosts()
{
    clearInterval(id);
    id = setInterval(()=> { // setinterval to update timer automatically
        let output = '';
        posts.forEach((post)=> {
            output += `<li> ${post.title} is created ${(Date.now()-post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/*
function createPosts(post) // post will not be visible on page coz DOM is painted before push is executed.
{
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}
*/

// we can overcome using a callback function.
function createPosts(post, callback) // callback is name of callback function.
{
    setTimeout(() => {
        posts.push({...post, createdAt: Date.now()});
        callback(); // we will call callback just after push, to push value on page.
    }, 2000);
}

function create4Posts(post, callback)
{
    setTimeout(() => {
        posts.push({...post, createdAt: Date.now()});
        callback();
    }, 3000);
}

//getPosts();

//createPosts( {title: 'Post three', body: 'this is post three'}); // this post three will not be visible on page, coz DOM is painted before this post is created. DO make it visible we have to go for async JS.

createPosts( {title: 'Post three', body: 'this is post three'}, getPosts); // we added getposts here as callback.

create4Posts( {title: 'Post four', body: 'this is post four', createdAt: Date.now()}, getPosts); 