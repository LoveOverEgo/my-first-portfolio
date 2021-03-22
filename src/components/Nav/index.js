import React, { useEffect } from 'react';

function Nav(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab
    } = props;

    useEffect(() => {
        document.title = currentTab.name;
    }, [currentTab]);

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
                                  className={(currentTab.name === tab.name) ? 'navActive':''} 
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