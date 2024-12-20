import React from 'react';

import { getItems } from '../../utils/localStorage';
import { deleteItem } from '../../utils/localStorage';
import { Task } from './../../types/task';
import Item from './Item/Item';
import { filterByPriority, searchByNameAndDescription, sortByCompleteAndPriority } from 'utils/sorting&filter';

import styles from './Items.module.scss';
import MockButton from 'mock/MockButton';

interface Props {
  mode: boolean;
  search: string;
  priorities: number[];
  shouldUpdate: boolean;
  onUpdate: (e: boolean) => void;
}

interface State {
  items: Task[];
}

class Items extends React.Component<Props, State> {
  state = { items: [] };

  setElements = () => {
    let items = getItems();

    if (this.props.mode === true) {
      items = items.filter((e: Task) => !e.done);
    }
    if (this.props.priorities.length > 0) {
      items = filterByPriority(items, this.props.priorities);
    }

    if (this.props.search.length > 0) {
      items = searchByNameAndDescription(items, this.props.search);
    }

    items = sortByCompleteAndPriority(items);
    this.setState({ items: items });
  };

  componentDidMount() {
    this.setElements();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.shouldUpdate !== this.props.shouldUpdate) {
      this.setElements();
      this.props.onUpdate(false);
    }

    if (
      prevProps.mode !== this.props.mode ||
      prevProps.priorities.length !== this.props.priorities.length ||
      prevProps.search !== this.props.search
    ) {
      this.setElements();
    }
  }

  deleteItem = (index: number) => {
    deleteItem(index);
    this.setElements();
  };

  render() {
    return this.state.items.length > 0 ? (
      <div className={styles.items}>
        {this.state.items &&
          this.state.items.map((e: Task) => <Item key={e.id} task={e} onUpdate={this.props.onUpdate} deleteItem={this.deleteItem} />)}
      </div>
    ) : (
      <div className="items">
        <p className={styles.unfound}>Задачи не найдены</p>

        <MockButton onUpdate={this.props.onUpdate} />
      </div>
    );
  }
}

export default Items;
