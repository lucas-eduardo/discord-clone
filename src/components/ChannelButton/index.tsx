import React from 'react';

import { Container, HashTagIcon, InviteIcon, SettingsIcon } from './styles';

export interface ChannelButtonProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({
  channelName,
  selected,
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashTagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
