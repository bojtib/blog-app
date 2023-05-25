import React from 'react';
import './App.css';
import BlogPosts from "./BlogPosts";
import {PostDTO} from "./api/models/PostDTO";
import BlogPostForm from "./BlogPostForm";

function App() {

    const yourName = "Bence";

    const [blogPosts, setBlogPosts] = React.useState<PostDTO[]>( [{
        id: "1",
        title: "Trip to Luxembourg",
        text: "Well, that was a surprise!\n\n" +
            "My favourite new country of 2016 is most probably going to be Luxembourg. " +
            "I absolutely adored the three days I spent there!\n\n" +
            "And I’ll be honest with you: I arrived not knowing much about it at all. I knew I was going to be visiting " +
            "Berlin and Paris, and with Luxembourg located right in the middle of them, " +
            "I couldn’t resist the chance to check out a new place.\n\n" +
            "One thing I did know, though, was that I didn’t want my visit to just be about adding a new country to my list. " +
            "I wanted to explore Luxembourg outside of Luxembourg City and take a lot of day trips around the country. " +
            "I did my research, learned that I could see a fair chunk of the small country during a three-day visit, " +
            "and booked my stay.\n\n" +
            "And now? I’d honestly put it in my top five favourite countries in Europe! Since returning, I’ve been singing " +
            "its praises to everyone I’ve spoken to. It was probably the highlight of my entire summer travels!",
        author: yourName,
        link: {
            title: "Read more",
            url: "https://www.neverendingfootsteps.com/i-love-luxembourg/"
        }
    }, {
        id: "2",
        title: "Trip to Beirut",
        text: "Last summer I went to Beirut, a beautiful city in the middle of the Mediterranean Sea.",
        author: yourName
    }, {
        id: "3",
        title: "Trip to Seattle",
        text: "Next week I will visit Seattle, follow my blog to get the latest updates about my trip.",
        author: yourName
    }]);

    const onFormSubmit = (post: PostDTO) => {
        setBlogPosts([post, ...blogPosts]);
    }

    return (
        <div className="App">
            <header className="App-header">
                {yourName + "'s Personal Travel Blog"}
            </header>
            <body className="App-body">
            <BlogPostForm onPostSubmit={onFormSubmit}/>
            <BlogPosts blogPosts={blogPosts}/>
            </body>
        </div>
    );
}

export default App;
