import React from 'react';

class Item extends React.Component {

    updateData(e) {
        let value = e.currentTarget.value;
        let index = $(e.currentTarget).data("item-index");
        this.props.edit(index, value);
    }

    removeItemFromItems(event) {
        let key = $(event.currentTarget).data("item-index");
        this.props.remove(key)
    }

    render() {
        return (
            <div className="col-md-7 text-center">
                <input type={this.props.item.type}
                       className="input-sm"
                       value={this.props.item.value}
                       data-item-index={this.props.item.index}
                       onChange={this.updateData.bind(this)}/>

                <button className="left btn-sm"
                        onClick={this.removeItemFromItems.bind(this)}
                        data-item-index={this.props.item.index}>
                    Remove
                </button>
            </div>
        )
    }
}

export default Item;