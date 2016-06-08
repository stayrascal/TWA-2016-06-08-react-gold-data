import React from 'react';
import {render} from 'react-dom';
import Controller from '../components/Controller.jsx';
import EditPage from '../components/EditPage.jsx';
import PreviewPage from '../components/PreviewPage.jsx';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                type: 'date',
                value: '2016-12-11',
                index: 1465224234195
            }, {
                type: 'text',
                value: 'hello world',
                index: 1465224234196
            }]
        };
    }

    onEdit () {
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <Controller items={this.state.items} add={this.onEdit.bind(this)}/>
                <EditPage items={this.state.items} edit={this.onEdit.bind(this)}/>
                <PreviewPage items={this.state.items}/>
            </div>

        )
    }
}


render(<App />, document.getElementById('content'));

