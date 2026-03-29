export default function ListItem(props) {
    
    const listItem = props.items.map(itemElement => 
    <li className="item" key={itemElement.id}>{itemElement.text} <button className="delete-btn" onClick = {() => props.deleteItem(itemElement.id)}>DELETE</button></li>);

    return(
        <div id="list-input" className="item-list">
            <ul>
                {listItem}
            </ul>
        </div>
    );
}