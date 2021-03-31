import React from 'react';

function ToggleTheme() {
    // Toggle theme on click of btn
    var themeStatus = "light"; // start page on light mode
    
    function handleTheme() {
        if (themeStatus === "dark") {
            document.documentElement.style.setProperty("--bg", "var(--bgLight)");
            document.documentElement.style.setProperty("--primary", "var(--primaryLight)");
            document.documentElement.style.setProperty("--secondary", "var(--secondaryLight)");
            document.documentElement.style.setProperty("--accent", "var(--accentLight)");
            document.documentElement.style.setProperty("--border", "var(--borderLight)");
            document.documentElement.style.setProperty("--boxShadow", "rgb(156 156 156)");

            themeStatus = "light";
        } else if (themeStatus === "light") {
            document.documentElement.style.setProperty("--bg", "var(--bgDark)");
            document.documentElement.style.setProperty("--primary", "var(--primaryDark)");
            document.documentElement.style.setProperty("--secondary", "var(--secondaryDark)");
            document.documentElement.style.setProperty("--accent", "var(--accentDark)");
            document.documentElement.style.setProperty("--border", "var(--borderDark)");
            document.documentElement.style.setProperty("--boxShadow", "black");

            themeStatus = "dark";
        }
    };

    return(
        <div className="theme" onClick={handleTheme} >
            <svg width="20px" height="20px">
                <title>Theme toggle</title>
                <defs></defs>
                <g>
                    <g transform="translate(-180.000000, -4199.000000)">
                        <g transform="translate(56.000000, 160.000000)">
                            <path d="M126,4049 C126,4044.589 129.589,4041 134,4041 L134,4057 C129.589,4057 126,4053.411 126,4049 M134,4039 C128.477,4039 124,4043.477 124,4049 C124,4054.523 128.477,4059 134,4059 C139.523,4059 144,4054.523 144,4049 C144,4043.477 139.523,4039 134,4039"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default ToggleTheme;