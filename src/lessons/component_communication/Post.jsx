import Comment from './Comment';

// Using destructuring by defining named props.
function Post({ user, title, description, comments }) {
    return (
        <>
            <article className="post">
                <h2>{title}</h2>
                <small>{user.name}</small>
                <p>{description}</p>
            </article>
            <div>
                {comments?.map(comment =>
                    <Comment
                        {...comment}
                        key={comment}
                    ></Comment>
                )}
            </div>
        </>
    );
}

export default Post;