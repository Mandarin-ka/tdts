import React from 'react';

import { getTime } from '../../utils/getTime';
import { setItem } from '../../utils/localStorage';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import RadioWrapper from './../../components/RadioWrapper/RadioWrapper';
import { Task } from './../../types/task';

import styles from './TaskPanel.module.scss';

interface Props {
  onChangeMode: (e: boolean) => void;
}

interface State {
  name: string;
  description: string;
  severity: number;
}

class TaskPanel extends React.Component<Props, State> {
  state: State = { name: '', description: '', severity: 2 };

  onChangeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ name: e.target.value });
  };

  onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ description: e.target.value });
  };

  onChangeSeverity = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ severity: +e.target.value });
  };

  onClick = () => {
    if (this.state.name !== '') {
      const item: Omit<Task, 'id'> = {
        title: this.state.name.trim(),
        description: this.state.description.trim(),
        date: getTime(),
        done: false,
        severity: this.state.severity,
      };
      setItem(item);
      this.setState({ name: '', description: '', severity: 2 });

      this.props.onChangeMode(true);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.top__wrapper}>
          <Input value={this.state.name} onChange={this.onChangeName} />
          <RadioWrapper onChangeSeverity={this.onChangeSeverity} value={this.state.severity} />
          <button className={styles.add__button} onClick={this.onClick}>
            Добавить
          </button>
        </div>
        <TextArea onChange={this.onChangeDescription} value={this.state.description} />
      </div>
    );
  }
}

export default TaskPanel;
