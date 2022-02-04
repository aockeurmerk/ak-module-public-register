import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Link, useHistory } from 'react-router-dom';
import { FormText, FormItem } from '@erkenningen/ui/components/form';
import * as yup from 'yup';
import { Button } from '@erkenningen/ui/components/button';
import Form from '../components/Form';

const SearchExam = (): JSX.Element => {
  const history = useHistory();
  return (
    <>
      <Panel title="Openbaar register - Zoek op code">
        <p>Voer een code in om gegevens van het examen of cursus te bekijken.</p>
        <Form
          className="form-horizontal"
          schema={{
            Code: [
              '',
              yup
                .number()
                .required()
                .positive()
                .integer()
                .min(10000, 'Code moet minimaal 10000 zijn')
                .max(20000, 'Code moet maximaal 20000 zijn'),
            ],
          }}
          onSubmit={async (values) => {
            history.push(`/examens/${values.Code}`);
          }}
        >
          {() => (
            <>
              <FormText
                formControlClassName="col-md-2"
                name={'Code'}
                label="Code *"
                placeholder="1xxxxx"
              ></FormText>
              <FormItem label={' '}>
                <Button label="Zoeken" type="submit" icon="pi pi-search" />
              </FormItem>
            </>
          )}
        </Form>
      </Panel>

      <div>
        <Link to="../">Ga terug naar het overzicht</Link>
      </div>
    </>
  );
};

export default SearchExam;
