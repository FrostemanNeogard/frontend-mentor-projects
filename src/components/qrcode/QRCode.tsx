import QRCodeImage from '../../assets/qrcode/image-qr-code.png'
import '../../styling/qrcode/qrcode.sass'

export default function QRCode() {
  return (
    <div className='qr-code-project'>
      <div className="card">
        <img src={QRCodeImage} alt="QR Code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor
          and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}
