import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "../Styles/style.css";

class Navbar extends PureComponent {
	render() {
		const { showForm } = this.props;
		return (
			<header className="header">
				<div className="header-logo">NoToRacism!</div>
				<nav className="header-menu">
					<button value="ifClickEvent" onClick={showForm} type="button" className="header-menu-button" name="ifClickEvent">
						Add Card
					</button>
					<button onClick={showForm} value="ifClickGroup" name="ifClickGroup" type="button" className="header-menu-button">
						Add Column
					</button>
				</nav>
			</header>
		);
	}
}
Navbar.propTypes = {
	showForm: PropTypes.func.isRequired,
};
export default Navbar;
