const Tweet = (props) => {
    return <div>
        <h3>{props.username}</h3>
        <p>{props.name}</p>
        <p><small>{props.date}</small></p>
        <p>{props.message}</p>
        <hr></hr>
    </div>
}