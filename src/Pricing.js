
import React, { useState } from 'react';

const services = [
  { name: 'Logo Design', price: 30 },
  { name: 'Branding Kit', price: 50 },
  { name: 'Social Media Pack', price: 25 },
  { name: '1-on-1 Tutoring (per hr)', price: 15 },
  { name: 'Group Tutoring (per hr)', price: 10 },
  { name: 'ICT Support (per call)', price: 20 },
  { name: 'Network Setup', price: 40 },
];

const paymentOptions = [
  { name: 'Ecocash', color: '#43b581', url: 'https://www.ecocash.co.zw/' },
  { name: 'One Wallet', color: '#2d89ef', url: 'https://www.onewallet.co.zw/' },
  { name: 'Bank Deposit', color: '#fbbc05', url: 'https://www.yourbank.com/deposit' },
];


function generateInvoiceHTML(selected, total, customer) {
  const date = new Date().toLocaleDateString();
  return `<!DOCTYPE html>
  <html><head><meta charset='utf-8'><title>Invoice - Mageza ICT Hub</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fa; color: #222; margin: 0; padding: 0; }
    .invoice-box { max-width: 540px; margin: 40px auto; background: #fff; border-radius: 18px; box-shadow: 0 4px 24px #2d89ef22; padding: 32px 28px; }
    .header { display: flex; align-items: center; gap: 18px; margin-bottom: 18px; }
    .logo { width: 60px; border-radius: 12px; }
    .company { font-size: 1.3rem; font-weight: 700; color: #2d89ef; }
    .address { color: #555; font-size: 0.98rem; margin-bottom: 8px; }
    .section-title { color: #43b581; font-weight: 600; margin-top: 18px; margin-bottom: 6px; font-size: 1.1rem; }
    .details-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .details-table th, .details-table td { padding: 8px 6px; text-align: left; }
    .details-table th { background: #f4f8fb; color: #2d89ef; }
    .details-table tr:nth-child(even) { background: #f8f9fa; }
    .total-row td { font-weight: 700; color: #43b581; border-top: 2px solid #2d89ef22; }
    .footer { margin-top: 24px; color: #888; font-size: 0.98rem; text-align: center; }
  </style></head><body>
    <div class='invoice-box'>
      <div class='header'>
        <img src='https://i.ibb.co/6bQ7Qkz/mageza-logo.png' class='logo' alt='Mageza Logo'/>
        <div>
          <div class='company'>Mageza ICT Hub</div>
          <div class='address'>65 Twentydales, Hatfield, Harare<br/>washayamike@gmail.com<br/>+263 77 292 5445</div>
        </div>
      </div>
      <div class='section-title'>Invoice</div>
      <div>Date: ${date}</div>
      <div class='section-title'>Billed To</div>
      <div>${customer.name}<br/>${customer.email}${customer.phone ? `<br/>${customer.phone}` : ''}</div>
      <div class='section-title'>Services</div>
      <table class='details-table'>
        <tr><th>Service</th><th>Price</th></tr>
        ${selected.map(s => `<tr><td>${s.name}</td><td>$${s.price}</td></tr>`).join('')}
        <tr class='total-row'><td>Total</td><td>$${total}</td></tr>
      </table>
      <div class='footer'>Thank you for choosing Mageza ICT Hub!</div>
    </div>
  </body></html>`;
}

