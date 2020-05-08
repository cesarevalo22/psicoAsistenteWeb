import React from 'react';
import "../../images/style.css";
import styled from 'styled-components';
import data from "./dataSidebar.json";

import { BrowserRouter as Router, Route, Link, withRouter  } from "react-router-dom";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: data.items,
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <div className="StyledSideNav">
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 50px;
  width: 80px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: -10px;   /* Puts space between NavItems */
  margin-left: 1px;
  a {
    font-size: 1.5em;
    color: ${(props) => props.active ? "#F6134B" : "#929292"};
    
    :hover {
      opacity: 0.5;
      text-decoration: none; /* Gets rid of underlining of icons */
      } 
     
  }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    
                </Link>
            </StyledNavItem>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
            );
    }
}
