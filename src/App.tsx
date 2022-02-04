import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FormatErrorParams } from 'yup';
import * as yup from 'yup';
import { GrowlProvider } from '@erkenningen/ui/components/growl';
import { ThemeAOCKeurmerk } from '@erkenningen/ui/layout/theme';
import { ThemeContext } from '@erkenningen/ui/layout/theme';
import Start from './containers/Start';
import SearchExam from './containers/SearchExams';
import ExamSpecialtiesList from './containers/ExamSpecialtiesList';
import ExamDetails from './exams/ExamDetails';
import ExamSpecialtyDetails from './examSpecialties/ExamSpecialtyDetails';
import SearchPerson from './studyResults/SearchPerson';
import StudyResults from './studyResults/StudyResults';
import { useAuth, UserContext } from './shared/Auth';
import { Spinner } from '@erkenningen/ui/components/spinner';

yup.setLocale({
  mixed: {
    default: 'Ongeldig',
    required: 'Verplicht',
    notType: (params: FormatErrorParams) => {
      if (!params.value) {
        return 'Verplicht';
      }

      switch (params.type) {
        case 'number':
          return 'Moet een getal zijn';
        case 'date':
          return 'Verplicht';
        default:
          return 'Ongeldige waarde';
      }
    },
  },
  string: {
    email: 'Ongeldig e-mailadres',
    min: 'Minimaal ${min} karakters', // eslint-disable-line no-template-curly-in-string
    max: 'Maximaal ${max} karakters', // eslint-disable-line no-template-curly-in-string
  },
});

function App(): JSX.Element {
  const auth = useAuth();
  if (auth.loading) {
    return <Spinner text={'Gegevens laden...'} />;
  }
  return (
    <UserContext.Provider value={auth.my}>
      <ThemeContext.Provider value={{ mode: 'admin' }}>
        <GrowlProvider>
          <ThemeAOCKeurmerk>
            <Switch>
              <Route path="/examens/zoek-examen" component={SearchExam} />
              <Route exact path="/examens/:id" component={ExamDetails} />

              <Route exact path="/examenvakken" component={ExamSpecialtiesList} />
              <Route path="/examenvakken/:id" component={ExamSpecialtyDetails} />

              <Route path="/persoon-zoeken" component={SearchPerson} />
              <Route exact path="/studieresultaten/:id" component={StudyResults} />

              <Route exact path="/" component={Start} />
              <Route>
                <>
                  Pagina niet gevonden. <Link to="../">Ga terug</Link>
                </>
              </Route>
            </Switch>
          </ThemeAOCKeurmerk>
        </GrowlProvider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
