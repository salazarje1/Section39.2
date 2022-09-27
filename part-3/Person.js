const Person = (props) => {
    let msg;
    let name; 
    if(props.age >= 18) {
        msg = "please go vote!"
    } else {
        msg = 'you must be 18 to vote.'
    }

    if(props.name.length > 8){
        name = props.name.substring(0, 7);
    } else {
        name = props.name; 
    }


    return <div>
        <hr />
        <p>Learn some information about this person.</p>
        <h2>{name}</h2>
        <h3>{msg}</h3>

        <ul>
            {
                props.hobbies.map(h => (<li>{h}</li>))
            }
        </ul>

    </div>
}