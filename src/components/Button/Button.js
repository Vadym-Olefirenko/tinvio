import React from 'react';

import './Button.scss';

function Button({buttonText, buttonClassNames}) {
    return (
        <button className={buttonClassNames ? `btn ${buttonClassNames}` : "btn"}>
            {buttonText}
        </button>
    )
}

export default Button;
