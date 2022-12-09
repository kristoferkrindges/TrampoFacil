import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

function UserProvider({ children }) {
	const {
		authenticated,
		register,
		logout,
		login,
		userContext,
		UpdateUser,
		DeleteUser,
	} = useAuth();
	return (
		<Context.Provider
			value={{
				logout,
				authenticated,
				register,
				login,
				userContext,
				UpdateUser,
				DeleteUser,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, UserProvider };
