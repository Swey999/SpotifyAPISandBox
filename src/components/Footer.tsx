import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer mt-5">
        <div className="content has-text-centered">
            <p>
            <strong>VibeCheck</strong> by <a href="https://www.linkedin.com/in/nicolaj-w-jensen/">Nicolaj William Jensen</a>.
            The source code is licensed
            <a href="https://opensource.org/license/mit"> MIT</a>. The
            website content is licensed
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
                > CC BY NC SA 4.0</a>.
            </p>
        </div>
        </footer>
    );
};

export default Footer;