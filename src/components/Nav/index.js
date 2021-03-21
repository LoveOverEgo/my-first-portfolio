import React from 'react';

function Nav(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab
    } = props;

    return(
        <header>
            <h1>Michael Arvelo</h1>
            <nav>
                <ul>
                    {tabs.map((tab, index) => {
                        return(
                            <li key={index} >
                                <span
                                  onClick={() => setCurrentTab(tab)}
                                  className={currentTab.name === tab.name && 'navActive'} 
                                >
                                    {tab.name}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;