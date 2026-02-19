# 💳 Digital Credit Card Component

A comprehensive, interactive credit card management application built with React, Vite, and Tailwind CSS. Features realistic skeuomorphic card designs, transaction tracking, security monitoring, and a complete digital wallet experience.

## ✨ Features

### Card Management
- **Realistic Card Design**: Skeuomorphic credit cards resembling real-world credit cards
- **Multiple Cards Support**: Manage and organize multiple payment methods
- **Card Brands Detection**: Automatic detection of Visa, Mastercard, Amex, Discover
- **Flip Animation**: Interactive 3D flip animation to view CVV
- **Delete Cards**: Remove cards from your wallet
- **Card Details Modal**: Comprehensive card information and settings

### Dashboard & Analytics
- **Statistics Dashboard**: Overview of all financial metrics
- **Balance Tracking**: Current balance and credit limit monitoring
- **Monthly Spending**: Track spending by month
- **Top Merchants**: Identify top spending merchants
- **Credit Usage Visualization**: Progress bar showing credit utilization

### Transaction Management
- **Transaction History**: View recent transactions per card
- **Category Labeling**: Transactions organized by category (Shopping, Food, Transport, etc.)
- **Transaction Details**: Date, merchant, amount, and category information
- **Expandable List**: Collapsible transaction history for clean UI

### Security Features
- **Security Status**: Real-time security monitoring
- **Security Score**: Card security rating (0-100)
- **Fraud Protection**: Fraud protection indicators
- **Two-Factor Authentication**: 2FA status display
- **Purchase Alerts**: Alert system for transactions
- **Lock Card**: Ability to lock compromised cards
- **Last Used Tracking**: Monitor last transaction time

### User Experience
- **Quick Actions**: Fast access to common operations
- **Form Validation**: Comprehensive card number, expiry, and CVV validation
- **Formatted Inputs**: Auto-formatting for card number (spaces), expiry (MM/YY), CVV
- **Error Messages**: Clear validation feedback
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Fade-in, slide-in, and flip animations

## 🛠️ Tech Stack

- **React 18**: Modern UI library
- **Vite 5**: Lightning-fast build tool
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing and compatibility
- **JavaScript (ES6+)**: Modern JavaScript features

## 📁 Project Structure

```
src/
├── App.jsx                  # Main application component
├── CreditCard.jsx          # Credit card display component
├── CardForm.jsx            # Card creation form
├── CardDetails.jsx         # Detailed card information modal
├── Dashboard.jsx           # Analytics and statistics dashboard
├── TransactionHistory.jsx  # Transaction list component
├── CardSecurity.jsx        # Security status component
├── QuickActions.jsx        # Quick action buttons
├── utils.js               # Utility functions and helpers
├── index.css              # Custom styles and animations
└── main.jsx               # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 💡 Usage

### Adding a New Card
1. Click "+ Add New Card" button
2. Fill in card details:
   - Card Number (16 digits)
   - Cardholder Name
   - Expiration Date (MM/YY)
   - CVV (3-4 digits)
3. Click "Add Card" to save

### Viewing Card Details
1. Hover over a card in the gallery
2. Click "View Details →" button
3. View comprehensive card information, transactions, and security status

### Flipping a Card
- Click on any card to flip it and view the CVV
- Flip back to see the front side

### Managing Cards
- Delete cards using the "✕ Delete" button
- Lock cards from the security panel
- Close cards from the details modal

## 🎨 Card Brands Supported

- **Visa** (Blue gradient)
- **Mastercard** (Red-orange gradient)
- **American Express** (Green-teal gradient)
- **Discover** (Orange-yellow gradient)
- **Other Cards** (Purple-indigo gradient)

## 📊 Dashboard Metrics

- **Total Cards**: Count of active cards in your wallet
- **Available Balance**: Combined balance across all cards
- **Monthly Spending**: Expenses for the current month
- **Total Transactions**: All-time transaction count
- **Top Merchants**: Most frequent spending destinations

## 🔐 Security Features

- Input validation and sanitization
- Masked card numbers display
- CVV always hidden (shown only on card flip)
- Security score monitoring
- Fraud protection indicators
- Transaction alerts
- Card locking capability

## ⌨️ Keyboard Shortcuts

- Press `Escape` to close modals
- Click outside modal to dismiss

## 🎯 Sample Data

The app includes pre-loaded sample data:
- 2 credit cards with realistic details
- 8 sample transactions for demonstration
- Credit limits and current balances

## 🔧 Configuration

### Tailwind CSS
Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

### Vite
Edit `vite.config.js` for build optimization and dev server settings.

## 📝 Component Documentation

### App.jsx
Main component managing card state, transactions, and modal visibility.

**Props:** None
**State:** cards, transactions, showForm, selectedCard, flippedCardId

### CreditCard.jsx
Displays a single credit card with 3D flip animation.

**Props:** 
- `card` - Card object
- `isFlipped` - Boolean for flip state
- `onClick` - Handler for flip
- `onDelete` - Handler for deletion

### CardForm.jsx
Modal form for adding new cards with validation.

**Props:**
- `onAddCard` - Callback with card data
- `onCancel` - Close form handler

### Dashboard.jsx
Statistics and analytics dashboard.

**Props:**
- `cards` - Array of card objects
- `transactions` - Array of transaction objects

### TransactionHistory.jsx
Expandable transaction list for a specific card.

**Props:**
- `cardId` - Card identifier
- `transactions` - Array of transaction objects

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [CSS 3D Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY)

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real transaction data
- [ ] Export statements
- [ ] Spending analytics charts
- [ ] Budget alerts
- [ ] Multi-currency support
- [ ] Mobile app version
- [ ] Biometric authentication
- [ ] Real-time notifications

### Preview Production Build

```bash
npm run preview
```

## Design Notes

- The card uses absolute positioning for precise element placement
- Decorative blurred circles create visual depth
- The design trains models on overlapping elements where position is critical for realism

## Technologies Used

- **React 18**: UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Author

Created as part of synthetic dataset generation for credit card component analysis.
