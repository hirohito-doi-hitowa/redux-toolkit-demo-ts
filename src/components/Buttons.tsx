import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCount } from '../store/slices/likesSlice';

export default function Buttons() {
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-sm">
        <button
          type="button"
          className="btn btn-light align-top"
          onClick={() => {
            dispatch(updateCount());
          }}
        >
          <i className="fa fa-thumbs-o-up" />
          Like
        </button>
      </div>
      <div className="col-sm">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            const elem = document.getElementById('comment');
            if (elem) {
              elem.focus();
            }
          }}
        >
          <i className="fa fa-comment-o" />
          Comment
        </button>
      </div>
    </div>
  );
}
