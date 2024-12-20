import React from 'react';

import styles from './PriorityFilter.module.scss';

interface PrioritytFilterProp {
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

class PrioritytFilter extends React.Component<PrioritytFilterProp> {
  render() {
    return (
      <div className={styles.dropdown}>
        <h3>Приоритет:</h3>
        <div className={styles.container}>
          <label htmlFor="r1">Высокий</label>
          <input type="checkbox" name="priority" id="r1" value={0} className={styles.input} onClick={this.props.onClick} />
        </div>
        <div className={styles.container}>
          <label htmlFor="r2">Средний</label>
          <input type="checkbox" name="priority" id="r2" value={1} className={styles.input} onClick={this.props.onClick} />
        </div>
        <div className={styles.container}>
          <label htmlFor="r3">Низкий</label>
          <input type="checkbox" name="priority" id="r3" value={2} className={styles.input} onClick={this.props.onClick} />
        </div>
      </div>
    );
  }
}

export default PrioritytFilter;
