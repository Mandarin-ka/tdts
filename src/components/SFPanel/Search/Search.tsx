import React from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  value: string;
  onChange: (el: React.ChangeEvent<HTMLInputElement>) => void;
}

class Search extends React.Component<SearchProps> {
  state = { value: this.props.value };

  render() {
    return <input type="text" className={styles.input} placeholder="Искать..." onChange={this.props.onChange} />;
  }
}

export default Search;
