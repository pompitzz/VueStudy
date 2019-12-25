const getHeaderText = (state) => {
    return state.headerText;
};

const storedTodoItems = (state) => {
    return state.todoItems;
};

export { getHeaderText, storedTodoItems }