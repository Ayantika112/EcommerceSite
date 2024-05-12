import '../logIn/DesignLogin.css'
function DesignLogin(){
return(
    <>
    <div className='mainContainer container'>
        <div className='subMain'>
            <div className='creatingForm'>
            <form class="login">
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="text" class="login__input" placeholder="User name / Email"/>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" class="login__input" placeholder="Password"/>
                        </div>
                        <button class="button login__submit">
                            <span class="button__text">Log In Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button> 
                    </form>
                    <div class="social-login">
                        <h3>log in via</h3>
                        <div class="social-icons">
                            <a href="#" class="social-login__icon fab fa-instagram"></a>
                            <a href="#" class="social-login__icon fab fa-facebook"></a>
                            <a href="#" class="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
            </div>
            <div className='add_div_style'>
                <div className='style_1_div div_style'></div>
                <div className='style_2_div div_style'></div>
            </div>
        </div>
    </div>
    </>
)
}
export default DesignLogin;