import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const withRouter = (Component) => {
	return (props) => {
		const location = useLocation();
		const navigate = useNavigate();
		const params = useParams();
		return (
			<Component
				location={location}
				navigate={navigate}
				params={params}
				{...props}
			/>
		);
	};
};

export default withRouter;
