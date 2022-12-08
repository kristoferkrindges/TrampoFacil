import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

function UserProvider({ children }) {
	const { authenticated, register, logout, login, infoUser, userContext } =
		useAuth();
	return (
		<Context.Provider
			value={{ logout, authenticated, register, login, infoUser, userContext }}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, UserProvider };
