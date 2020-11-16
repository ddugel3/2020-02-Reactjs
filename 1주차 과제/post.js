let postInput = document.querySelector("textarea");
let timeline =document.querySelector("#timeline");


window.onload = async () => {
    const postResponse = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
        method: 'get',
    });
    const posts = await postResponse.json();

    for (let i = 0 ; i < posts.length; i++) {
        console.log(posts[i]);
        posted(posts[i].owner, posts[i].content);
    }
};

/*
const postClick = async () => {
    post('nickname',postInput.value)
    await  fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'post',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({content: postInput.value, owner : 'nickname',}),
    });
};*/

const postClick = async () => {
    post('nickname',postInput.value);
    /*posted('nickname',postInput.value);*/
}



const post = (name, description) => {
    // if(postInput.value == "") alert("내용을 작성해주세요");

    let container = document.createElement('div');
    let owner = document.createElement('h1');
    let content = document.createElement('p');
    owner.appendChild(document.createTextNode((name)));
    content.appendChild(document.createTextNode((description)));

    container.setAttribute('class', 'left');
    container.appendChild(owner)
    container.appendChild(content)

    //timeline.appendChild(container)
    timeline.insertBefore(container, timeline.children[0]);
    console.log(container)
}

const posted = (name, description) => {
    // if(postInput.value == "") alert("내용을 작성해주세요");

    let container = document.createElement('div');
    let owner = document.createElement('h1');
    let content = document.createElement('p');

    owner.appendChild(document.createTextNode((name)));
    content.appendChild(document.createTextNode((description)));

    container.setAttribute('class', 'right');
    container.appendChild(owner)
    container.appendChild(content)

    //timeline.appendChild(container)
    timeline.insertBefore(container, timeline.children[0]);
    console.log(container)
}