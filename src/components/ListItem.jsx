export default function ListItem(props) {
    
    const listItem = props.items.map(itemElement => 
    <li className="item" key={itemElement.id}>{itemElement.text}</li>)
    

    return(
        <div id="list-input" className="item-list">
            <ul>
                {listItem}
            </ul>
        </div>
    );
}