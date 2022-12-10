import React from "react";
import { Layout, Content, Option } from "./style";
import FormPost from "./FormPost";
import Menu from "../Shared/Menu";

function CreatedPost(props) {
	return (
		<>
			<Menu type="Yes" search="home" />
			<Layout>
				<Content>
					<Option>
						<FormPost type={props.type} />
					</Option>
				</Content>
			</Layout>
		</>
	);
}

export default CreatedPost;
