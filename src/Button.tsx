import React from 'react';
import UseToolbarMode from './useToolbarMode';

type Props = {
  id: string;
};

export default function Button(props: Props) {
  return (
    <div>
      <button
        id={props.id}
        onClick={(e) => {
          console.log('clicked');
          UseToolbarMode((e.target as HTMLElement).id);
        }}
      >
        {props.id[0]}
      </button>
    </div>
  );
}
