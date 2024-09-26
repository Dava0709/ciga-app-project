import Siga from "../assets/images/components/sigaret.jpg";
import News from "../assets/images/components/news.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import backIcon from "../assets/images/1486485554-37ago-arrow-arrow-left-back-previous-direction-left_81173 (1).svg";
function CategoriesPage () {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        async function fetchCategories () {
            try{
                setIsLoading(true);
                const response = await axios.get(`https://00496995f54e980a.mokky.dev/category`)
                setCategories(response.data)
            }catch(e) {
                console.log(e);
            }finally { 
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    return (
        <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={backIcon} alt="back-button" />
                    Новости
                </div>
            </Link>
            {isLoading ? (<LoadingRow />) : (
                <div class="container">
                    <div class="category-row">
                        {categories.map((category) => (
                        <Link to="/smoking" class="category-item">
                                <img src={category.imageUrl} alt={category.name} class="category-item__img" />
                                <span class="category-item__title">{category.name}</span>
                        </Link>
                        ))}
                    </div>
                </div>  
            )}
     
        </section>
    );
}

export default CategoriesPage;