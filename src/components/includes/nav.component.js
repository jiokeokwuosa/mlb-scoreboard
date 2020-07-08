import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import homepage from "../homepage/homepage.component";

const MyNav = props => {
	return (
		<Router>           	
	    	<Switch>
				<Route exact path='/' component={homepage} /> 
			</Switch>			
		</Router>
	);
};
export default MyNav;