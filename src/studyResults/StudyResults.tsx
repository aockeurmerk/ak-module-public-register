import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';
import { Alert } from '@erkenningen/ui/components/alert';
import { Link } from 'react-router-dom';
import { useStudyResultsQuery } from '../generated/graphql';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { TableResponsive } from '@erkenningen/ui/layout/table';
import { toDutchDate } from '@erkenningen/ui/utils';
import { printWindow } from '../shared/print';

const StudyResults = (props: { match: { params: { id: string } } }): JSX.Element | null => {
  const { loading, data, error } = useStudyResultsQuery({
    variables: {
      PersoonID: parseInt(props.match.params.id, 10),
    },
  });
  if (loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }
  if (error) {
    return (
      <Alert type="danger">Er is een probleem opgetreden, probeer het later nog een keer</Alert>
    );
  }

  const handlePrint = () => {
    printWindow('toPrint');
  };

  const returnLink = () => (
    <div className="print-none">
      <Link to="/persoon-zoeken">Ga terug</Link>
    </div>
  );

  if (data?.Studieresultaten?.length === 0) {
    return (
      <>
        <Panel title="Openbaar register - Studieresultaten">
          <Alert type="info">Persoon heeft (nog) geen studieresultaten</Alert>
        </Panel>

        {returnLink()}
      </>
    );
  }

  return (
    <div id="toPrint">
      <Panel title="Openbaar register - Studieresultaten" doNotIncludeBody={true}>
        <div className="panel-body form-horizontal">
          <div className="form-group">
            <label className="control-label col-md-2">Achternaam</label>
            <div className="form-control-static col-md-10">
              {(data?.Studieresultaten &&
                data?.Studieresultaten.length >= 1 &&
                data.Studieresultaten[0].Persoon?.Achternaam) ||
                '(nog) geen studieresultaten bekend'}
            </div>
          </div>
        </div>
        <TableResponsive>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Certificaat</th>
                <th>Begindatum certificaat</th>
                <th>Einddatum certificaat</th>
                <th>Titel</th>
                <th>Datum</th>
                <th>Bij</th>
              </tr>
            </thead>
            <tbody>
              {data?.Studieresultaten.map((studyResult) => (
                <tr key={studyResult.StudieresultaatID}>
                  <td>{studyResult.Certificering?.Certificaat?.Naam}</td>
                  <td>{toDutchDate(studyResult.Certificering?.BeginDatum)}</td>
                  <td>{toDutchDate(studyResult.Certificering?.EindDatum)}</td>
                  <td>{studyResult.Cursus?.Titel}</td>
                  <td>
                    {studyResult.Cursus?.Sessies &&
                      toDutchDate(studyResult.Cursus?.Sessies[0].Datum)}
                  </td>
                  <td>{studyResult.Vak?.ExamenInstelling?.Naam}</td>
                </tr>
              ))}
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

export default StudyResults;
