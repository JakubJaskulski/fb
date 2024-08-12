import './style.css';

export const Feed = () => {
    return (<div className="body">
        <div className="feed">
            <h1>POSTS</h1>
        </div>
        <div className="feed">
            <h1>Create post</h1>
            <textarea className="createPost" rows={5}/>
            <button className="createPost">Post</button>
        </div>
        <div className="feed">
            <div className="post">
                postpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpost
            </div>
            <div className="post">
                postpostpost
            </div>
            <div className="post">
                postpostpost
            </div>
            <div className="post">
                postpostpost
            </div>
            <div className="post">
                postpostpost
            </div>
        </div>
    </div>)
}