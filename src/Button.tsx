import React from 'react';
import UseToolbarMode from './useToolbarMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

type Props = {
  id: string;
  icon?: IconDefinition;
};

export default function Button(props: Props) {
  return (
    <div>
      <button
        id={props.id}
        onClick={(e) => {
          UseToolbarMode((e.target as HTMLElement).id);
        }}
      >
        {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.id[0]}
      </button>
    </div>
  );
}
