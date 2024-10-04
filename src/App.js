import React, { useState, useMemo } from 'react';
import ApexChart from './components/ApexChart';
import BarChart from './components/BarChart';
import './App.css';

function App() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState('Zara');
    const [selectedTimeRange, setSelectedTimeRange] = useState('24 hours'); // State for time range

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleNetworkSelect = (network) => {
        setSelectedNetwork(network);
        setDropdownVisible(false);
    };

    const handleTimeRangeSelect = (range) => {
        setSelectedTimeRange(range);
    };

    // Generate 50 holder info entries with dynamic holder addresses
    const holderInfos = useMemo(() => {
        return Array.from({ length: 50 }, (_, index) => ({
            holder: `0x${selectedNetwork}Holder${index.toString().padStart(44, '0')}`,
            amount: Math.floor(Math.random() * 1000),
            rank: index + 1
        }));
    }, [selectedNetwork]);

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
                        <div className="time-range-dropdown">
                            <select value={selectedTimeRange} onChange={(e) => handleTimeRangeSelect(e.target.value)}>
                                <option value="1 hour">1 hour</option>
                                <option value="6 hours">6 hours</option>
                                <option value="24 hours">24 hours</option>
                                <option value="1 day">1 day</option>
                                <option value="7 days">7 days</option>
                                <option value="30 days">30 days</option>
                                <option value="all time">All Time</option>
                            </select>
                        </div>
                    </div>

                    <div className="barchart">
                        <BarChart timeRange={selectedTimeRange} />
                    </div>
                </div>

                <div className="main-2">
                    <p>Minting in the Last 24 Hours</p>
                    <div className="apex-chart-container">
                        <ApexChart />
                    </div>
                </div>
            </div>

            <div className="holders-section">
                <div className="TopHolders">
                    <div><p className="Top-Holder">Top Holders</p></div>
                    <div className={`dropdown ${dropdownVisible ? 'active' : ''}`}>
                        <div className="Zara" onClick={toggleDropdown}>{selectedNetwork}</div>
                        {dropdownVisible && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleNetworkSelect('Zara')}>Zara</li>
                                <li onClick={() => handleNetworkSelect('BNB')}>BNB</li>
                                <li onClick={() => handleNetworkSelect('BLAST')}>BLAST</li>
                                <li onClick={() => handleNetworkSelect('SCROLL')}>SCROLL</li>
                                <li onClick={() => handleNetworkSelect('POLYGON')}>POLYGON</li>
                            </ul>
                        )}
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
        </div>
    );
}

export default App;
