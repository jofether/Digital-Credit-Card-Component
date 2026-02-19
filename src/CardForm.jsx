import React, { useState } from 'react';

const CardForm = ({ onAddCard, onCancel }) => {
  const [formData, setFormData] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate card number (16 digits)
    const cardNum = formData.number.replace(/\s/g, '');
    if (!cardNum || cardNum.length !== 16 || !/^\d+$/.test(cardNum)) {
      newErrors.number = 'Card number must be 16 digits';
    }

    // Validate holder name
    if (!formData.holder.trim()) {
      newErrors.holder = 'Cardholder name is required';
    }

    // Validate expiry (MM/YY format)
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(formData.expiry)) {
      newErrors.expiry = 'Expiry must be in MM/YY format';
    }

    // Validate CVV (3-4 digits)
    if (!formData.cvv || !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3-4 digits';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'number') {
      formattedValue = value.replace(/\D/g, '').slice(0, 16);
      formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    }

    // Format expiry MM/YY
    if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      }
    }

    // Format CVV
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      onAddCard(formData);
      setFormData({ number: '', holder: '', expiry: '', cvv: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 -my-96">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Add New Card</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="4532 1098 7654 3210"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.number ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
          </div>

          {/* Cardholder Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              name="holder"
              value={formData.holder}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.holder ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            {errors.holder && <p className="text-red-500 text-xs mt-1">{errors.holder}</p>}
          </div>

          {/* Expiry & CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Expires</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="12/28"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.expiry ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.cvv ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