function generateReceiptHTML(selected, total, customer, payment) {
  const date = new Date().toLocaleDateString();
  return `<!DOCTYPE html>
  <html><head><meta charset='utf-8'><title>Receipt - Mageza ICT Hub</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fa; color: #222; margin: 0; padding: 0; }
    .receipt-box { max-width: 480px; margin: 40px auto; background: #fff; border-radius: 18px; box-shadow: 0 4px 24px #43b58122; padding: 32px 28px; }
    .header { display: flex; align-items: center; gap: 18px; margin-bottom: 18px; }
    .logo { width: 54px; border-radius: 12px; }
    .company { font-size: 1.2rem; font-weight: 700; color: #43b581; }
    .address { color: #555; font-size: 0.98rem; margin-bottom: 8px; }
    .section-title { color: #2d89ef; font-weight: 600; margin-top: 18px; margin-bottom: 6px; font-size: 1.08rem; }
    .details-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .details-table th, .details-table td { padding: 8px 6px; text-align: left; }
    .details-table th { background: #f4f8fb; color: #43b581; }
    .details-table tr:nth-child(even) { background: #f8f9fa; }
    .total-row td { font-weight: 700; color: #2d89ef; border-top: 2px solid #43b58122; }
    .footer { margin-top: 24px; color: #888; font-size: 0.98rem; text-align: center; }
  </style></head><body>
    <div class='receipt-box'>
      <div class='header'>
        <img src='https://i.ibb.co/6bQ7Qkz/mageza-logo.png' class='logo' alt='Mageza Logo'/>
        <div>
          <div class='company'>Mageza ICT Hub</div>
          <div class='address'>65 Twentydales, Hatfield, Harare<br/>washayamike@gmail.com<br/>+263 77 292 5445</div>
        </div>
      </div>
      <div class='section-title'>Receipt</div>
      <div>Date: ${date}</div>
      <div class='section-title'>Customer</div>
      <div>${customer.name}<br/>${customer.email}${customer.phone ? `<br/>${customer.phone}` : ''}</div>
      <div class='section-title'>Services</div>
      <table class='details-table'>
        <tr><th>Service</th><th>Price</th></tr>
        ${selected.map(s => `<tr><td>${s.name}</td><td>$${s.price}</td></tr>`).join('')}
        <tr class='total-row'><td>Total</td><td>$${total}</td></tr>
      </table>
      <div class='section-title'>Payment Method</div>
      <div>${payment ? payment.name : ''}</div>
      <div class='footer'>Thank you for your payment!</div>
    </div>
  </body></html>`;
}

