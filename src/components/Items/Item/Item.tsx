import React from 'react';

import { changeItemStatus } from '../../../utils/localStorage';
import { Task } from './../../../types/task';

import style from './Item.module.scss';

interface Props {
  task: Task;
  onUpdate: (e: boolean) => void;
  deleteItem: (id: number) => void;
}

class Item extends React.Component<Props> {
  toggleStatus = () => {
    changeItemStatus(this.props.task.id);
    this.props.onUpdate(true);
  };

  onClick = () => {
    this.props.deleteItem(this.props.task.id);
  };

  render() {
    return (
      <div className={style.wrapper}>
        <div className={`${style.marker} ${style['t' + this.props.task.severity]}`} />
        <div className={style.container + ` ${this.props.task.done ? style.active : ''}`}>
          <input type="checkbox" checked={this.props.task.done} className={style.check} onClick={this.toggleStatus} />
          <div className={style.description__block}>
            <h1 className={style.name}>{this.props.task.title}</h1>
            {this.props.task.description && <p className={style.description}>{this.props.task.description}</p>}
          </div>
          <div className={style.date}>{this.props.task.date}</div>
          <div className={style.delete} onClick={this.onClick}>
            Удалить
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
