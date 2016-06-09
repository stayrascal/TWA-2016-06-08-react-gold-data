import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    render() {
        const {dispath, visibleTodos, visibilityFilter} = this.props;
        return (
            <div>
                <AddTodo onAddClick={text => dispath(addTodo(text))}/>
                <TodoList
                    todos={visibleTodos}
                    /*todos={[{
                        text: 'Use Redux',
                        completed:true
                     },{
                        text: 'Learn to connect it to React',
                        completed: false
                    }]}*/

                    onTodoClick={index => dispath(completeTodo(index))}
                    //onTodoClick={todo => console.log('todo clicked', todo)}
                />

                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter => dispath(setVisibilityFilter(nextFilter))}
                    //onFilterChange={filter => console.log('filter change', filter)}
                />
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf({
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    }).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(App);