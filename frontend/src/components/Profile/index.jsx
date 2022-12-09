import React, { useState } from "react";
import Menu from "../Shared/Menu";
import FormProfile from "./FormProfile";
import ModalDelete from "../Shared/ModalDelete";

export default function Profile() {
	const [modal, setModal] = useState(false);
	const handleModal = (r) => {
		setModal(r);
	};
	return (
		<>
			<Menu type="Yes" search="home" />
			{modal ? <ModalDelete modal={handleModal} yes={"Delete"} /> : <></>}
			<FormProfile modal={handleModal} />
		</>
	);
}
