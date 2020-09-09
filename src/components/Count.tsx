import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/store';

export default function Count() {
  const likesCount = useSelector((state: RootState) => state.likes.value);
  const commentsCount = useSelector((state: RootState) => state.comments.length);

  return (
    <div className="row reactions-count">
      <div className="col-sm" data-align="left">
        <i className="fa fa-thumbs-up" />
        {likesCount}
      </div>
      <div className="col-sm" data-align="right">
        {commentsCount} comments
      </div>
    </div>
  );
}
