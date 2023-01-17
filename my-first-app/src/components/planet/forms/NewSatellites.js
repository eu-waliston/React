import React, {Fragment, useState} from "react";
import './NewSatellites.css'

const initialState = {
    name: '',
}

const NewSatellites = (props) => {

    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (event) => {
        props.addSatellite(fields)
        event.preventDefault();
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h4>Adicionar Novos satelites</h4>
                <br />
                <div>
                    <label htmlFor="name">Satelite name: </label>
                    <input id="name" type="text" value={fields.name} name="name" onChange={handleFieldsChange}/>
                </div>
                <br />
                <input type="submit" className="btn" value={"Enviar"}/>
                <br />
                <br />
            </form>
        </Fragment>
    )
}

export default NewSatellites;