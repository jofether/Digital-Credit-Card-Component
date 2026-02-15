import React, { useState } from 'react';
import CreditCard from './CreditCard';
import CardForm from './CardForm';
import Dashboard from './Dashboard';
import QuickActions from './QuickActions';
import CardDetails from './CardDetails';
import { generateSampleTransactions } from './utils';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      number: '4532 1098 7654 3210',
      holder: 'Jofether Mendoza',
      expiry: '12/28',
      cvv: '123',
      balance: 5250.00,
      creditLimit: 10000.00,
    },
    {
      id: 2,
      number: '5425 2334 3010 9903',
      holder: 'Jofether Mendoza',
      expiry: '08/26',
      cvv: '456',
      balance: 8750.00,
      creditLimit: 15000.00,
    },
  ]);

  const [transactions, setTransactions] = useState(generateSampleTransactions());
  const [showForm, setShowForm] = useState(false);
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleAddCard = (cardData) => {
    const newCard = {
      id: Date.now(),
      ...cardData,
      balance: 0,
      creditLimit: 5000.00,
    };
    setCards([...cards, newCard]);
    setShowForm(false);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
    if (selectedCard?.id === id) {
      setShowCardDetails(false);
      setSelectedCard(null);
    }
  };

  const toggleFlip = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  const openCardDetails = (card) => {
    setSelectedCard(card);
    setShowCardDetails(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex flex-col p-6 font-sans">
      {/* Navigation Header */}
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-1">💳 Digital Wallet</h1>
            <p className="text-slate-600">Manage your payment methods with ease</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">Welcome back!</p>
            <p className="text-lg font-semibold text-slate-800">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full">
        {/* Dashboard */}
        <Dashboard cards={cards} transactions={transactions} />

        {/* Quick Actions */}
        <QuickActions />

        {/* Cards Section */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Cards</h2>
        {cards.length > 0 ? (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => openCardDetails(card)}
                >
                  <CreditCard
                    card={card}
                    isFlipped={flippedCardId === card.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip(card.id);
                    }}
                    onDelete={() => handleDeleteCard(card.id)}
                  />
                  <button className="mt-3 px-4 py-2 bg-slate-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm mt-8">Click a card to flip • Hover to see detail view</p>
          </div>
        ) : (
          <div className="text-center mb-12 bg-white rounded-lg p-12 border-2 border-dashed border-slate-300">
            <p className="text-4xl mb-4">💳</p>
            <p className="text-lg text-slate-600 font-medium">No cards yet</p>
            <p className="text-slate-500">Add your first card to get started</p>
          </div>
        )}

        {/* Add Card Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105 text-lg"
          >
            + Add New Card
          </button>
        </div>

        {/* Card Stats Footer */}
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500 text-center">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Cards</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{cards.length}</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Transactions</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{transactions.length}</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Spending</p>
              <p className="text-3xl font-bold text-orange-600 mt-2">${transactions.reduce((sum, t) => sum + t.amount, 0).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showForm && (
        <CardForm
          onAddCard={handleAddCard}
          onCancel={() => setShowForm(false)}
        />
      )}

      {showCardDetails && selectedCard && (
        <CardDetails
          card={selectedCard}
          transactions={transactions}
          onClose={() => {
            setShowCardDetails(false);
            setSelectedCard(null);
          }}
          isOpen={showCardDetails}
        />
      )}
    </div>
  );
}

export default App;
