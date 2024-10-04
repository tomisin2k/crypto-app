import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import ApexChart from './components/ApexChart';
import BarChart from './components/BarChart';
import './App.css';

function App() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Generate 50 holder info entries with updated holder addresses
    const holderInfos = Array.from({ length: 50 }, (_, index) => ({
        holder: `0xBnbHolder${index.toString().padStart(44, '0')}`,
        amount: Math.floor(Math.random() * 1000),
        rank: index + 1
    }));

    return (
        <div className="dashboard">
            <div className="navbar">
                <p>ZNS Connect</p>
            </div>
            <div className="main">
                <div className="main-1">
                    <div className="top-row">
                        <div className="main-1-a">
                            <div className="main-1-a-text">
                                <h3>Total Minting</h3>
                                <p className="large-number">1300</p>
                                <p className="percentage">↑ 15% Last mth</p>
                            </div>
                            <div className="main-1-a-image">
                                <img className="graph-image" src="/graph.jpeg" alt="Description" />
                            </div>
                        </div>
                        <div className="main-1-b">
                            <div className="main-1-b-text">
                                <h3>Total Holders</h3>
                                <p className="large-number">1000</p>
                                <p className="percentage">↑ 7% Last mth</p>
                            </div>
                            <div className="main-1-b-image">
                                <img className="graph-image" src="/graph.jpeg" alt="Description" />
                            </div>
                        </div>
                    </div>

                    <div className="helloAndToday">
                        <div><p className="hello">Registrations</p></div>
                        <div><p className="hello">Today</p></div>
                    </div>

                    <div className="barchart">
                        <BarChart />
                    </div>
                </div>

                <div className="main-2">
                    <p>Minting in the Last 24 Hours</p>
                    <div className="apex-chart-container">
                        <ApexChart />
                    </div>
                </div>
            </div>
            
            <div className="TopHolders">
                <div><p className="Top-Holder">Top Holders</p></div>
                <div className={`dropdown ${dropdownVisible ? 'active' : ''}`}>
                    <div className="Zara" onClick={toggleDropdown}>Zara</div>
                    <ul className="dropdown-menu">
                        <li>BNB</li>
                        <li>BLAST</li>
                        <li>SCROLL</li>
                        <li>POLYGON</li>
                    </ul>
                </div>
            </div>

            <div className="Holders-Info">
                <div className="info-header">
                    <p className="holder-column">Holder</p>
                    <p className="amount-column">Amount</p>
                    <p className="rank-column">Rank</p>
                </div>
                <div className="info-content">
                    {holderInfos.map((info, index) => (
                        <div key={index} className="info-row">
                            <p className="holder-column">{info.holder}</p>
                            <p className="amount-column">{info.amount}</p>
                            <p className="rank-column">{info.rank}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
