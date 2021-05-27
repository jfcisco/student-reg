import { useContext } from 'react';
import { Page, RouteContext } from '../Routing';

function ClassesPage(): JSX.Element {
    const { setCurrentPage } = useContext(RouteContext);

    return (
        <div>
            Classes page coming soon!
             
            <button onClick={() => setCurrentPage(Page.Classes)} >
                Go Back
            </button>
        </div>
    );
}

export default ClassesPage;