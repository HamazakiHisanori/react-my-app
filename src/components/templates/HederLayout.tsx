import { memo, ReactNode, VFC } from 'react';

import { Header } from '../organisms/lauout/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
