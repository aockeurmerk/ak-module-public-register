import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Link } from 'react-router-dom';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { useExamSpecialtiesQuery } from '../generated/graphql';
import { toDutchDate } from '@erkenningen/ui';

const ExamSpecialtiesList = (): JSX.Element | null => {
  const { showGrowl } = useGrowlContext();
  const { loading, data } = useExamSpecialtiesQuery({
    variables: { input: { examenInstellingId: 1, validOnly: true } },
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Examendetails ophalen',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van examen details. Controleer uw invoer of neem contact op`,
      });
    },
  });

  if (loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }

  if (!data?.ExamSpecialties) {
    return null;
  }
  const examSpecialties = [...data.ExamSpecialties].sort((a, b) =>
    a.MaximumDatum > b.MaximumDatum ? -1 : 1,
  );
  return (
    <>
      <Panel title="Openbaar register - Examenvakken">
        <p>Kies een examenvak om details te zien.</p>
        <ul>
          {examSpecialties.map((specialty) => (
            <li key={specialty.VakID}>
              <Link to={`/examenvakken/${specialty.VakID}`}>
                {specialty.Titel} van {toDutchDate(specialty.MinimumDatum)} tot{' '}
                {toDutchDate(specialty.MaximumDatum)}
              </Link>
            </li>
          ))}
        </ul>
      </Panel>

      <div>
        <Link to="../">Ga terug naar het overzicht</Link>
      </div>
    </>
  );
};

export default ExamSpecialtiesList;
