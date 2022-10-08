import React, { Component } from "react";
import "./ListItem.css";

type ListItemProps = {
  label?: string,
  important: boolean,
  done: boolean,
  onDelete: () => void,
  onToggleDone: () => void,
  onToggleImportant: () => void
};
export default class ListItem extends Component<ListItemProps> {
  // state: Omit<ListItemProps, 'onToggleDone' | 'onDelete'> = {
  //   important: false
  // }
  // onImportant() {
  //   this.setState(() => ({
  //     important: !this.state.important
  //   }))
  // }
  render() {
    const { label, important, done, onDelete, onToggleDone, onToggleImportant } = this.props;
    let classNames = "app-list-item d-flex";
    let img = "https://img.icons8.com/color/48/000000/star.png";
    if (important) {
      classNames += " important";
      img = "https://img.icons8.com/windows/25/000000/star--v1.png";
    }
    if (done) {
      classNames += " doned";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label">{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-star btn-sm"
            type="button"
            onClick={onToggleDone}
          >
            <img
              src="https://img.icons8.com/color/48/000000/checkmark.png"
              alt="done"
              className="done"
            />
          </button>
          <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
            <img
              src="https://img.icons8.com/sf-regular/50/undefined/trash.png"
              alt="trash"
              className="trash"
            />
          </button>
          <button className="" type="button" onClick={onToggleImportant}>
            <img src={img} alt="star" className="star" />
          </button>
        </div>
      </div>
    );
  }
}
