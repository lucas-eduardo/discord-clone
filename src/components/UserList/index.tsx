import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Lucas Eduardo" />

      <Role>Offline - 1</Role>

      <UserRow nickname="Durzo" isBot />
      <UserRow nickname="Elisa Fernanda Heloise Pereira" />
      <UserRow nickname="Analu Rosângela Antônia Caldeira" />
      <UserRow nickname="Renata Ayla da Costa" />
      <UserRow nickname="Gael Luan Fernandes" />
      <UserRow nickname="Jorge Ian Castro" />
      <UserRow nickname="Francisca Heloisa Viana" />
      <UserRow nickname="Juliana Elza Barbosa" />
      <UserRow nickname="Levi Tomás Emanuel Silva" />
      <UserRow nickname="Nicole Letícia Drumond" />
      <UserRow nickname="Benjamin Carlos Cláudio Lopes" />
      <UserRow nickname="Miguel Ruan Breno Moraes" />
      <UserRow nickname="Hugo Giovanni Gabriel Carvalho" />
      <UserRow nickname="Arthur Fernando Gonçalves" />
      <UserRow nickname="Kaique Carlos Eduardo Mendes" />
    </Container>
  );
};

export default UserList;
