import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { TableResponsive } from '@erkenningen/ui/layout/table';
import { Link } from 'react-router-dom';
import { useExamSpecialtyQuery } from '../generated/graphql';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { printWindow } from '../shared/print';
import { Button } from '@erkenningen/ui/components/button';

const ExamSpecialtyDetails = (props: { match: { params: { id: string } } }): JSX.Element | null => {
  const { showGrowl } = useGrowlContext();
  const { loading, data } = useExamSpecialtyQuery({
    variables: { vakId: parseInt(props.match.params.id, 10) },
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

  if (!data?.ExamSpecialty) {
    return null;
  }
  const exam = data.ExamSpecialty;
  const vak = exam.Vak;
  if (!vak) {
    return null;
  }

  const handlePrint = () => {
    printWindow('toPrint');
  };

  return (
    <>
      <div id="toPrint">
        <Panel title="Openbaar register - examenvak details" doNotIncludeBody={true}>
          <TableResponsive>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Code</td>
                  <td>{vak.VakID}</td>
                </tr>
                <tr>
                  <td>Competentie</td>
                  <td>{vak.Competenties ? vak.Competenties[0]?.Naam || 'onbekend' : 'onbekend'}</td>
                </tr>
                <tr>
                  <td>Titel</td>
                  <td>{vak.Titel}</td>
                </tr>
                <tr>
                  <td>Doelgroep</td>
                  <td>{vak.Doelgroep}</td>
                </tr>
                <tr>
                  <td>Doelstelling</td>
                  <td>{vak.Doelstelling}</td>
                </tr>
                <tr>
                  <td>Promotietekst</td>
                  <td>{vak.Promotietekst}</td>
                </tr>
                <tr>
                  <td>Inhoud</td>
                  <td>{vak.Inhoud}</td>
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
      </div>

      <div>
        <Link to="/examenvakken">Ga terug</Link>
      </div>
    </>
  );
};

export default ExamSpecialtyDetails;
