import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Link } from 'react-router-dom';

const Start = (): JSX.Element => {
  return (
    <Panel title="Openbaar register">
      <ul className="space-left">
        <li>
          <Link to="/examens/zoek-examen">Zoek op code (12345E of C)</Link>
        </li>
        <li>
          <Link to="/examenvakken">Toon gegevens van een examenvak</Link>
        </li>
        <li>
          <Link to="/persoon-zoeken">
            Toon studieresultaten van een persoon door het NKC-12345 nummer in te voeren
          </Link>
        </li>
      </ul>
    </Panel>
  );
};

export default Start;
