import Login from './LoginPage';
import Classes from './ClassesPage';
import { useState } from 'react';

export const Pages = {
    "Login": Login,
    "Classes": Classes
};

// TODO: Configure routing
function App(): JSX.Element {
    const [currentPage, setCurrentPage] = useState<string>("Login");
    const handleChangePage = (page: string) => {
        setCurrentPage(page);
    }

    return (
        <main>
            { currentPage === "Login" ? <Login onChangePage={(page) => handleChangePage(page)} /> : <Classes /> }
        </main>
        
    );
}

export default App;