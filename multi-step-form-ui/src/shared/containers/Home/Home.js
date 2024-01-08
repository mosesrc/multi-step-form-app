import React from 'react';
import SideBar from '../SideBar/Sidebar';
import RouteContainer from '../RouteContainer/RouteContainer';

import './Home.css';

function Home() {

    return (
        <section>
            <div className='container'>
                <SideBar />
                <div>
                    <RouteContainer />
                </div>
            </div>
        </section>
    )
}

export default Home;