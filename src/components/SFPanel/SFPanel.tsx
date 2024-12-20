import React from 'react';

import Filtration from './Filtration/Filtration';
import PriorityFilter from './PriorityFilter/PriorityFilter';
import Search from './Search/Search';

import styles from './SFPanel.module.scss';

interface SFPanelProps {
  mode: boolean;
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChangeMode: () => void;
}

class SFPanel extends React.Component<SFPanelProps> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Filtration mode={this.props.mode} onChangeMode={this.props.onChangeMode} />
        <Search value={this.props.value} onChange={this.props.onChangeValue} />
        <PriorityFilter onClick={this.props.onClick} />
      </div>
    );
  }
}

export default SFPanel;
