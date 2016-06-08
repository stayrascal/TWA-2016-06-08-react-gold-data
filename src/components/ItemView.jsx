import React from 'react'

class ItemView extends React.Component {

    render() {
        return (
            <div className="col-md-7">
                <label class="list-inline">{this.props.item.type}:<span>{this.props.item.value}</span></label>
            </div>
        )
    }
}

export default ItemView;