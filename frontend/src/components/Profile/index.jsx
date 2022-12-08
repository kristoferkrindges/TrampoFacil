import React from "react";
import Menu from "../Shared/Menu";
import FormProfile from "./FormProfile";

export default function Profile() {
	return (
		<>
			<Menu type="Yes" search="home" />
			<FormProfile />
		</>
	);
}
