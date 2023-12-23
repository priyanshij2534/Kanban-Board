import React, { useState, useContext } from 'react'
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import '../styles/navbar.css';
import Context from '../ContextAPI/Context';
import { Link } from "react-router-dom";

const Navbar = () => {
    const {theme, toggleTheme} = useContext(Context);
    const [title1, setTitle1] = useState('Status');
    const [title2, setTitle2] = useState('Priority');

    return (
        <div className="navbar" style={{backgroundColor: theme==='light'?'white':'#161B22'}}> 
            <div className='navContainer'>
                <div className='nav-dropdown-container'>
                    <div className="image-container">
                        <img className='nav-image' src={require ("../images/list.png")} alt="img" />
                    </div>
                    <Dropdown title="Display">
                        <div className="navRow">
                            <div className="navColumn">
                                <p className='nav-dropdown-text'>Grouping</p>
                            </div>
                            <div className="navColumn">
                                <Dropdown style={{ width: `200px` }} title={title1}>
                                    
                                    <Dropdown.Item onClick={() => setTitle1('Status')}> <Link to="/">Status</Link> </Dropdown.Item>
                                    <Dropdown.Item onClick={() => setTitle1('User')}><Link to="/user">User</Link></Dropdown.Item>
                                    <Dropdown.Item onClick={() => setTitle1('Priority')}><Link to="/priority">Priority</Link></Dropdown.Item>

                                </Dropdown>
                            </div>
                        </div>
                        <div className="navRow">
                            <div className="navColumn">
                                <p className='nav-dropdown-text'>Ordering</p>
                            </div>
                            <div className="navColumn">
                                <Dropdown title={title2}>
                                    <Dropdown.Item onClick={() => setTitle2('Priority')}>Priority</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setTitle2('Title')}>Title</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>

                    </Dropdown>
                </div>
            </div>
            {theme==='light' && <i onClick={toggleTheme} className="fa-solid fa-moon fa-xl lightThemeIcon"></i>}
            {theme==='dark' && <i onClick={toggleTheme} class="fa-solid fa-sun fa-xl darkThemeIcon"></i>}
        </div> 
    )
}

export default Navbar