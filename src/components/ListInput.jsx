import { useState } from 'react'


export default function ListInput(props) {

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.addItems(inputValue);
        setInputValue("");
    }

    return(
        <div>
            <form id="form" className="input-group" onSubmit={onSubmit}>
                <div>
                    <input id="input" 
                    className="input" 
                    type="text" 
                    placeholder="Elem hozzáadása..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                </div>
                <div>
                    <button 
                    className="add-btn" 
                    id="button" 
                    type="submit"
                    >Hozzáadás</button>
                </div>
            </form>
        </div>
    )
}