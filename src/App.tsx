import React from 'react';
import './App.css';
import BlogPosts from "./BlogPosts";
import {PostDTO} from "./api/models/PostDTO";

function App() {

    const blogPosts: PostDTO[] = [{
        id: "1",
        title: "Trip to Beirut",
        text: "Last summer I went to Beirut, a beautiful city in the middle of the Mediterranean Sea.",
        author: "your name",
    }, {
        id: "2",
        title: "Trip to Luxembourg",
        text: "Last week I went to Luxembourg, a beautiful city in the middle of the Western Europe.",
        author: "your name",
    }, {
        id: "3",
        title: "Trip to Seattle",
        text: "Next week I will visit Seattle, follow my blog to get the latest updates about my trip.",
        author: "your name",
    }];

    return (
        <div className="App">
            <header className="App-header">
                {"[Your Name Here]'s personal blog."}
            </header>
            <body className="App-body">
                <BlogPosts blogPosts={blogPosts.reverse()}/>
            </body>
        </div>
    );
}

export default App;
