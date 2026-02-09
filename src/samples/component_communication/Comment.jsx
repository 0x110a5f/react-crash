// Accessing member via dot notation.
function Comment(props) {
    return (
        <section>
            <small>{props.user.name}</small>
            <p>{props.content}</p>
        </section>
    );
}

export default Comment;