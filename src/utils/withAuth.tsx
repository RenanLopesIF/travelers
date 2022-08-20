import React, { ElementType } from 'react';
import Header from '../components/Header';
import ChatContainer from '../components/ChatContainer';

export default function withAuth(WrapperComponent: ElementType) {
  function Wrapper(props: any): React.ReactElement {
    const isAuthed = true;

    if (!isAuthed) {
      document.location = '/';
    }

    return (
      <>
        <Header />
        <WrapperComponent {...props} />;
        <ChatContainer />
      </>
    );
  }

  return Wrapper;
}
