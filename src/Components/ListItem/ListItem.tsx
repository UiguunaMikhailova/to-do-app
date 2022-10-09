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
  render() {
    const { label, important, done, onDelete, onToggleDone, onToggleImportant } = this.props;
    let classNames = "app-list-item d-flex";
    let img = "https://img.icons8.com/color/48/000000/star.png";
    let imgDone = "https://img.icons8.com/color/48/000000/checkmark.png";
    if (important) {
      classNames += " important";
      img = "https://img.icons8.com/windows/25/000000/star--v1.png";
    }
    if (done) {
      classNames += " completed";
      imgDone = "https://img.icons8.com/windows/25/000000/checkmark--v1.png";
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
              src={imgDone}
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
