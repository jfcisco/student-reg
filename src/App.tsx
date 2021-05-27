import Login from './Pages/LoginPage';
import Classes from './Pages/ClassesPage';
import { useState } from 'react';
import { Page, Route, RouteContext } from './Routing';

function App(): JSX.Element {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Login);
    const values = { currentPage, setCurrentPage };

    return (
        <RouteContext.Provider value={values}>
            <main>
                <Route page={Page.Login}>
                    <Login />
                </Route>
                <Route page={Page.Classes}>
                    <Classes />
                </Route>
            </main>
        </RouteContext.Provider>
    );
}

export default App;