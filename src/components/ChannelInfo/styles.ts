import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 1.7rem;
  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const HashTagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 0.9rem;

  font-size: 1.6rem;
  font-weight: bold;
  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;
  margin: 0 1.3rem;
`;

export const Description = styled.span`
  font-size: 1.5rem;
  color: var(--gray);

  width: 500px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
