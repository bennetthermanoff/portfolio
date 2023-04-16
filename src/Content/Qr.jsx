import {QRCodeSVG} from 'qrcode.react';
import './ContentPage.css'
import {useState} from 'react';
const QrPage = ()=>{
    const [qrValue, setQrValue] = useState('https://hermanoff.dev/');

    const onChange = (e)=>{
        const value = e.target.value;
        //if value does not start with http:// or https://, add https:// to the beginning
        // if(value.startsWith('http://') || value.startsWith('https://')){
        //     setQrValue(value);
        // }else{
        //     setQrValue('https://'+value);
        // }
        setQrValue(value);
    }

    return(
        <div className='content'>
            <div className='contentBackgroundColumnQR'>
            <QRCodeSVG value={qrValue} className='QR' size={500}/>
            <input type='text' className='QRInput' placeholder='Enter URL here' onChange={onChange} value={qrValue}/>
            </div>
        </div>
        
    )
}
export {QrPage};