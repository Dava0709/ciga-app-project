import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";

function PostList() {
    
    const [posts, setPosts] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        async function fetchPosts() {
            try{
                setIsLoading(true);
                const response = await axios.get('https://00496995f54e980a.mokky.dev/post');
                setPosts(response.data)
            }catch(error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);
    
    return (
        <div class="all-news-block">
            {isLoading ? (<LoadingPost />) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </>
            )}

        </div>
    );
} 

export default PostList;