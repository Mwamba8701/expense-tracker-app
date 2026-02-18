# 💰 Modern Expense Tracker

A beautiful and intuitive expense tracking application built with Vue.js 3. Track your income and expenses, visualize spending patterns with interactive charts, and manage your finances effortlessly with local data storage.

![Vue.js](https://img.shields.io/badge/Vue.js-3.3.4-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-4.3.0-FF6384?style=flat&logo=chart.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **📊 Visual Analytics**: Interactive doughnut charts showing spending breakdown by category
- **💳 Transaction Management**: Add, view, and delete income and expense transactions
- **📈 Real-time Statistics**: Live updates of total balance, income, and expenses
- **🏷️ Category Tracking**: Organize transactions by categories (Food, Transportation, Bills, etc.)
- **💾 Local Storage**: All data is stored locally in your browser - no server required
- **📥 Data Export**: Export your transaction data as JSON for backup or analysis
- **🎨 Modern UI**: Clean, responsive interface with gradient backgrounds and smooth animations
- **💱 Currency Support**: Displays amounts in KES (Kenyan Shillings) format
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Technologies Used

- **[Vue.js 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Chart.js](https://www.chartjs.org/)** - Simple yet flexible JavaScript charting
- **[Vue-ChartJS](https://vue-chartjs.org/)** - Vue.js wrapper for Chart.js
- **[Font Awesome](https://fontawesome.com/)** - Icon toolkit
- **[Google Fonts (Inter)](https://fonts.google.com/)** - Modern typography
- **LocalStorage API** - Client-side data persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mwamba8701/expense-tracker-app.git
   cd expense-tracker-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the URL shown in your terminal)

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🎯 Usage

### Adding a Transaction

1. Select transaction type (Income or Expense)
2. Choose a category from the dropdown
3. Enter the amount in KES
4. Select the date
5. Add a description
6. Click "Add Transaction"

### Viewing Statistics

- **Total Balance**: Shows the difference between income and expenses
- **Total Income**: Sum of all income transactions
- **Total Expenses**: Sum of all expense transactions
- **Category Breakdown**: Visual representation of spending by category

### Exporting Data

Click the "Export Data" button in the header to download all your transactions as a JSON file.

## 📁 Project Structure

```
expense-tracker-app/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # App icon
├── src/
│   ├── components/
│   │   ├── ExpenseForm.vue     # Transaction input form
│   │   ├── ExpenseList.vue     # Transaction list display
│   │   ├── ExpenseStats.vue    # Statistics cards and category breakdown
│   │   └── ExpenseChart.vue    # Doughnut chart visualization
│   ├── composables/
│   │   └── useExpenses.js      # Expense management logic and state
│   ├── assets/             # Static assets
│   ├── App.vue             # Main application component
│   └── main.js             # Application entry point
├── package.json            # Project dependencies
├── babel.config.js         # Babel configuration
├── vue.config.js           # Vue CLI configuration
└── README.md              # This file
```

## 🎨 Categories

The app supports the following transaction categories:

**Expenses:**
- 🍔 Food & Dining
- 🚗 Transportation
- 🛍️ Shopping
- 🎬 Entertainment
- 💡 Bills & Utilities
- 🏥 Healthcare
- 📚 Education
- 📦 Other

**Income:**
- 💼 Salary
- 📈 Investment
- 📦 Other

## 🔧 Available Scripts

- `npm run serve` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run dev` - Alternative command to start development server

## 💾 Data Storage

All transaction data is stored locally in your browser using the LocalStorage API. This means:
- ✅ No internet connection required
- ✅ Your data stays private and secure
- ✅ Fast performance
- ⚠️ Data is browser-specific (clearing browser data will delete transactions)
- ⚠️ Data won't sync across different browsers or devices

**Tip**: Use the export feature regularly to backup your data!

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Mwamba8701**
- GitHub: [@Mwamba8701](https://github.com/Mwamba8701)

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Chart.js for the beautiful charts
- Font Awesome for the icons
- All contributors who help improve this project

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

<p align="center">Made with ❤️ using Vue.js</p>
