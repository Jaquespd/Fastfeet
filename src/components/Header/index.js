import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import Notifications from '../Notifications';

import { singOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSingOut() {
    dispatch(singOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <NavLink activeClassName="selected" to="/delivery">
            ENCOMENDAS
          </NavLink>
          <NavLink activeClassName="selected" to="/deliveryman">
            ENTREGADORES
          </NavLink>
          <NavLink activeClassName="selected" to="/recipient">
            DESTINATÁRIOS
          </NavLink>
          <NavLink activeClassName="selected" to="/problem">
            PROBLEMAS
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <a onClick={handleSingOut}>sair do sistema</a>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
