import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/store';

export default function Comments() {
  const comments = useSelector((state: RootState) => state.comments);

  return (
    <table className="table">
      <tbody>
        {comments.map((comment: string, index: number) => {
          return (
            <tr key={index}>
              <td>{comment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
