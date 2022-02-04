import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { toDutchDate } from '@erkenningen/ui/utils';
import { TableResponsive } from '@erkenningen/ui/layout/table';
import { Link } from 'react-router-dom';
import { useExamDetailsQuery } from '../generated/graphql';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { printWindow } from '../shared/print';

const ExamDetails = (props: { match: { params: { id: string } } }): JSX.Element | null => {
  const { showGrowl } = useGrowlContext();
  const { loading, data } = useExamDetailsQuery({
    variables: { examId: parseInt(props.match.params.id, 10) },
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Details ophalen',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van details. Controleer uw invoer of neem contact op`,
      });
    },
  });

  if (loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }

  const returnLink = () => (
    <div className="print-none">
      <Link to="/examens/zoek-examen">Ga terug</Link>
    </div>
  );

  if (!data?.ExamDetails || !data?.ExamDetails?.Cursus) {
    return (
      <Panel key="notFound" title="Openbaar register - details">
        <>
          <Alert key="notFoundAlert" type="warning">
            Er is geen examen of cursus gevonden met deze code: {props.match.params.id}
          </Alert>
          {returnLink()}
        </>
      </Panel>
    );
  }
  const exam = data.ExamDetails;
  const cursus = exam.Cursus;

  const handlePrint = () => {
    printWindow('toPrint');
  };

  return (
    <div id="toPrint">
      <Panel key="details" title="Openbaar register - details" doNotIncludeBody={true}>
        <TableResponsive>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Code</td>
                <td>{cursus?.CursusID}</td>
              </tr>
              <tr>
                <td>Code</td>
                <td>{cursus?.Vak?.ExamenInstelling ? 'Examen' : 'Cursus'}</td>
              </tr>
              <tr>
                <td>Competentie</td>
                <td>{cursus?.Vak?.Competenties ? cursus?.Vak.Competenties[0].Naam : 'onbekend'}</td>
              </tr>
              <tr>
                <td>Titel</td>
                <td>{cursus?.Titel}</td>
              </tr>
              <tr>
                <td>Promotietekst</td>
                <td>{cursus?.Promotietekst}</td>
              </tr>
              <tr>
                <td>Inhoud</td>
                <td>{cursus?.Vak.Inhoud}</td>
              </tr>
              <tr>
                <td>Instelling</td>
                <td>
                  {cursus?.Vak.ExamenInstelling
                    ? cursus?.Vak.ExamenInstelling.Naam
                    : cursus?.Vak.Vakgroep?.Naam}
                </td>
              </tr>
              <tr>
                <td>Datum</td>
                <td>{cursus?.Sessies && toDutchDate(cursus.Sessies[0].Datum)}</td>
              </tr>
              <tr>
                <td>Plaats</td>
                <td>{cursus?.Sessies && cursus.Sessies[0].Locatie?.Contactgegevens.Woonplaats}</td>
              </tr>
              <tr>
                <td>Vaardigheden</td>
                <td>
                  <ul>
                    {exam.Vaknorm?.Vaardigheden?.map((vaardigheid) => (
                      <li key={vaardigheid.VaardigheidID}>
                        {vaardigheid.Code} - {vaardigheid.Omschrijving}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="panel-body print-none">
            <Button label="Printen" type="button" onClick={() => handlePrint()} />
          </div>
        </TableResponsive>
      </Panel>
      {returnLink()}
    </div>
  );
};

export default ExamDetails;
