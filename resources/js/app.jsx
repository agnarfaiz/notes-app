import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div class="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 text-white">
            <div class="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <h1 class="text-4xl font-black mb-4 tracking-tight">Notes App</h1>
                <p class="text-lg opacity-80 font-medium">Laravel + React + Tailwind v4 Setup Complete!</p>
            </div>
        </div>
    );
}

const rootElement = document.getElementById('app');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
