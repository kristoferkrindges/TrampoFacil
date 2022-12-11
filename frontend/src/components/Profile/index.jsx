import React, { useState, useContext } from "react";
import Menu from "../Shared/Menu";
import FormProfile from "./FormProfile";
import ModalDelete from "../Shared/ModalDelete";
import { Context } from "../../context/UserContext";

export default function Profile() {
	const { DeleteUser, userContext } = useContext(Context);
	const [modal, setModal] = useState(false);
	const handleModal = (r) => {
		setModal(r);
	};
	function DeleteU() {
		DeleteUser(userContext._id);
	}
	return (
		<>
			<Menu type="Yes" search="home" />
			{modal ? (
				<ModalDelete modal={handleModal} yes={DeleteU} option={false} />
			) : (
				<></>
			)}
			<FormProfile modal={handleModal} />
		</>
	);
}
