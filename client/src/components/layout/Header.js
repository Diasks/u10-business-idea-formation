import React from 'react';			
			import { Link } from 'react-router-dom';
			
			function Header() {
			return (
			<header style={headerStyle}>
			<h1>Formation</h1>
			<Link style={linkStyle}to="/login">Login</Link> | <Link style={linkStyle} to="/profile">Profile</Link> | <Link style={linkStyle} to="/register">Register</Link> | <Link style={linkStyle} to="/cvtemplate">CV template</Link> 
			</header>
			)
			}
			
			
			const headerStyle = {
			background: '#333',
			color: '#fff',
			textAlign: 'center',
			padding: '10px'
			}
			
			
			const linkStyle = {
			color: '#fff',
			textDecoration: 'none'
			}
			export default Header;