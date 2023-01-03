import { useState, createContext, ReactNode, useContext, useEffect } from 'react';

export interface IUserContext {
    user: string;
    toggleUser: any;
}

interface IUserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<any | null>(null)

    const toggleUser = (name: string) => {
        setUser(name);
    }

    const value = {
        user,
        toggleUser
    }

    useEffect(() => {
        setUser('Guest');
    },[])

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
};

const useUser = () => useContext(UserContext);

export { useUser, UserContext, UserProvider };