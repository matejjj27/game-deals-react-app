import { createContext } from 'react';

interface IUserContext {
    name: string;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export {UserContext};