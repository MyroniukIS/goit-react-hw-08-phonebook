import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import ContactsView from 'views/ContactsView';
import AppBar from 'components/AppBar/AppBar';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </div>
    </>
  );
}
