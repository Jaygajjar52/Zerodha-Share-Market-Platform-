import React from 'react';
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5 '>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h2 className='fs-4'> Customer First always</h2>
                    <p className='text-muted'>That's why 1.5 crore customers trust Zerodha with ₹3.6+ 
                        lakh crores  worth of equity investements.</p>
                        <h2 className='fs-4'> No Spam or Gimmicks</h2>
                    <p className='text-muted'> No gimmicks,spam,"Gamification",or annoting push
                        notifications.High quality apps that you use at your pace,The
                        way you like.
                    </p>
                        <h2 className='fs-4'> The Zerodha Universe</h2>
                    <p className='text-muted'> Not just an app,but the whole ecosystem,Our investements in 
                        30+ fintech startups offer you tailored services specific to
                        your needs.
                    </p>
                        <h2 className='fs-4'> Do Better with money</h2>
                    <p className='text-muted'> with innitiatives like Nudge and Kill switch,we don't just
                        facilitate transactions,but actively help you do better with
                        your money.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src='Media\images-20250711T113220Z-1-001\media\images\ecosystem.png' alt="" style={{width:"90%"}}/>
                    <div className='text-center'>

                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our Products➔  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite Demo➔ <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div> 
                </div>
            </div>
        </div>
     );
}

export default Stats;