import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from '../../Images/react-movie-logo.svg'
import TMDBLogo from '../../Images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";
// Context
import { Context } from "../../context";

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo'></LogoImg>
                </Link>

                {user ? (
                    <span className="loggedin">Logged in as: {user.username}</span>
                ) : (
                    <Link to='/login'>
                        <span className="login">Login</span>
                    </Link>
                )
                }
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'></TMDBLogoImg>
            </Content>
        </Wrapper>
    )
}

export default Header;