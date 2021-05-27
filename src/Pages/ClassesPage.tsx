import { useContext } from 'react';
import { RouteContext } from '../RouteContext';

function ClassesPage(): JSX.Element {
    const { setCurrentPage } = useContext(RouteContext);

    return (
        <div>
            Classes page coming soon!
             
            <button onClick={() => setCurrentPage && setCurrentPage("login")} >
                Go Back
            </button>
        </div>
    );
}

export default ClassesPage;