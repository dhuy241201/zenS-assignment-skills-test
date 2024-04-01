import React from 'react'

function Footer() {
  return (
    <div id='footer'>
        <hr className="footer__top-line" />
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__content--paragraph">This website is created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not constitute any form of advice. HLS assumes no responsibility for accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site</p>
          <p className="footer__content--copyright">Copy right 2021 HLS</p>
        </div>
      </div>
    </div>
  )
}

export default Footer