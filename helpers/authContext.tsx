import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Models } from "react-native-appwrite";
import { account } from "./appwrite";
import { storeGet, storeSave } from "./storage";

SplashScreen.preventAutoHideAsync();
interface UserProps {
  providerUid: string;
  expire:string;

}
type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: (email:string,password:string) => void;
  logOut: () => void;
};

const authStorageKey = "auth-key";

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const storeAuthState = async (newState: { isLoggedIn: boolean,user:Models.User<Models.Preferences> | undefined }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await storeSave('userSession', jsonValue);
    } catch (error) {
      console.log("Error saving", error);
    }
  };

  const logIn = async (email:string,password:string) => {
    try {
      debugger;
      setIsLoggedIn(true);
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      storeAuthState({ isLoggedIn: true,user:user });
      router.replace("/(protected)/(tabs)");
      
    } catch (error) {
      console.log("Login error", error);
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    storeAuthState({ isLoggedIn: false,user: undefined });
    router.replace("/login");
  };

  useEffect(() => {
    const getAuthFromStorage = async () => {
      // simulate a delay, e.g. for an API request
      await new Promise((res) => setTimeout(() => res(null), 1000));
      try {
        const value = await storeGet('userSession')
        if (value !== null) {
          const auth = JSON.parse(value);
          setIsLoggedIn(auth.isLoggedIn);
        }
      } catch (error) {
        console.log("Error fetching from storage", error);
      }
      setIsReady(true);
    };
    getAuthFromStorage();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <AuthContext.Provider
      value={{
        isReady,
        isLoggedIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}