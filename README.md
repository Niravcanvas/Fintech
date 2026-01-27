# 💰 FinTrack - Smart Money Manager

A modern, premium fintech expense tracker built with Next.js 16, featuring a stunning glassmorphism UI, real-time analytics, and intelligent money insights.

![FinTrack Dashboard](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

### 💳 **Multi-Wallet Management**
- Track multiple accounts (Bank, Cash, Cards, UPI)
- Real-time balance updates
- Wallet-wise transaction history
- Transfer funds between wallets

### 📊 **Advanced Analytics**
- Income vs Expense trends
- Category-wise spending breakdown
- Monthly/Yearly comparisons
- AI-powered spending insights
- Interactive charts with Recharts

### 💰 **Smart Budgeting**
- Category-based budget limits
- Real-time progress tracking
- Budget alerts at 75% and 90%
- Monthly/Yearly budget periods

### 📝 **Transaction Management**
- Quick add income/expense
- Recurring transactions
- Receipt attachments
- Tags and categories
- Search and filters
- Export to CSV/Excel/PDF

### 🔔 **Bill Reminders**
- Upcoming bill tracking
- Subscription management
- Auto-renewal alerts
- Payment history

### 🤝 **Lending & Borrowing**
- Track money lent/borrowed
- Partial repayment support
- Interest calculations
- Settlement status

### 🎨 **Premium UI/UX**
- Glassmorphism design
- Dark-first theme
- Smooth animations
- Fully responsive
- Mobile-optimized

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **State:** React Context API

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/fintrack.git
cd fintrack

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
fintrack/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Dashboard
│   │   ├── globals.css             # Global styles
│   │   ├── transactions/           # Transactions page
│   │   ├── analytics/              # Analytics page
│   │   ├── budgets/                # Budgets page
│   │   └── settings/               # Settings page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.tsx         # Navigation sidebar
│   │   └── ui/
│   │       ├── GlassCard.tsx       # Glassmorphism card
│   │       ├── Button.tsx          # Reusable button
│   │       ├── Input.tsx           # Form input
│   │       ├── Modal.tsx           # Modal component
│   │       └── Badge.tsx           # Status badge
│   │
│   └── lib/
│       ├── types.ts                # TypeScript types
│       ├── constants.ts            # App constants
│       └── utils.ts                # Utility functions
│
├── public/                         # Static assets
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Brand */
--primary-gradient: linear-gradient(135deg, #6B076B, #BA18BA);

/* Accent Colors */
--accent: #2CA9A9;
--success: #22C55E;
--warning: #F59E0B;
--error: #EF4444;

/* Backgrounds */
--bg-main: #0F0F0F;
--bg-glass: rgba(255, 255, 255, 0.08);
--border: rgba(255, 255, 255, 0.15);

/* Text */
--text-primary: #FFFFFF;
--text-muted: #A1A1AA;
```

### Glassmorphism Components

All cards use consistent glassmorphism styling:
- `backdrop-blur: 16px`
- Semi-transparent backgrounds
- Soft borders with glow effects
- Smooth hover transitions

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# App
NEXT_PUBLIC_APP_NAME=FinTrack
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API (Optional - for future backend integration)
NEXT_PUBLIC_API_URL=

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=
```

---

## 📱 Pages Overview

### **Dashboard** (`/`)
- Total balance overview
- Monthly income/expense stats
- Wallet cards
- Recent transactions
- Upcoming bills
- Quick actions

### **Transactions** (`/transactions`)
- All transactions list
- Search and filters
- Add/Edit transactions
- Export functionality
- Category sorting

### **Analytics** (`/analytics`)
- Income vs Expense trends
- Category breakdown pie chart
- Weekly spending patterns
- Smart financial insights
- Savings rate tracking

### **Budgets** (`/budgets`)
- Category budgets
- Progress indicators
- Budget alerts
- Monthly/Yearly views
- Overspending warnings

### **Settings** (`/settings`)
- Profile management
- Preferences
- Notifications
- Security settings
- Data export/backup

---

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build production
npm run build

# Start production server
npm start
```

### Code Style

- **TypeScript:** Strict mode enabled
- **ESLint:** Next.js recommended config
- **Prettier:** Consistent formatting
- **Component Structure:** Functional components with hooks

---

## 🚢 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

The app can be deployed to:
- **Netlify**
- **Railway**
- **DigitalOcean**
- **AWS Amplify**

---

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] User authentication (OAuth)
- [ ] Cloud sync
- [ ] Receipt OCR scanning
- [ ] Bank account linking
- [ ] Investment tracking
- [ ] Tax calculations
- [ ] Multi-currency support
- [ ] Mobile app (React Native)
- [ ] AI spending predictions

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Recharts](https://recharts.org/) - Chart library
- [Anthropic Claude](https://claude.ai/) - AI assistant for development

---

## 📸 Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Analytics
![Analytics](screenshots/analytics.png)

### Budgets
![Budgets](screenshots/budgets.png)

---

## 💡 Support

If you find this project helpful, please give it a ⭐️!

For issues and questions, please [open an issue](https://github.com/yourusername/fintrack/issues).

---

Made by Kiran and Nirav