import React from 'react';
import Card from './Card';
import Form from './Form';
import Comments from './Comments';

export default function Dashboard() {
  return (
    <div className="container-md ">
      <Card />
      <Form />
      <Comments />
    </div>
  );
}
