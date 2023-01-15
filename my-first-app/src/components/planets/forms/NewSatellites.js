import React, {Fragment, useState} from "react";

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
                <h1>Adicionar Novos satelites</h1>
                <br />
                <div>
                    <label htmlFor="name">Satelite name: </label>
                    <input id="name" type="text" value={fields.name} name="name" onChange={handleFieldsChange}/>
                </div>
                <input type="submit" />
            </form>
        </Fragment>
    )
}

export default NewSatellites;