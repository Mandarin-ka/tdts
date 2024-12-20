import React from 'react';

import Input from './RadioButton/RadioButton';

import styles from './RadioWrapper.module.scss';

interface RadioWrapperProps {
  value: number;
  onChangeSeverity: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class RadioWrapper extends React.Component<RadioWrapperProps> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Input severity={0} placeholder="Высокий" value={this.props.value} onChangeSeverity={this.props.onChangeSeverity} />
        <Input severity={1} placeholder="Средний" value={this.props.value} onChangeSeverity={this.props.onChangeSeverity} />
        <Input severity={2} placeholder="Низкий" value={this.props.value} onChangeSeverity={this.props.onChangeSeverity} />
      </div>
    );
  }
}

export default RadioWrapper;
