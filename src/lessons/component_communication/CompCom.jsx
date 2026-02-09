import { posts } from "../../fixtures/posts";
import Post from "./Post";

function CompCom() {
    return (
        <>
            {/* Passing user as an JSON object */}
            <Post
                title={"How does it all began?"}
                description={"A lingering question humanity still to verify, how we came to existence?"}
                user={{ id: 42, name: "WhoAmI" }}
            ></Post>

            {posts.map(
                post => <Post
                    {...post}
                    key={post.title}
                ></Post>
            )}
        </>
    );
}

export default CompCom;