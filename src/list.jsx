
function Lists() {
    const fruits = ['apple', 'orange', 'banana'];

    const fruitsObj = [
        { id:1, name: "apple", cal: 99 },
        { id:2, name: "orange", cal: 45 },
        { id:2, name: "banana", cal: 44 }
      
    ];

    fruitsObj.sort((a,b)=> a.name.localeCompare(b.name));
    fruits.sort();
    //fruitsObj.sort((a,b)=>a.cal-b.cal);
    const lowcal = fruitsObj.filter(fruit => fruit.cal<50);

    const items = fruits.map(fruit => <li>{fruit}</li>);

    const fo = fruitsObj.map(fruit =><li key={fruit.id}>
        {fruit.name}:{fruit.cal}
        </li>);

    const filt = lowcal.map(lowcal =><li key={lowcal.id}>
        {lowcal.name}:{lowcal.cal}
        </li>);

    return (
        <>
            <ol>{fo}</ol>
            <ul>{items}</ul>
            <ul>{filt}</ul>
        </>
    );
}
export default Lists;