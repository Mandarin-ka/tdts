import React from 'react';
import { Task } from 'types/task';
import { getRandomTime } from 'utils/getTime';
import { getItems, setItem } from 'utils/localStorage';
import { getRandomString } from './mock';

import styles from './mock.module.scss';

interface Props {
  onUpdate: (el: boolean) => void;
}

class MockButton extends React.Component<Props> {
  onClick = () => {
    for (let i = 0; i < 100; i++) {
      const task: Omit<Task, 'id'> = {
        title: getRandomString('name'),
        description: getRandomString('descr'),
        done: !!Math.round(Math.random()),
        severity: Math.floor(Math.random() * 3),
        date: getRandomTime(),
      };

      setItem(task);

      this.props.onUpdate(true);
    }
  };

  render() {
    return (
      getItems().length === 0 && (
        <button onClick={this.onClick} className={styles.button}>
          Сгенерировать 100 задач
        </button>
      )
    );
  }
}

export default MockButton;
