import './Content.css'

function Content(){
    return (
        <div className="content">
            <div className="content__box">
                <h1>ĐĂNG NHẬP</h1>
                <div className="box__btn">
                    <a className="content__box--fb" href=""></a>
                    Đăng nhập với Facebook
                </div>
                <div className="box__btn">
                    <a className="content__box--gg" href=""></a>
                    Đăng nhập với GooGle
                </div>

                <div className="boxRow3">
                   <span className="span__left"></span>
                   <p className="textLogin">Đăng nhập bằng tài khoản</p>
                   <span className="span__right"></span>
                </div>

                <input type="text" placeHolder="Địa chỉ email"></input>
                <input type="password" placeHolder="Mật khẩu"></input>
                <p className="textUser">
                    <input type="checkbox"></input>
                    Nhớ tài khoản
                </p>
                <p className="textPass">Quên mật khẩu</p>

                <button className="btnLogin">Đăng nhập</button>
                <div className="contentBox__col2">
                   <p className="textCol2__what">Bạn có biết cocoon?</p>
                   <p className="textCol2__signUp">Đăng ký</p>
                </div>
            </div>
        </div>
    )
}

export default Content