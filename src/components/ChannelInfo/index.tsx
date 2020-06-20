import React from 'react';

import {
  Container,
  HashTagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />

      <Title>geral</Title>

      <Separator />

      <Description>
        Canal de tópico aberto, utilizado para qualquer objetivo que não
        conflite com um dos outros canais. Utilize para falar de assuntos vários
        do mundo de programação, carreira e para fazer networking com milhares
        de devs como você.
      </Description>
    </Container>
  );
};

export default ChannelInfo;
