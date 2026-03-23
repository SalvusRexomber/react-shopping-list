import { v1 as uuidv1 } from 'uuid'

export default function ListInput(props) {
    
    const listItem = props.items.map(itemElement => <li className="item" key={uuidv1()}>{itemElement}</li>)
    

    return(
        <div id="list-input" className="item-list">
            <ul>
                {listItem}
            </ul>
        </div>
    );
}