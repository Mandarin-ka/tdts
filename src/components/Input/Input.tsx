import React, { ChangeEventHandler } from 'react';

import styles from './Input.module.scss';

interface Props {
  value: string;
  onChange: ChangeEventHandler;
}

class Input extends React.Component<Props> {
  render() {
    return <input type="text" className={styles.input} placeholder="Название" value={this.props.value} onChange={this.props.onChange} />;
  }
}

export default Input;
