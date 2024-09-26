import PostList from "../components/PostList";

function Homepage() {
    return (
        <section class="mobile-block">
        <div class="mobile-block_header is-gray">
            все новости
        </div>
        <PostList />
    </section>
    );
}

export default Homepage;