import React from 'react';
import { BaseControl } from 'react-map-gl';

import styles from './Popup.module.scss';

export default class Popup extends BaseControl {
  _render() {
    const { longitude, latitude } = this.props;

    const [x, y] = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      //   position: 'absolute',
      left: x + 34,
      top: y,
    };

    return (
      <div
        ref={this._containerRef}
        style={markerStyle}
        className={styles.popup}
      >
        <div className={styles.children}>{this.props.children}</div>
      </div>
    );
  }
}
