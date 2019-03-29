import React, { Component } from 'react'

class Header extends Component {
    
    render() {
        return (
            <div className="top-header-container">
                <div className="top-header-icon"><img src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png" alt="Shelfie_Icon" width ="53"/></div>
                <div className="top-header-title"><strong>SHELFIE</strong></div>
            </div>
        )
    }
}

export default Header