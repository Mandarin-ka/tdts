import React from 'react';

import styles from './TextArea.module.scss';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class TextArea extends React.Component<Props> {
  render() {
    return <textarea rows={3} className={styles.textarea} placeholder="Описание" value={this.props.value} onChange={this.props.onChange} />;
  }
}

export default TextArea;
