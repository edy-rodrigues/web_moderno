import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatora em casa! */}
            <NavItem icon="home" label="Início" link="" />
            <NavItem icon="users" label="Usuários" link="users" />
        </nav>
    </aside>