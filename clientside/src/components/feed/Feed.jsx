import {useState, useEffect} from 'react';
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import axios from "axios";


export default function Feed() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/6187fd0c632e1546dcb25112")
            console.log(res);
        };
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
              {/* {Posts.map(p=> (
                    <Post key = {p.id} post = {p}/>
              ))}*/}
            </div>
        </div>
    )
}