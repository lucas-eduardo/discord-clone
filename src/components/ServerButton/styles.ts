import styled from 'styled-components';
import { Discord } from '@styled-icons/boxicons-logos';

import { ServerButtonProps } from './index';

export const Button = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 0.8rem;

  background-color: ${({ isHome }) =>
    isHome ? 'var(--discord)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -1.7rem;
    top: calc(50% - 0.45rem);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${({ hasNotifications }) =>
      hasNotifications ? 'inline-block' : 'none'};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 0.4rem;

    position: absolute;
    bottom: -0.4rem;
    right: -0.4rem;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--white);

    content: '${({ mentions }) => mentions && mentions}';
    display: ${({ mentions }) =>
      mentions && mentions > 0 ? 'inline-block' : 'none'};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: var(--discord);
  }

  &.active::before {
    width: 8px;
    height: 38px;

    position: absolute;
    left: -1.7rem;
    top: 0.6rem;

    background-color: var(--white);
    border-radius: 4px;

    content: '';
    display: inline-block;
  }

  &:hover::before {
    width: 8px;
    height: 21px;

    position: absolute;
    left: -1.7rem;
    top: 1.6rem;

    background-color: var(--white);
    border-radius: 4px;

    content: '';
    display: inline-block;
  }
`;

export const Image = styled(Discord)`
  width: 30px;
  height: 30px;

  color: var(--white);
`;
