import React, { useState, useContext } from 'react';
import './LoginPage.css';
import { Page, RouteContext } from "../Routing";
import { LoginForm } from './LoginForm';

function LoginPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCurrentPage } = useContext(RouteContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Perform error handling or something
    setCurrentPage(Page.Classes, () => setIsLoading(false));
  }

  return (
    <div className="h-screen w-auto bg-blue-800 flex items-center text-gray-600">
      <div className="mx-auto">
        <header className="text-white text-center mb-6">
          <img className="mx-auto mb-2" src="https://via.placeholder.com/60x60" alt="university logo" />
          <h1 className="font-serif font-extralight text-3xl uppercase tracking-wider max-w-sm text-gray-200 ">
            Not <br /> Ateneo de Manila University</h1>
        </header>

        <LoginForm onSubmit={(e) => handleSubmit(e)} isLoading={isLoading} />

        <footer className="bg-gray-300 shadow-inner py-4 rounded-b-md text-center underline text-gray-500 text-sm">
          <a href="/forgot">Forgot your password?</a>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;