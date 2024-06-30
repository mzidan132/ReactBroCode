
function Button(){

    let count = 0;

    const handle = (name) => console.log(`${name} ouch`);

    const handleEvent = (e) => e.target.textContent="ouch";

    const handleClick = () => {
        count++;
        console.log(`you clicked ${count} time`)
    }
    //return <img onClick(e)=>handleClick(e) src></img> and const handleClick = (e) =>e.target.style.display='none'
    return (
        <>
        <button onClick={() => handle('bro')}>Click me</button><br></br>
        <button onClick={() => handleClick()}>Click Count</button>
        <button onDoubleClick={(e) => handleEvent(e)}>Change</button>
        </>
    );
}
export default Button;