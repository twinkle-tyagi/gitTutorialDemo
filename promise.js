const posts = [
    { title: 'Post one', body: 'this is post one', createdAt: Date.now() },
    { title: 'Post two', body: 'this is post two', createdAt: Date.now() },
];

/*
function getPosts()
{
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            let output = '';
            posts.forEach((post)=> {
                output += `<li> ${post.title} is created ${(Date.now()-post.createdAt)/1000} seconds ago</li>`;
            });
            document.body.innerHTML = output;

            resolve();
        }, 1000);
    })
}
*/

function getPosts()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let output = '';
            posts.forEach((post)=> {
                output += `<li> ${post.title} is created ${(Date.now()-post.createdAt)/1000} seconds ago</li>`;
            });
            document.body.innerHTML = output;
            resolve();

        }, 1000);
    });
}

// Promises
function createPosts(post) 
{
    return new Promise((resolve, reject) => {  // vreate new promise
        setTimeout(() => {
            posts.push({...post, createdAt: Date.now()});

            const error = false;
            if(!error)
            {
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    });
}

function deletePosts()
{
    return new Promise((resolve,reject) => {
        
        if(posts.length > 0)
        {
            setTimeout(()=> {
                posts.pop();
                resolve();
            },1000);
        }
        else{
            reject();
        }
    });
}

function updateActivityTime()
{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.createdAt = Date.now();
            resolve();
        },1000)
    });
}

/*
createPosts({title: 'post three', body: 'this is post three', createdAt: Date.now()})
.then(() => {
    getPosts().then( ()=>{
    deletePosts().then(()=>{
        getPosts().then();
        deletePosts().then(getPosts).catch(err => console.log(err));
    }).catch(err => console.log(err));
});
})
.catch(err => console.log(err));
*/

/*
createPosts({title: 'post three', body: 'this is post three', createdAt: Date.now()})
.then(() => {
    getPosts().then(()=>
    {
        deletePosts().then( getPosts().then(() =>{
            deletePosts().then(getPosts().then(() =>{
                deletePosts().then(getPosts().then(() =>{
                    deletePosts().then(getPosts().then()).catch(err => console.log('arrya empty'));
                })).catch();
            })).catch();
        })).catch(err => console.log('array is empty'));
    }).catch();
})
.catch(err => console.log(err));
*/


/*
const promise1 = Promise.resolve('hello world');
const promise2  = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'this one'));

Promise.all([promise1,promise2,promise3]).then((val) => console.log(val));
*/

//Promise.all([createPosts({title: 'post three', body: 'this is post three', createdAt: Date.now()}), updateActivityTime()])
//.then(getPosts().then(console.log(posts)));

Promise.all([createPosts({title: 'post three', body: 'this is post three', createdAt: Date.now()}), updateActivityTime()])
.then(() =>{
    getPosts().then( () =>
    {
        deletePosts().then(getPosts().then());
    })
});