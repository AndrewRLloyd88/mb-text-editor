import React, { useState } from 'react';
import UseToolbarMode from './useToolbarMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface Props {
  id: string;
  icon?: IconDefinition;
}

export default function Button(props: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button
        id={props.id}
        className={isActive ? 'active' : 'inactive'}
        onClick={(e) => {
          setIsActive(!isActive);
          UseToolbarMode((e.target as HTMLElement).id);
        }}
      >
        {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.id[0]}
      </button>
    </div>
  );
}
