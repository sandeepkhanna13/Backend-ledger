# 💰 Backend Ledger Application

A robust double-entry bookkeeping ledger system built with Node.js, Express, and MongoDB, featuring a responsive, finance-themed frontend dashboard styled with Bootstrap.

This application safely handles transactional consistency, user authentication via JWT, automated database initialization, and features real-time dynamic balance aggregation using MongoDB's aggregation framework.

---

## 🚀 Key Features

- **Double-Entry Accounting Architecture:** Splits every ledger transaction into balancing `DEBIT` and `CREDIT` records for absolute balance integrity.
- **Dynamic Balance Aggregation:** Real-time financial calculations over ledger history rather than storing fragile, hardcoded balances.
- **Automated Database Seeding:** Plug-and-play architecture that automatically provisions a secure administrative System User upon initial boot.
- **Idempotency Safeguards:** Built-in protection using unique transaction keys to prevent duplicate payments or server-retry faults.
- **Role-Based Middlewares:** Standard user access coupled with dedicated administrative system controls for minting base capital.
- **Automated Transaction Alerts:** Integration with NodeMailer to dispatch email updates upon registration and transaction processing.

---

## 🛠️ Tech Stack

- **Backend Engine:** Node.js, Express Framework
- **Database Vault:** MongoDB Atlas (via Mongoose ODM)
- **Security & Utilities:** JSON Web Tokens (JWT), BcryptJS, NodeMailer, CORS Middleware
- **Frontend Layer:** Semantic HTML5, CSS3, Bootstrap 5, Vanilla JavaScript (Fetch API)

---

## 📂 Project Structure

```text
backend-ledger-main/
├── src/
│   ├── app.js                 # Express Application config & middlewares
│   ├── seed.js                # Automatic admin onboarding database script
│   ├── controllers/           # Auth, Account, and Transaction controllers
│   ├── middleware/            # Auth and System-User route guards
│   ├── models/                # User, Account, and Ledger Mongoose schemas
│   └── routes/                # Route pathways mapping resources
├── frontend/                  # UI components served via Live Server
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-account.html
│   └── style.css
├── server.js                  # Entry point connecting DB, seeding, and booting server
├── .env                       # Local secrets (Database URIs, Mail configs)
└── .gitignore                 # Files excluded from GitHub tracking


⚙️ Setup and Installation Instructions
📥 1. Clone & Core Setup
Ensure you have Node.js installed, open your terminal, and navigate to the project directory:

Bash
npm install


🔑 2. Configure Environment Variables
Create a .env file in the root directory and populate it with your database and email server credentials:

Code snippet
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_key

# Email Server Config
EMAIL_USER=your_test_gmail@gmail.com
EMAIL_PASS=your_16_digit_app_password


▶️ Execution Workflow
To run the full stack on your local machine, operate two separate runtime environments:

Step A: Initialize the Backend Server
From the root project directory, spin up the active development listener:

Bash
npm run dev
Expected console logs on initial run:

✅ SUCCESS: Connected to MongoDB

🔄 No system user found. Seeding default administrator...

✨ SUCCESS: Default system user created!

Server is running on port 3000

Note: On subsequent reboots, the system will recognize the account and log: ✅ System user check: Admin profile already initialized.

Step B: Launch the Frontend Client
Open the project folder inside VS Code.

Ensure you have the Live Server extension installed.

Open frontend/login.html, right-click anywhere in the code view, and select "Open with Live Server".

The application will launch inside your default web browser at http://127.0.0.1:5500/login.html.

🧪 Admin Ledger Minting Protocol
Because the application automatically handles system provisioning on startup, you can instantly test financial operations using the pre-seeded administrator credentials:

Admin Email: system123@backendledger.com
Admin Password: system1234

How to Mint Capital:
Fire up an API client like Thunder Client or Postman.

Submit a POST request to /api/auth/login using the admin credentials above to grab your administrative JWT auth token.

Call the protected system endpoint to mint funds to your active user ledger account:

Method/URL: POST http://localhost:3000/api/transactions/system/initial-funds

Header: Authorization: Bearer <YOUR_SYSTEM_TOKEN>

JSON Body Payload:

JSON
{
    "toAccount": "YOUR_TARGET_ACCOUNT_ID",
    "amount": 10000,
    "idempotencyKey": "unique-mint-key-01"
}
Perform a hard refresh (Ctrl + F5) on your client browser dashboard to view the dynamically aggregated balances.
```
