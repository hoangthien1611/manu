
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from '../../Route';
import Header from '../../components/header/HeaderComponent';
import Footer from '../../components/footer/FooterComponent';

export default function RootContainer() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="cplgr-main-container">
                    <AppRoute />
                </div>
                <Footer />
            </div>
        </Router>
    );
}