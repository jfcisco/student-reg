import React, { useContext } from 'react';

export enum Page {
    Login = "login",
    Classes = "classes"
}

type RouteProps = {
    page: Page;
    children: React.ReactNode;
}

export const Route = ({ page, children }: RouteProps): JSX.Element => {
    const { currentPage } = useContext(RouteContext);

    return (
        <>
            {currentPage === page ? children : null}
        </>
    );
};


type RouteContextProps = {
    currentPage: Page;
    setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

export const RouteContext = React.createContext<RouteContextProps>({
    // Login page is the initial page
    currentPage: Page.Login,
    setCurrentPage: currentPage => { }
});