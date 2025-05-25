import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import './DepositPage.css';
import wave from '../assets/bank/wave-IwEb2PTv.png';
import cbPay from '../assets/bank/cbPay-lu2YcHgF.png';
import cb from '../assets/bank/cb-BI2vU15L.png';
import ayaBank from '../assets/bank/ayaBank-o25EZCMt.png';
import kbzB from '../assets/bank/kbzB-DIO7ppKK.png';
import kbzP from '../assets/bank/kbzP-ERiCkKX-.png';

const banks = [
  {
    img: kbzP,
    alt: 'KBZ Pay',
    value: 'kbzPay',
    accountName: 'DAW YIN HLA (KP11)',
    accountNumber: '09444746800',
  },
  {
    img: kbzB,
    alt: 'KBZ Bank',
    value: 'kbzBank',
    accountName: 'U AUNG KYAW',
    accountNumber: '01234567890',
  },
  {
    img: ayaBank,
    alt: 'AYA Bank',
    value: 'ayaBank',
    accountName: 'MA SU SU',
    accountNumber: '09876543210',
  },
  {
    img: cb,
    alt: 'CB Bank',
    value: 'cbBank',
    accountName: 'U KO KO',
    accountNumber: '11223344556',
  },
  {
    img: cbPay,
    alt: 'CB Pay',
    value: 'cbPay',
    accountName: 'DAW MI MI',
    accountNumber: '22334455667',
  },
  {
    img: wave,
    alt: 'Wave Money',
    value: 'wave',
    accountName: 'U TUN TUN',
    accountNumber: '33445566778',
  },
];

const quickAmounts = [5000, 10000, 20000, 50000, 100000];

const DepositPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(banks[0].value);
  const [amount, setAmount] = useState('');

  const handleQuickAmount = (val) => {
    setAmount(val.toString());
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value.replace(/[^0-9]/g, ''));
  };

  return (
    <>
      <TopBar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="deposit-layout">
        <div className="deposit-content">
          <div className="deposit-form-card">
            <div className="deposit-banks">
              {banks.map(bank => (
                <button
                  type="button"
                  key={bank.value}
                  className={`deposit-bank-btn${selectedBank === bank.value ? ' selected' : ''}`}
                  onClick={() => setSelectedBank(bank.value)}
                >
                  <img src={bank.img} alt={bank.alt} className="deposit-bank-img" />
                </button>
              ))}
            </div>
            <form className="deposit-form">
              <div className="deposit-form-row">
                <div className="deposit-form-label">Deposit To</div>
                <div className="deposit-form-value" style={{display: 'flex', alignItems: 'center', gap: '0.7rem'}}>
                  <img src={banks.find(b => b.value === selectedBank)?.img} alt={banks.find(b => b.value === selectedBank)?.alt} className="deposit-bank-img" style={{height: 36, width: 36, boxShadow: 'none', background: 'transparent'}} />
                  <span style={{fontWeight: 700, fontSize: '1.13rem'}}>{banks.find(b => b.value === selectedBank)?.alt}</span>
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Bank Account *</div>
                <div className="deposit-form-value">
                  {banks.find(b => b.value === selectedBank)?.accountName}<br />
                  {banks.find(b => b.value === selectedBank)?.accountNumber}
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Amount *</div>
                <div className="deposit-form-value">
                  <input
                    className="deposit-input"
                    placeholder="Minimum: 5000/ Maximum : 5000000"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label"></div>
                <div className="deposit-form-value deposit-minmax">! Min/Max Limit: 50 / 50000</div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label"></div>
                <div className="deposit-form-value deposit-quick-amounts">
                  {quickAmounts.map(val => (
                    <button
                      type="button"
                      key={val}
                      className={`deposit-quick-btn${amount === val.toString() ? ' selected' : ''}`}
                      onClick={() => handleQuickAmount(val)}
                    >
                      {val.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Receipt *</div>
                <div className="deposit-form-value">
                  <input type="file" className="deposit-input" />
                </div>
              </div>
              <div className="deposit-submit-row">
                <button type="submit" className="deposit-submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositPage; 