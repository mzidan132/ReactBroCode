
function Listopt(props) {
    
    const category = props.category;
    const itemList = props.items;
    const list = itemList.map(item => <li key={item.id}>
         {item.name}:{item.cal}
         </li>)

    return (
        <>
        <h3>{category}</h3>
            <ol>{list}</ol>
        </>
    );
}
export default Listopt;