import React, { useContext } from 'react';
import './LoginPage.css';
import { Page, RouteContext } from "../Routing";
import { LoginForm } from './LoginForm';

function LoginPage(): JSX.Element {
    const { setCurrentPage } = useContext(RouteContext);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setCurrentPage(Page.Classes);
    }

    return (
        <div className="h-screen w-screen bg-blue-800 flex items-center text-gray-600">
            <div className="w-3/12 mx-auto">
                <header className="text-white text-center mb-7">
                    <img className="mx-auto mb-2" src="https://via.placeholder.com/60x60" alt="university logo" />
                    <h1 className="font-serif font-extralight text-2xl uppercase tracking-wider text-gray-200 ">Test University</h1>
                </header>

                <LoginForm onSubmit={(e) => handleSubmit(e)}/>
                
                <footer className="bg-gray-300 shadow-inner py-4 rounded-b-md text-center underline text-gray-500 text-sm">
                    <a href="/forgot">Forgot your password?</a>
                </footer>
            </div>
        </div>
    );
}

export default LoginPage;