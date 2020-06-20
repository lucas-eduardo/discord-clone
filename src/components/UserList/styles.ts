import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 0.3rem 0.6rem 0 1.6rem;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.div`
  margin-top: 2rem;

  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 1.3rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 0.9rem;

    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 0.4rem 0.5rem;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;
