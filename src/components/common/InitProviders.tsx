import { FC } from 'react';
import GameProvider from '../../hooks/use-games';
import { UserProvider } from '../../hooks/use-user';

interface IProvider {
    Provider: FC,
    props?: any,
}

type ProviderType = IProvider | FC;

interface IInitProviderProps {
    providers: ProviderType[],
    children: any,
}

const InitProviders = ({ providers, children }: IInitProviderProps) => {
    const initial = (<>{ children }</>);

    return providers
        .reverse()
        .reduce(
            (current, item) => {
                let Provider = item as FC;
                let props = {};
                const providerItem = item as IProvider;

                if(providerItem.Provider) {
                    Provider = providerItem.Provider;
                    props = providerItem.props;
                }

                return (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    // @ts-ignore
                    <Provider {...props}>
                        {current}
                    </Provider>
                );
            },
            initial,
        );
};

const Providers = [
    UserProvider,
    GameProvider,
] as ProviderType[];

export { Providers };

export default InitProviders;