import React, { useState, useEffect } from 'react';
import QRCode from 'react-google-qrcode';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import GooglePayButton from '@google-pay/button-react';
// import { ApplePayButton } from 'react-apple-pay-button';

import { useHistory } from 'react-router-dom';

// Api connection to MISSO
// ==========================================================================================================================
import client from '../../../api/client';

const Apple = '../../assets/images/Add_to_Apple_Wallet_rgb_US-UK.svg';

const Profile = () => {
  const [user, setUser] = useState({});
  const history = useHistory();


  useEffect(() => {
    const fetchUser = async () => {
      const res = await client.get({user})
      setUser(res.user);
      console.log(res);
    }
    fetchUser(user);
  })

  const logout = async () => {
    const res = await client.post('/logout').then(history.push('/login'));
    return res;
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="row d-flex align-items-center min-vh-100">
        <div className="col-md-12 ">
          <div className="row d-flex justify-content-center">
            <h2
              style={{
                fontSize: '42px',
                color: '#c64156',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              MIProfile
            </h2>

            <h4
              className="mv-4 font-weight-bold-display-4"
              style={{
                fontSize: '18px',
                color: '#733bc3',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {user.firstName + ' ' + user.lastName}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center">
            <QRCode data="https://www.google.com" size={280} framed />

            {/* <ApplePayButton onClick={onRequestApplePay} theme="dark">
              {'Add to'}
            </ApplePayButton> */}

            <hr />
            {/* <div className="" style={{ textAlign: 'center' }}>
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: 'CARD',
                      parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                      },
                      tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                          gateway: 'example',
                          gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '100.00',
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                }}
                onLoadPaymentData={(paymentRequest) => {
                  console.log('load payment data', paymentRequest);
                }}
              />
            </div> */}
          </div>
          <div className="col-md-4"></div>

          <div className="col-md-4"></div>

          <div className="col-md-4">
            <Link to="#">
              <img
                src={Apple}
                alt="Add to Apple Wallet"
                style={{ width: '170', height: '50px' }}
              />
            </Link>
          </div>

          <div className="col-md-4"></div>

          <div className="col-md-4"></div>

          <div className="col-md-4 d-flex justify-content-center">
            <hr />

            <button
              className="btn btn-dark mt-3 col-sm-12"
              type="submit"
              onClick={logout}
              style={{
                padding: 15,
                backgroundColor: '#C64156',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                marginVertical: 5,
                height: 50,
                marginBottom: 20,
                border: 'none',
              }}
            >
              Logout
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
