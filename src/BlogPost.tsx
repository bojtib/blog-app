import React from 'react';
import {PostDTO} from "./api/models/PostDTO";

type Props = {
    post: PostDTO;
}

function BlogPost(props: Props) {
    const {post} = props;

    return <article>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <footer>Written by: {post.author}</footer>
    </article>
}

export default BlogPost;
