import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from '../Components/Home.jsx'
import Latest from '../Components/Latest.jsx'
import Selling from '../Components/Selling.jsx';
import ContactAd from '../Components/ContactAd.jsx';
import ContactUs from '../Components/ContactUs.jsx';
import Buy from '../Components/Buy.jsx';
import Sell from '../Components/Sell.jsx';
import AboutUs from '../Components/AboutUs.jsx';
import IndCar from '../Components/IndCar.jsx';


export const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: (
                    <>
                        <Home />
                        <Latest />
                        <ContactAd />
                        <Selling />
                    </>
                ),
            },
            {
                path: 'bilarna',
                element: <Buy />
            },
            {
                path: 'salg',
                element: <Sell />
            },
            {
                path: 'omoss',
                element: <AboutUs />
            },
            {
                path: 'kontakt',
                element: <ContactUs />
            },
            {
                path: 'indcar',
                element: <IndCar />
            },
        ],
    },
]);
