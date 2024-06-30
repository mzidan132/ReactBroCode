import profile from './assets/rr.png'
function Card(){
    
    return(
    <div className="card">
            <img src={profile} alt="not found"></img>
            <h2>Brocode</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minima?</p>
            <p><button className="btn btn-primary">Hi</button></p>
        </div>
    );
}

export default Card;