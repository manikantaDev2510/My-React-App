
import React, { Component } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  TODO: "TODO",
};

// Draggable Todo Item
function TodoItem({ text, index, moveItem }) {
  const [, dragRef] = useDrag(() => ({
    type: ItemTypes.TODO,
    item: { index },
  }));

  const [, dropRef] = useDrop(() => ({
    accept: ItemTypes.TODO,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      style={{
        padding: "8px",
        margin: "4px 0",
        backgroundColor: "#e0e0e0",
        cursor: "move",
      }}
    >
      {text}
    </div>
  );
}

class Todocard extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: [],
    };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.trim()) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.todo],
        todo: "",
      }));
    }
  };

  moveItem = (fromIndex, toIndex) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      const [movedItem] = list.splice(fromIndex, 1);
      list.splice(toIndex, 0, movedItem);
      return { list };
    });
  };

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div style={{ padding: "20px" }}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.todo}
              onChange={this.handleChange}
              placeholder="Add a task"
              style={{ marginRight: "10px" }}
            />
            <button type="submit">Add</button>
          </form>
          <div style={{ marginTop: "20px" }}>
            {this.state.list.map((item, index) => (
              <TodoItem
                key={index}
                text={item}
                index={index}
                moveItem={this.moveItem}
              />
            ))}
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default Todocard;