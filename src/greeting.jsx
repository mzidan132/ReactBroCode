
function Greeting(props){

    if(props.isLoggedIn){
        return <h2>Welcome{props.username}</h2>
    }

    return(
        <p>NotLoggedIn</p>
    );
    //const welc = <h2>Welcome{props.username}</h2>
    //const fail = <h2>Login Plz</h2>
    //return (props.isLoggedIn ? welc : fail)
    //return(props.isLoggedIn ? <h2> Welcome{props.username} </h2> : <p> Plz Login </p>);
}

export default Greeting