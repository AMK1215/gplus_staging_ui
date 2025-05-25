import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import './DepositPage.css';

const bankAccounts = [
  {
    label: 'KBZ Bank - 0123456789',
    value: 'kbz',
    name: 'DAW YIN HLA (KP11)',
    number: '0123456789',
  },
  {
    label: 'CB Bank - 9876543210',
    value: 'cb',
    name: 'U AUNG KYAW',
    number: '9876543210',
  },
  {
    label: 'AYA Bank - 1234987654',
    value: 'aya',
    name: 'MA SU SU',
    number: '1234987654',
  },
];

const quickAmounts = [5000, 10000, 20000, 50000, 100000];

const WithdrawPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [amount, setAmount] = useState('');

  const selectedAccount = bankAccounts.find(b => b.value === selectedBank);

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
            <form className="deposit-form">
              <div className="deposit-form-row">
                <div className="deposit-form-label">Bank Account *</div>
                <div className="deposit-form-value">
                  <select
                    className="deposit-input"
                    value={selectedBank}
                    onChange={e => setSelectedBank(e.target.value)}
                  >
                    <option value="">Select bank account</option>
                    {bankAccounts.map(acc => (
                      <option key={acc.value} value={acc.value}>{acc.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Bank Account Name *</div>
                <div className="deposit-form-value">
                  <input
                    className="deposit-input"
                    value={selectedAccount ? selectedAccount.name : ''}
                    placeholder="Enter account name"
                    readOnly
                  />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Bank Account Number *</div>
                <div className="deposit-form-value">
                  <input
                    className="deposit-input"
                    value={selectedAccount ? selectedAccount.number : ''}
                    placeholder="Enter account number"
                    readOnly
                  />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label">Amount *</div>
                <div className="deposit-form-value">
                  <input
                    className="deposit-input"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="deposit-form-row">
                <div className="deposit-form-label"></div>
                <div className="deposit-form-value deposit-minmax">! Min/Max Limit: 3000 / 50000</div>
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

export default WithdrawPage; 