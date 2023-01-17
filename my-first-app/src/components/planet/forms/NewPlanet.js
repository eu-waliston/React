import React, {Fragment, useState} from "react";

const initialState = {
    name: '',
    desc: '',
    img_url: '',
    link: '',
    desc_link_name: ''  
}

const NewPlanet = (props) =>{
     

    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (event) => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={fields.name} name="name" onChange={handleFieldsChange}/>
                </div>

                <div>
                    <label htmlFor="desc">Description: </label>
                    <input id="desc" type="text" value={fields.desc} name="desc" onChange={handleFieldsChange}/>
                </div>

                <div>
                    <label htmlFor="img_url">img_url: </label>
                    <input id="img_url" type="text" value={fields.img_url} name="img_url" onChange={handleFieldsChange}/>
                </div>

                <div>
                    <label htmlFor="link">link title: </label>
                    <input id="link" type="text" value={fields.link} name="link" onChange={handleFieldsChange}/>
                </div>

                <div>
                    <label htmlFor="desc_link_name">link: </label>
                    <input id="desc_link_name" type="text" value={fields.desc_link_name} name="desc_link_name" onChange={handleFieldsChange}/>
                </div>

                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default NewPlanet;
