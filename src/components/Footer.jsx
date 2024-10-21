import React from 'react'
import "../styles/footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h1 className='footer_heading'>Contacts</h1>
            <ul>
            <li>Tel: +44 7968 728366 </li>
            <li>Email: ask@londonsmp.co.uk</li>
            </ul>
            <p>&copy; 2013-2024 Erudite scholars school of Mathematics and Programming Limited</p>
        </div>

        <div>
            <h1 className='footer_heading'>Follow us</h1>
           <img className="footer_img"src='https://tse4.mm.bing.net/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&pid=Api&P=0&h=220'/>
           <img className="footer_img" src='https://tse2.mm.bing.net/th?id=OIP.KCJEmY8LjbXYgpnf-fZ4UAHaEK&pid=Api&P=0&h=220'/>
\        </div>
    </div>
  )
}

export default Footer