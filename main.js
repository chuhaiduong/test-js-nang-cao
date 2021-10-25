

const post = document.querySelector('#posts');
function getPosts() {
    axios.get('http://localhost:3000/post')
    .then(response => {
        console.log(response);
        const result = response.data.map(post =>{
            return /*html*/`
            <thead>
                <tr>
                    <td><p class="">${post.id}</p></td>
                    <td><p class="">${post.title}</p></td>
                    <td><p class="">${post.price}</p></td>
                    <td><p class="">${post.desc}</p></td>
                    <td><p class="">${post.author}</p></td>

                    <td><button onclick="removePost('${post.id}')" class="btn btn-danger">Delete</button>
                    <a href="./edit.html?id=${post.id}" class="btn btn-danger">Edit</a>

                    </td>

                    
                </tr>
            </thead>
            `
        }).join("");
        posts.innerHTML = result;
    });

}
 function removePost(id) {
    //  axios.delete(`http://localhost:3000/post/${id}`)
    //  .then(response => console.log(response)).then(()=>{
    //      confirm('ban co muon xoa khong?')
    //  }) 
    
    const isConfirm = confirm('ban co muon xoa khong')
    if(isConfirm){
        axios.delete(`http://localhost:3000/post/${id}`)
    }
}
getPosts();