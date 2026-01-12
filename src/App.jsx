import React, { useState } from 'react';
import CreditCard from './CreditCard';
import CardForm from './CardForm';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      number: '4532 1098 7654 3210',
      holder: 'Jofether Mendoza',
      expiry: '12/28',
      cvv: '123',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleAddCard = (cardData) => {
    const newCard = {
      id: Date.now(),
      ...cardData,
    };
    setCards([...cards, newCard]);
    setShowForm(false);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const toggleFlip = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex flex-col items-center justify-center p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Digital Wallet</h1>
        <p className="text-slate-600">Manage your payment methods</p>
      </div>

      {/* Cards Gallery */}
      {cards.length > 0 ? (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
            {cards.map((card) => (
              <div key={card.id} className="flex justify-center">
                <CreditCard
                  card={card}
                  isFlipped={flippedCardId === card.id}
                  onClick={() => toggleFlip(card.id)}
                  onDelete={() => handleDeleteCard(card.id)}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-6">Click a card to flip and see CVV</p>
        </div>
      ) : (
        <div className="text-center mb-12 text-slate-600">
          <p className="text-lg">No cards yet. Add your first card!</p>
        </div>
      )}

      {/* Add Card Button */}
      <button
        onClick={() => setShowForm(true)}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105"
      >
        + Add New Card
      </button>

      {/* Stats */}
      <div className="mt-12 text-center text-slate-600">
        <p className="text-sm">Total Cards: <span className="font-bold text-slate-800">{cards.length}</span></p>
      </div>

      {/* Form Modal */}
      {showForm && (
        <CardForm
          onAddCard={handleAddCard}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;
