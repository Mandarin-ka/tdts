import React from 'react';

import Items from './components/Items/Items';
import SFPanel from './components/SFPanel/SFPanel';
import TaskPanel from './components/TaskPanel/TaskPanel';
import { addPriority } from './utils/addPriority';

import './App.scss';
import MockButton from 'mock/MockButton';

class App extends React.Component {
  state = { shouldUpdate: false, isAll: false, priorities: [], search: '' };

  onChangeMode = () => {
    this.setState({ isAll: !this.state.isAll });
    this.setState({ shouldUpdate: true });
  };

  onChangeState = (value: boolean) => {
    this.setState({ shouldUpdate: value });
  };

  onClickButton = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    this.setState({ priorities: addPriority(this.state.priorities, +(e.target as HTMLInputElement).value) });
    this.setState({ shouldUpdate: true });
  };

  onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
    this.setState({ shouldUpdate: true });
  };

  render() {
    return (
      <div className="App">
        <TaskPanel onChangeMode={this.onChangeState} />
        <SFPanel
          value={this.state.search}
          onChangeValue={this.onChangeSearch}
          mode={this.state.isAll}
          onChangeMode={this.onChangeMode}
          onClick={this.onClickButton}
        />
        <Items
          search={this.state.search}
          shouldUpdate={this.state.shouldUpdate}
          onUpdate={this.onChangeState}
          mode={this.state.isAll}
          priorities={this.state.priorities}
        />
      </div>
    );
  }
}

export default App;
