import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as TodoItemActions from './store/actions'
import { RootState } from './store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { GotTodoItems } from './store/types';
import { TodoItem } from './models/TodoItem';

export interface IAppProps {
  todos: TodoItem[];
  loading: boolean;
}

type Props = IAppProps & DispatchProps;

export class App extends React.Component<Props> {
  public render() {
    let { getTodoItems } = this.props;
    let idk = getTodoItems();
    console.log(idk);
    return (
      <div>

      </div>
    );
  }
}


const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    todos: state.todoReducer.todoItems,
    loading: state.todoReducer.loading
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TodoItemActions, dispatch);

interface DispatchProps {
  getTodoItems: () => TodoItem[];
}

export default connect(
  mapStateToProps, //bring in the mapStateToProps function to inform redux of what you want to bring in and how to bring it in (to props)
  mapDispatchToProps
  //bring in specific actions into this component
)(App);