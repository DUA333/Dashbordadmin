import React from 'react'

import "./Chome.css"

import CsideMenu from '../../components/Csidemenu'

import Cnavbar from '../../components/Cnavbar'
import Cwidget from '../../components/Cwidget'
import Featured from '../../components/featured'
import Chart from '../../components/chart'


const Chome = () => {
    return (

        <div className="home">
            <CsideMenu />
            <div className='homeContainer'>
                <Cnavbar />

                <div className='widgets'>
                    <Cwidget type="places" />
                    <Cwidget type="Users" />
                </div>
                <div className="charts">
                    <Featured />

                </div>


            </div>

        </div>
    )
}

export default Chome;
