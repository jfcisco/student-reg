import React, { ReactEventHandler } from 'react';
import './Login.css';

function LoginForm({onSubmit}: { onSubmit: Function }): JSX.Element {
    return (
        <form className="flex flex-col bg-gray-100 shadow-md rounded-t-md py-8 px-10"
        onSubmit={(e) => onSubmit(e)}>
            <h2 className="font-bold text-blue-800 text-2xl mb-5">Log in to Student System</h2>

            <div className="grid grid-cols-3 grid-rows-3 gap-y-3 mb-3">
                <label htmlFor="username">Username:</label>
                <input className="text-field col-span-2" type="text" name="username" />

                <label htmlFor="password">Password:</label>
                <input className="text-field col-span-2" type="password" name="password" />

                <label className="col-span-2 text-sm">
                    <input type="checkbox" name="remember-me" />
                    &nbsp;Remember me?
                </label>
            </div>
            
            <button 
            className="btn-submit" 
            type="submit">Log in</button>
        </form>
    );
}

function LoginPage({onChangePage}: {onChangePage: (page: string) => void}): JSX.Element {
    const handleSubmit: ReactEventHandler<HTMLFormElement> = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onChangePage("Classes");
    }

    return (
        <div className="h-screen w-screen bg-blue-800 flex items-center text-gray-600">
            <div className="w-3/12 mx-auto">
                <header className="text-white text-center mb-7">
                    <img className="mx-auto mb-2" src="https://via.placeholder.com/60x60" alt="university logo" />
                    <h1 className="font-serif font-extralight text-2xl uppercase tracking-wider text-gray-200 ">Test University</h1>
                </header>

                <LoginForm onSubmit={handleSubmit}/>
                
                <footer className="bg-gray-300 shadow-inner py-4 rounded-b-md text-center underline text-gray-500 text-sm">
                    <a href="/forgot">Forgot your password?</a>
                </footer>
            </div>
        </div>
    );
}

export default LoginPage;