import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface LoginContextType {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  logged: boolean;
  setLogged: (logged: boolean) => void;
  data: object[];
  setData: (data: object[]) => void;
  userId: number | undefined;
  setUserId: (userId: number | undefined) => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }
  return context;
};

export const LoginProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [logged, setLogged] = useState<boolean>(false);
  const [data, setData] = useState<object[]>([]);
  const [userId, setUserId] = useState<number | undefined>();

  return (
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        logged,
        setLogged,
        data,
        setData,
        userId,
        setUserId,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
