import React, {Component, Fragment} from "react";

export class TodoRow extends Component {
    render() {
        return (
            <Fragment>
                <tr>
                    <td>{ this.props.item.action}</td>
                    <td>
                        <input
                            type={"checkbox"}
                            checked={ this.props.item.done}
                            onChange={() => this.props.callback(this.props.item)}
                        />
                    </td>
                </tr>
            </Fragment>
        )
    }
}