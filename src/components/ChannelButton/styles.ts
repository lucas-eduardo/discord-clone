import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 0.5rem 0.3rem;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 0.4rem;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
