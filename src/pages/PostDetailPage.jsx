import { useEffect, useState } from "react";
import backIcon from "../assets/images/1486485554-37ago-arrow-arrow-left-back-previous-direction-left_81173 (1).svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
function PostDetailPage () {

    const {id} = useParams();
    const[post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try{
                setIsLoading(true);
                const response = await axios.get(`https://00496995f54e980a.mokky.dev/post/${id}`)
                setPost(response.data)
            }catch (error) {
                console.log(error);
            }finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);



    return(
        <section class="mobile-block">
        <Link to="/" class="back-button">
            <div class="container">
                <img src={backIcon} alt="back-button" />
                Назад
            </div>
        </Link>
        {isLoading ? (<LoadingDetail />) : (
                <div class="container">
                    <div class="post-details-block">
                        <h3 class="news-card__title">{post.title}</h3>
                        <span class="news-card__date">{post.date}</span>
                        <p class="description">
                            {post.description}
                        </p>
                        <img src={post.ImageUrl} alt={post.title} />
                        <span class="autor">источник: <strong class="light-success-text">{post.author}</strong></span>
                        <button class="tag-button">{post.category}</button>
                    </div>
                </div>
        )}
    </section>
    );
}

export default PostDetailPage;