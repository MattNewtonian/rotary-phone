import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="Header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-free-code-camp"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Matt Test Newton</h1>
                <p>International Relations scholar + Copyeditor / UX Writer with over eight years' experience</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
