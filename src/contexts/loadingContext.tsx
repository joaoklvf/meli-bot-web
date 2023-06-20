import { LoadingComponent } from '../components/LoadingComponent';
import { createContext, useState, Dispatch, SetStateAction, ReactNode, useContext } from 'react';

interface LoadingContextProps {
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

interface LoadingProviderProps {
  children: ReactNode
}

const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);


export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const loadingContextValue = {
    isLoading,
    setIsLoading
  }
  return (
    <LoadingContext.Provider value={loadingContextValue}>
      {isLoading && <LoadingComponent />}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

