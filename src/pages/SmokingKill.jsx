import Death from "../assets/images/components/smoking.webp"
import backIcon from "../assets/images/1486485554-37ago-arrow-arrow-left-back-previous-direction-left_81173 (1).svg";
import { Link } from "react-router-dom";
function SmokingKill () {
    return (
        <section class="mobile-block">
        <Link to="/categories" class="back-button">
            <div class="container">
                <img src={backIcon} alt="back-button" />
                Назад
            </div>
        </Link>
        <div class="container">
            <div class="post-details-block">
                <h3 class="news-card__title">КУРЕНИЕ УБИВАЕТ!</h3>
                <span class="news-card__date"></span>
                <p class="description">
                    КУРЕНИЕ УБИВАЕТ!
                </p>
                <img src={Death} alt="Smoke" />
                <span class="autor">источник: <strong class="light-success-text">Минестерство здравоохранения мира</strong></span> <br />
                <button class="tag-button">death</button>
            </div>
        </div>
    </section>
    );
}

export default SmokingKill;