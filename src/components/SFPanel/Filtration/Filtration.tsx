import React from 'react';

import styles from './Filtrarion.module.scss';

interface Props {
  mode: boolean;
  onChangeMode: () => void;
}

class Filtration extends React.Component<Props> {
  render() {
    return (
      <div className={styles.wrapper} onClick={this.props.onChangeMode}>
        <label htmlFor="filter" className={styles.label}>
          Только не выполненные
        </label>

        <input type="checkbox" className={styles.input} id="filter" checked={this.props.mode} />
      </div>
    );
  }
}

export default Filtration;
