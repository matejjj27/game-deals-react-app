import { useState, createContext, ReactNode, useContext } from 'react';

interface IUserContext {
    user: string;
    toggleUser: any;
}

interface IUserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<any | null>("Guest")

    const toggleUser = (name: string) => {
        setUser(name);
    }

    const value = {
        user,
        toggleUser
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };