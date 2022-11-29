import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { myTheme } from '../../myTheme';
import { PATHES } from '../../common/enum';
import { Login } from '../LoginPage/Login';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from '../MainPage/MainPage';

export const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHES.MAIN} element={<MainPage />} />
          <Route path={PATHES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </ThemeProvider>
  );
};
