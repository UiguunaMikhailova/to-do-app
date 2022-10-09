import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

type ListItemProps = {
  label: string,
  important: boolean,
  id: number,
  done: boolean
};
type ListProps = {
  posts: ListItemProps[];
  onDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
  onToggleImportant: (id: number) => void;
};

export default class List extends Component<ListProps> {
  onDelete;
  onToggleDone;
  onToggleImportant;
  constructor(props: ListProps) {
    super(props);
    this.onDelete = props.onDelete;
    this.onToggleDone = props.onToggleDone;
    this.onToggleImportant = props.onToggleImportant;
  }
  render() {
    return (
      <ul className="app-list list-group">
        {this.props.posts.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              <ListItem
                {...item}
                onDelete={() => this.onDelete(item.id)}
                onToggleDone={() => this.onToggleDone(item.id)}
                onToggleImportant={() => this.onToggleImportant(item.id)}
              />
            </li>
          );
      })}
      </ul>
    );
  }
}
