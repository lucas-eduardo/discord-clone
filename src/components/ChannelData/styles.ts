import styled from 'styled-components';
import { PlusCircle } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 4.6rem - 6.8rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 1rem 0 5.7rem;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 1.4rem;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(PlusCircle)`
  width: 24px;
  height: 24px;

  color: var(--symbol);

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
