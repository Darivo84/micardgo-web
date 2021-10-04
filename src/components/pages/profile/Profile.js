import React, { useCallback } from 'react';
import QRCode from 'react-google-qrcode';
import GooglePayButton from '@google-pay/button-react';
import { ApplePayButton } from 'react-apple-pay-button';
import { Link } from 'react-router-dom';

const Profile = () => {
  // const userData = {
  //   firstName: 'Dayne',
  //   lastName: 'Email',
  //   phoneNumber: '000 000 0000',
  //   email: 'dayne@test.com'
  // }

  const onRequestApplePay = useCallback(() => {
    const result = <QRCode data="https://www.google.com" size={230} framed />;
    return result;
  }, []);

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="row d-flex align-items-center min-vh-100">
        <div className="col-md-12 ">
          <div className="row">
            <h2
              className="mv-4 font-weight-bold-display-4"
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
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
              Default User
            </h4>
            <QRCode data="https://www.google.com" size={230} framed />
            <hr />

            <ApplePayButton onClick={onRequestApplePay} theme="dark">
              {'Add to'}
            </ApplePayButton>

            <hr />
            <div className="" style={{ textAlign: 'center' }}>
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
            </div>

            <hr />

            <Link to="/">
              <button
                className="btn btn-dark mt-3 col-sm-12"
                type="submit"
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
            </Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
