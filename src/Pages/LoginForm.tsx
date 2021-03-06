import React from 'react';

type LoginFormProps = {
  onSubmit(event: React.SyntheticEvent<HTMLFormElement>): void;
  isLoading: boolean;
}
export function LoginForm({ onSubmit, isLoading }: LoginFormProps): JSX.Element {
  return (
    <form className="flex flex-col bg-gray-100 shadow-md rounded-t-md py-8 px-10"
      onSubmit={(e) => onSubmit(e)}>
      <h2 className="font-bold text-blue-800 text-2xl mb-5">Log in to Student System</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 mb-3">
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
        disabled={isLoading}
        className="btn-submit"
        type="submit">Log in</button>
    </form>
  );
}
