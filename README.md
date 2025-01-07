# Enclave

Enclave is a luxurious hotel around multiple locations, This project is made for enclave which is admin dashboard where authorised hotel staff can gain access and handle certain operation's such as check in and check out of clients with real time statistics around available cabins  

---

## Table of Contents  
- [Pre Requisite](#pre-requisite)
- [Installation](#installation)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [Folder Structure](#folder-structure)  

---

## Pre Requisite

**Supabase account**

---

## Installation  

Follow these steps to set up the project locally:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/Niraj21611/enclave.git
   cd enclave
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

4. **Create .env file**
    ```bash
    SUPABASE_KEY = //supabase api key
    SUPABASE_URL = //supabase storage url
    ```

4. **Start the development server**:  
   ```bash  
   npm run dev  
   ```  

5. **View the project in your browser**:  
    ```bash
   Open `http://localhost:5173` in your preferred browser.  
    ```

---

## Technologies Used  
- **ReactJS**: For building the user interface.  
- **Styled components**: For styling and maintainabiliy.  
- **HTML**: This is used to structure the application.  
- **Vite**: This is for the fast development and build process.
- **Supabase**: This is used as database option  

---

## Features  
- Used react's realtime metrics display dashboard 
- Leveraged power of react query for enhanced state management
- Implemented flexible hooks for reusability
- Added dark mode for better user experience

---

## Folder Structure  
```plaintext  
src/  
├── context/        # Dark mode context
├── data/           # Mock data
├── features/       # Reusable React components
├── hooks/          # Resuable user-defined hooks  
├── pages/          # Application page's file  
├── services/       # Required api services
├── styles/         # Global styles  
├── ui/             # UI components
├── utils/          # Utility function's
├── App.jsx         # Main application file  
├── main.jsx        # Entry point for the React app   
└── ...             # Other necessary files  
```  
---