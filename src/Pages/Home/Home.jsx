import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <div>
                <Link to={"/complain-received"}> Complain Received </Link>
            </div>

            <div>
                <Link to={"/complain-received2"}> Complain Received 2 </Link>
            </div>

            <div>
                <Link to={"/complain-received-edit"}> Complain Received/Edit </Link>
            </div>

        </div>
    );
};

export default Home;