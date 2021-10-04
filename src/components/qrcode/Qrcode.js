/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export const Qrcode = () => {
  const [src, setSrc] = useState('');

  const userData = 'Dayne Voller';
  // useEffect(() => {
  //   QRCode.toDataURL(text).then((data) => {
  //     setSrc(data);
  //   });
  // }, [])

  useEffect(() => {
    QRCode.toDataURL(userData).then(setSrc);
  }, []);

  return (
    <div>
      <img src={src} alt="Qrcode" style={{ width: '170', height: '160' }} />
    </div>
  );
};
