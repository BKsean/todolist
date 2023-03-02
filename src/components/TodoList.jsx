import React, {useContext} from "react";
import styled from "styled-components";
import TodoItem from "./TodiItem";
import {useTodoState} from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  
`;

function TodoList() {
    const todoList = useTodoState();

    return <TodoListBlock>
        {todoList.map(todo =>(
            <TodoItem id={todo.id} key={todo.id} text={todo.text} done={todo.done} />
        ))}
    </TodoListBlock>;
}

export default TodoList;