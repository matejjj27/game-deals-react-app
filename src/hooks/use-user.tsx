import { createContext } from 'react';

interface IUserContext {
    name: string;
}

const UserContext = createContext<IUserContext>({name: "Guest"});

export {UserContext};