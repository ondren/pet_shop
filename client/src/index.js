import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

echo "# pet_shop" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ondren/pet_shop.git
// git push -u origin main

git remote add origin https://github.com/ondren/pet_shop.git
    git branch -M main
git push -u origin main