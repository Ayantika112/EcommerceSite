import '../../style/voiceApp.css'
export function MainDashboard() {
    return (
        <>
            <div className="m-2 row">
                <div className="mainClass col-lg-12">
                    <div className='header-voice row'>
                        <nav class="navbar">
                            <div class="logo-voice col-2">Easy Dub</div>
                            <div class="col-3 m-4">
                                <ul className='navbar-nav  navLink-voice'>
                                    <li className='nav-item'>
                                        <button className='button-dashboard-voice'>Book A Demo</button>
                                    </li>
                                    <li className='nav-item'>
                                        <button className='button-dashboard-voice'>Get Start For Free</button>
                                    </li>
                                    <li className='nav-item'>
                                        <button className='button-dashboard-voice'>LogIn</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className='body-voice'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div>
                                    The dubbing revolution begins with Deepdub
                                    Dubbing and voice over end-to-end localization at scale in a single platform.
                                </div>
                                <div>
                                    What content type do you want to dub today?
                                </div>
                                <div>
                                <button className='button-dashboard-voice'>Book A Demo</button>
                                <button className='button-dashboard-voice'>Book A Demo</button>
                                <button className='button-dashboard-voice'>Book A Demo</button>
                                <button className='button-dashboard-voice'>Book A Demo</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='btn-toggle' style={{
                                    'display': 'flex',
                                    'justify-content': 'end'
                                }}>
                                    <input type="checkbox" id="switch" />
                                    <label for="switch">Toggle</label>
                                </div>
                                <div>
                                    <img src='data:image/png;base64,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' alt='error'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-voice row'>
                        <div class="logo-voice col-lg-4">
                            <div className='row'>
                                <label>1,000+ hours of dubbed content are already streaming on your favorite media providers worldwide</label>
                            </div>
                            <div className='row'>
                                <div className='addPatner-voice col-auto'>
                                    ABC
                                </div>
                                <div className='addPatner-voice col-auto'>
                                    FACEBOOK
                                </div>
                                <div className='addPatner-voice col-auto'>
                                    UBER
                                </div>
                                <div className='addPatner-voice col-auto'>
                                    OLA
                                </div>
                                <div className='addPatner-voice col-auto'>
                                    FACEBOOK
                                </div>
                                <div className='addPatner-voice col-auto'>
                                    OLA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
