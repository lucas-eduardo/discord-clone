import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton selected channelName="boas-vindas" />
      <ChannelButton channelName="geral" />
      <ChannelButton channelName="ajuda" />
      <ChannelButton channelName="links" />
      <ChannelButton channelName="vagas" />
      <ChannelButton channelName="apresentações" />
      <ChannelButton channelName="anúncios" />
      <ChannelButton channelName="open-source" />
    </Container>
  );
};

export default ChannelList;
