// @flow
import React, { Component } from 'react';
import { range } from 'lodash';
import cx from './Stream.styl';

import MusicTrack from "../../components/MusicTrack";

export default class Stream extends Component {
  render() {
    return (
      <div className={cx('stream')}>
        <div className={cx("stream-top")}>
          <div className={cx("stream-top-title")}>
            <p className={cx("stream-top-title-header")}>
              Stream
            </p>
            <p className={cx("stream-top-title-desc")}>
              Hear the latest post from the people you’re following
            </p>
          </div>
        </div>
        <div className={cx('stream-content')}>
          {range(1,10).map((v, i) => <MusicTrack playerMode={false} albumImageUrl="https://pp.vk.me/c604817/v604817661/1a12c/s7ex-DUOodk.jpg"/>)}
        </div>
      </div>
    );
  }
}