const Pricing = () => {
  const [selected, setSelected] = useState([]);
  const [payment, setPayment] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [formError, setFormError] = useState('');
  // Payment details for mobile/bank
  const [mobileDetails, setMobileDetails] = useState({ phone: '', pin: '' });
  const [bankDetails, setBankDetails] = useState({ account: '', pin: '' });
  const [authorising, setAuthorising] = useState(false);
  // Dropdown for mobile payment type
  const [mobileType, setMobileType] = useState('Ecocash');

  const toggleService = (svc) => {
    setSelected(sel => sel.some(s => s.name === svc.name)
      ? sel.filter(s => s.name !== svc.name)
      : [...sel, svc]);
  };
  const total = selected.reduce((sum, s) => sum + s.price, 0);

  const handlePay = (opt) => {
    if (!customer.name || !customer.email) {
      setFormError('Please enter your name and email before payment.');
      return;
    }
    // Mobile money
    if (opt.name === 'Ecocash' || opt.name === 'One Wallet') {
      if (!mobileDetails.phone.match(/^\d{8,15}$/)) {
        setFormError('Enter a valid mobile number for payment.');
        return;
      }
      if (!mobileDetails.pin.match(/^\d{4,6}$/)) {
        setFormError('Enter a valid 4-6 digit mobile PIN.');
        return;
      }
      setFormError('');
      setAuthorising(true);
      setTimeout(() => {
        setAuthorising(false);
        setPayment(opt);
        setShowReceipt(true);
        setTimeout(() => setShowReceipt(false), 3500);
      }, 2000);
      return;
    }
    // Bank
    if (opt.name === 'Bank Deposit') {
      if (!bankDetails.account.match(/^\d{6,20}$/)) {
        setFormError('Enter a valid bank account number.');
        return;
      }
      if (!bankDetails.pin.match(/^\d{4,6}$/)) {
        setFormError('Enter a valid 4-6 digit bank PIN.');
        return;
      }
      setFormError('');
      setAuthorising(true);
      setTimeout(() => {
        setAuthorising(false);
        setPayment(opt);
        setShowReceipt(true);
        setTimeout(() => setShowReceipt(false), 3500);
      }, 2000);
      return;
    }
    // Default
    setFormError('');
    setPayment(opt);
    setShowReceipt(true);
    setTimeout(() => setShowReceipt(false), 3500);
  };

  const handleInvoice = () => {
    if (!customer.name || !customer.email) {
      setFormError('Please enter your name and email before generating invoice.');
      return;
    }
    setFormError('');
    setShowInvoice(true);
    const html = generateInvoiceHTML(selected, total, customer);
    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Mageza_Invoice.html';
    link.click();
    setTimeout(() => setShowInvoice(false), 2000);
  };

  const handleReceiptDownload = () => {
    const html = generateReceiptHTML(selected, total, customer, payment);
    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Mageza_Receipt.html';
    link.click();
  };

  return (
    <section style={{ padding: '2rem 0', textAlign: 'center', animation: 'fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1)' }}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pricing-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 12px #2d89ef11;
          padding: 28px 24px 18px 24px;
          min-width: 220px;
          max-width: 320px;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.3s, transform 0.3s;
          animation: fadeInUp 1.1s both;
          border-top: 5px solid #2d89ef;
        }
        .pricing-card.selected {
          border-top: 5px solid #43b581;
          box-shadow: 0 8px 32px #43b58133;
          transform: scale(1.04);
        }
        .pay-btn {
          background: linear-gradient(90deg, #2d89ef 0%, #43b581 100%);
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          border-radius: 24px;
          padding: 0.7rem 2.2rem;
          margin: 0 10px 0 0;
          box-shadow: 0 2px 12px #2d89ef33;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, transform 0.2s;
        }
        .pay-btn:hover {
          background: linear-gradient(90deg, #43b581 0%, #2d89ef 100%);
          color: #fff;
          transform: scale(1.07) translateY(-2px);
        }
        .invoice-btn {
          background: #fff;
          color: #2d89ef;
          border: 2px solid #2d89ef;
          border-radius: 24px;
          padding: 0.7rem 2.2rem;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 18px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .invoice-btn:hover {
          background: #2d89ef;
          color: #fff;
        }
        .receipt {
          background: #43b581;
          color: #fff;
          border-radius: 12px;
          padding: 1.2rem 2rem;
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          box-shadow: 0 8px 32px #43b58133;
          font-size: 1.1rem;
          animation: fadeInUp 0.7s;
        }
        .receipt strong { color: #fff; }
      `}</style>
      <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Pricing & Payment</h2>
      <div style={{
        maxWidth: 420,
        margin: '0 auto 32px auto',
        background: '#f8f9fa',
        borderRadius: 16,
        boxShadow: '0 2px 12px #2d89ef11',
        padding: 24,
        textAlign: 'left',
        marginBottom: 32
      }}>
        <h3 style={{ color: '#2d89ef', fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Customer Details</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Full Name"
            value={customer.name}
            onChange={e => setCustomer({ ...customer, name: e.target.value })}
            style={{ flex: 1, minWidth: 120, padding: 10, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, marginBottom: 8 }}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={customer.email}
            onChange={e => setCustomer({ ...customer, email: e.target.value })}
            style={{ flex: 1, minWidth: 120, padding: 10, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, marginBottom: 8 }}
            required
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            value={customer.phone}
            onChange={e => setCustomer({ ...customer, phone: e.target.value })}
            style={{ flex: 1, minWidth: 120, padding: 10, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, marginBottom: 8 }}
          />
        </div>
        {formError && <div style={{ color: '#e1306c', fontWeight: 600, marginTop: 4 }}>{formError}</div>}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 32 }}>
        {services.map((svc, i) => (
          <div
            key={svc.name}
            className={`pricing-card${selected.some(s => s.name === svc.name) ? ' selected' : ''}`}
            onClick={() => toggleService(svc)}
            style={{ borderTop: selected.some(s => s.name === svc.name) ? '5px solid #43b581' : '5px solid #2d89ef', cursor: 'pointer' }}
          >
            <div style={{ fontWeight: 700, fontSize: 20, color: '#2d89ef', marginBottom: 8 }}>{svc.name}</div>
            <div style={{ fontWeight: 600, fontSize: 22, color: '#43b581', marginBottom: 8 }}>${svc.price}</div>
            <div style={{ color: '#888', fontSize: 15 }}>{svc.name.includes('Tutoring') ? 'per hour' : 'flat rate'}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, margin: '18px 0', color: '#2d89ef' }}>Total: ${total}</div>
      {/* Payment details fields */}
      <div style={{ margin: '1.5rem 0' }}>
        {/* Dropdown for mobile money */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 600, color: '#2d89ef', marginRight: 8 }}>Mobile Payment:</label>
          <select
            value={mobileType}
            onChange={e => setMobileType(e.target.value)}
            style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, minWidth: 120, marginRight: 12 }}
          >
            <option value="Ecocash">Ecocash</option>
            <option value="One Wallet">OneMoney</option>
          </select>
          <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileDetails.phone}
              onChange={e => setMobileDetails({ ...mobileDetails, phone: e.target.value.replace(/[^\d]/g, '') })}
              style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, minWidth: 140 }}
              maxLength={15}
            />
            <input
              type="password"
              placeholder="Mobile PIN"
              value={mobileDetails.pin}
              onChange={e => setMobileDetails({ ...mobileDetails, pin: e.target.value.replace(/[^\d]/g, '') })}
              style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, minWidth: 100 }}
              maxLength={6}
            />
            <button
              className="pay-btn"
              style={{ background: `linear-gradient(90deg, #43b581 0%, #2d89ef 100%)` }}
              onClick={() => handlePay({ name: mobileType, color: mobileType === 'Ecocash' ? '#43b581' : '#2d89ef' })}
              disabled={authorising}
            >
              Pay with {mobileType}
            </button>
          </div>
        </div>
        {/* Bank payment */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 600, color: '#fbbc05', marginRight: 8 }}>Bank Payment:</label>
          <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="text"
              placeholder="Account Number"
              value={bankDetails.account}
              onChange={e => setBankDetails({ ...bankDetails, account: e.target.value.replace(/[^\d]/g, '') })}
              style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, minWidth: 140 }}
              maxLength={20}
            />
            <input
              type="password"
              placeholder="Bank PIN"
              value={bankDetails.pin}
              onChange={e => setBankDetails({ ...bankDetails, pin: e.target.value.replace(/[^\d]/g, '') })}
              style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 15, minWidth: 100 }}
              maxLength={6}
            />
            <button
              className="pay-btn"
              style={{ background: `linear-gradient(90deg, #fbbc05 0%, #2d89ef 100%)` }}
              onClick={() => handlePay({ name: 'Bank Deposit', color: '#fbbc05' })}
              disabled={authorising}
            >
              Pay with Bank
            </button>
          </div>
        </div>
        {authorising && (
          <div style={{ color: '#43b581', fontWeight: 600, marginTop: 8, fontSize: 17 }}>
            Authorise payment on your mobile device...
          </div>
        )}
      </div>
      <button className="invoice-btn" onClick={handleInvoice} disabled={selected.length === 0}>
        Generate & Download Invoice
      </button>
      {showReceipt && payment && (
        <div className="receipt">
          <strong>Payment Successful!</strong><br />
          Paid via {payment.name}.<br />
          <span style={{ fontWeight: 600 }}>Download your receipt <a href="#" style={{ color: '#fff', textDecoration: 'underline' }} onClick={e => {
            e.preventDefault();
            handleReceiptDownload();
          }}>here</a>.</span>
        </div>
      )}
    </section>
  );
};

export default Pricing;
