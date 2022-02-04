import React, { useState } from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Alert } from '@erkenningen/ui/components/alert';
import { Link, useHistory } from 'react-router-dom';
import { FormText, FormItem, FormCalendar } from '@erkenningen/ui/components/form';
import * as yup from 'yup';
import { Button } from '@erkenningen/ui/components/button';
import Form from '../components/Form';
import { useSearchPersonQuery } from '../generated/graphql';
import { Spinner } from '@erkenningen/ui/components/spinner';

const SearchPerson = (): JSX.Element => {
  const history = useHistory();
  const [searchCriteria, setSearchCriteria] = useState<{
    Achternaam: string;
    Geboortedatum: Date;
    PersoonID: number;
  }>();

  const skip =
    !searchCriteria ||
    (!searchCriteria.Achternaam && !searchCriteria.Geboortedatum) ||
    (!searchCriteria.Geboortedatum && !searchCriteria.PersoonID);

  const { loading, data, error } = useSearchPersonQuery({
    variables: {
      Achternaam: searchCriteria?.Achternaam,
      Geboortedatum: searchCriteria?.Geboortedatum,
      PersoonID: searchCriteria?.PersoonID,
    },
    skip: skip,
  });
  if (loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }
  if (error) {
    return (
      <Alert type="danger">Er is een probleem opgetreden, probeer het later nog een keer</Alert>
    );
  }
  if (data) {
    if (data?.PersoonZoeken?.PersoonID && searchCriteria) {
      history.push(`/studieresultaten/${data.PersoonZoeken?.PersoonID}`);
    }
  }

  return (
    <>
      <Panel title="Openbaar register - Zoek persoon om studieresultaten te bekijken">
        <p>Voer de achternaam, persoon nr. en geboortedatum van een persoon in.</p>
        <Form
          className="form-horizontal"
          schema={{
            Achternaam: [searchCriteria?.Achternaam, yup.string().required().max(50)],
            Code: [
              searchCriteria?.PersoonID,
              yup
                .number()
                .positive()
                .integer()
                .min(50000, 'Code moet minimaal 50000 zijn')
                .max(60000, 'Code moet maximaal 60000 zijn'),
            ],
            Geboortedatum: [searchCriteria?.Geboortedatum, yup.date().required()],
          }}
          onSubmit={async (values) => {
            setSearchCriteria(values);
          }}
        >
          {() => (
            <>
              <FormText
                formControlClassName="col-md-2"
                name="Achternaam"
                label="Achternaam *"
                placeholder="Bijv. Jansen"
              ></FormText>
              <FormText
                formControlClassName="col-md-2"
                name="Code"
                label="PersoonID *"
                placeholder="5xxxxx"
              ></FormText>
              <FormCalendar
                formControlClassName="col-md-2"
                name="Geboortedatum"
                label="Geboortedatum *"
                placeholder="dd-mm-jjjj"
              ></FormCalendar>
              <FormItem label={' '}>
                <Button label="Zoeken" type="submit" icon="pi pi-search" />
              </FormItem>
            </>
          )}
        </Form>
        {!data?.PersoonZoeken?.PersoonID && searchCriteria && (
          <Alert type="warning">Persoon niet gevonden, controleer uw zoek criteria.</Alert>
        )}
      </Panel>

      <div>
        <Link to="../">Ga terug naar het overzicht</Link>
      </div>
    </>
  );
};

export default SearchPerson;
