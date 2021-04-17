import React from "react";

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__logo item">
            <h3>Logo DIQ</h3>
          </div>
          <div className="footer__name item">
            <h4>Diem Quynh Seafoods</h4>
            <p>© 2021 All Rights Reversed</p>
          </div>
          <div className="footer__contacts item">
              <div className="info">
                <div className="phone">
                <i class="fa fa-phone" aria-hidden="true"></i><span>info@diemquynhseafoods.com</span>
                </div>
                <div className="mail">
                <i class="fas fa-envelope"></i><span>info@diemquynhseafoods.com</span>
                </div>
              </div>
              <div className="social">

              </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
