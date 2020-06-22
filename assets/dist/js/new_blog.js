function create_blog_post(title, date, content, blog_number) {

    let classes = ["blog-card-navy", "blog-card-white", "blog-card-info", "blog-card-grey", "blog-card-tan"];
    let blog_class = classes[blog_number % 5];

    let blog = document.createElement('div');
    blog.className = `blog-card ${blog_class}`;
    blog.innerHTML = `<div class="card-inline"><div class="card-header">${date}</div><div class="card-body"><h4 class="card-title">${title}</h4><p class="card-text">${content}</p></div></div>`;
    document.getElementById('blog').appendChild(blog);
}

window.onload = setTimeout(function () {
    // load data
    let data = JSON.parse(sessionStorage.getItem("data"));
    let updates = data[1];
    for (let i = 0; i < updates.length; i++) {
        let update = updates[i];
        create_blog_post(update[0], update[1], update[2], i);
    }
}, 1000);
