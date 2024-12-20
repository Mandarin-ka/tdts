import React from 'react';

import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  value: number;
  severity: 0 | 1 | 2;
  placeholder: string;
  onChangeSeverity: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class RadioButton extends React.Component<RadioButtonProps> {
  render() {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={`t${this.props.severity}`} className={styles.label}>
          {this.props.placeholder}
        </label>
        <input
          onChange={this.props.onChangeSeverity}
          value={this.props.severity}
          type="radio"
          name="severity"
          checked={this.props.value === this.props.severity}
          id={`t${this.props.severity}`}
          className={styles.button}
        />
      </div>
    );
  }
}

export default RadioButton;
