import React from 'react';

import ServerList from '../components/ServerList';
import ServerName from '../components/ServerName';
import ChannelInfo from '../components/ChannelInfo';
import ChannelList from '../components/ChannelList';
import UserInfo from '../components/UserInfo';
import ChannelData from '../components/ChannelData';
import UserList from '../components/UserList';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />

      <ServerName />

      <ChannelInfo />

      <ChannelList />

      <UserInfo />

      <ChannelData />

      <UserList />
    </Grid>
  );
};

export default Layout;
