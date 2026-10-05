import React from 'react';
function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                <img src=
                'Media\images-20250711T113220Z-1-001\media\images\largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock broker in India</h1>  
                    <p className='mb-5'> 2+ Million Zerodha Clients contributes to over 15% of all  retail orders
                         volumes in india daily by trading and investing in:</p>
                         <div className='row'>
                            <div className='col-6 '>
                                <ul>
                            <li>
                                <p> Futures and Goals </p>
                            </li>
                               <li>
                                <p> Commodity and derivatives</p>
                            </li>
                               <li>
                                <p> Currency derivatives </p>
                            </li>
                              
                         </ul>
                            </div>
                                <div className='col-6'>
                                    <ul>
                            <li>
                                <p> Stocks and IPOs</p>
                            </li>
                               <li>
                                <p> Direct mutual Funds</p>
                            </li>
                               <li>
                                <p> Currency derivatives </p>
                            </li>
                              
                          </ul>
                                </div>
                                 </div>
                         <img src='Media\images-20250711T113220Z-1-001\media\images\pressLogos.png'style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;