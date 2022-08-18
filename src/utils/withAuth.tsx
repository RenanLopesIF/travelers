import React, { ElementType } from 'react';
import ChatBox from '../components/ChatBox';
import Header from '../components/Header';

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
        <ChatBox userImage="../../../resources/profile.webp" />
      </>
    );
  }

  return Wrapper;
}
