import React from 'react';

class Item extends React.Component {

    updateData(e) {
        this.props.item.value = e.currentTarget.value;
        this.props.edit();
    }

    removeItemFromItems(event) {
        var key = $(event.currentTarget).data("item-index");
        this.props.remove(key)
    }

    render() {
        return (
            <div className="col-md-7 text-center">
                <input type={this.props.item.type} className="input-sm" value={this.props.item.value}
                       onChange={this.updateData.bind(this)}/>
                <button className="left btn-sm" onClick={this.removeItemFromItems.bind(this)} data-item-index={this.props.item.index}>
                    Remove
                </button>
            </div>
        )
    }
}

export default Item;