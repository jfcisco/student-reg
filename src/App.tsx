import Login from './Pages/LoginPage';
import Classes from './Pages/ClassesPage';
import { useState } from 'react';
import { Page, Route, RouteContext } from './Routing';

const usePageState = (initialPage: Page): [Page, (page: Page) => Promise<void>] => {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);

  async function setCurrentPageAsync(page: Page) {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    await delay(1000);
    setCurrentPage(page);
  }

  return [currentPage, setCurrentPageAsync];
}

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = usePageState(Page.Login);
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