import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeStatus, addItem, removeItem, updateItem} from './actions';

import Controller from '../components/Controller.jsx';
import EditPage from '../components/EditPage.jsx';
import PreviewPage from '../components/PreviewPage.jsx';

class App extends Component {

    renderContent(dispatch, items, status) {
        if (status === 'edit') {
            return <EditPage
                items={items}
                edit={(index, value) => dispatch(updateItem(index, value))}
                remove={index => dispatch(removeItem(index))}
            />
        } else {
            return <PreviewPage
                items={items}
            />
        }
    }

    render() {
        const {dispatch, items, status} = this.props;
        return (
            <div>
                <Controller
                    items={items}
                    add={type => dispatch(addItem(type))}
                    changeStatus={status => dispatch(changeStatus(status))}
                />
                {this.renderContent(dispatch, items, status)}
            </div>

        )
    }
}

App.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired
    }).isRequired).isRequired,
    status: PropTypes.string.isRequired
};

function select(state) {
    return {
        items: state.items,
        status: state.status
    }
}


export default connect(select)(App)