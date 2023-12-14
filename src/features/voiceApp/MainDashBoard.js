import { Navbar } from 'react-bootstrap'
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
                                    <li className='nav-item'>Book A Demo</li>
                                    <li className='nav-item'>Get Start For Free</li>
                                    <li className='nav-item'>LogIn</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className='body-voice'>

                    </div>
                    <div className='footer-voice'>

                    </div>
                </div>
            </div>
        </>
    )
}
