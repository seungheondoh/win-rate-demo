import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Intro from './pages/intro';
import Main from './pages/surveys';
import Page404 from './pages/page404';
import { MetaProvider } from './hook/useMetaData';
import { SurveyProvider } from './hook/useSurveyData'
import { GlobalStyles} from './styles';

function App() {
    return (
        <div className="App">
            <>
            <MetaProvider>
                <SurveyProvider>
                    <GlobalStyles>
                        <Router>
                            <Switch>
                                <Route
                                    exact
                                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                                    component={ Intro }
                                />
                                <Route
                                    exact
                                    path={ `${ process.env.PUBLIC_URL + "/Survey" }` }
                                    component={ Main }
                                />
                                <Route 
                                    exact 
                                    path="*" 
                                    component={ Page404 }
                                />
                            </Switch>
                        </Router>
                    </GlobalStyles>
                </SurveyProvider>
            </MetaProvider>
            </>
        </div>
    );
}

export default App;
