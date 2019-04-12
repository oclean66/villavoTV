import React from 'react';

const Sidepanel = (props) => {
    return (
        <nav className="px-2" id="sidebar">
            <ul className="list-unstyled components">
                <p className="listHeader">Series</p>
                <li>
                    <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Home vs Away 1</a>
                </li>
                <li>
                    <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Home vs Away 2</a>
                </li>

                <li className="d-none">
                    <a href="#L" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                        <i className="sicon-sport-1"></i> Soccer
                    </a>
                    <ul className="list-unstyled collapse show" id="L">
                        <li>
                            <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Home vs Away 1</a>
                        </li>
                        <li>
                            <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Home vs Away 2</a>
                        </li>

                    </ul>
                </li>
            </ul>
            <ul className="list-unstyled components">
                <p className="listHeader">Peliculas</p>
                <li>
                    <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Populares</a>
                </li>
                <li>
                    <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Trending</a>
                </li>

                <li className="d-none">
                    <a href="#L" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                        <i className="sicon-sport-1"></i> Soccer
                    </a>
                    <ul className="list-unstyled collapse show" id="L">
                        <li>
                            <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Home vs Away 1</a>
                        </li>
                        <li>
                            <a href="/" className="text-truncate"><i className="fas fa-star"></i>  Home vs Away 2</a>
                        </li>

                    </ul>
                </li>
            </ul>
        </nav>
        
    );
}
export default Sidepanel;