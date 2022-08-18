import React, { ReactElement } from 'react';
import { Divider, Text, VStack } from '@chakra-ui/react';
import Container from '../Container';
import HeaderPost, { IHeaderPost } from '../HeaderPost';
import FooterPost from '../FooterPost';

export interface TPost extends IHeaderPost {
  content: string;
}

function Post({
  content,
  description,
  userName,
  userType,
  userImage,
}: TPost): ReactElement {
  return (
    <Container minW="100%" p="3">
      <VStack alignItems="start">
        <HeaderPost
          description={description}
          userImage={userImage}
          userName={userName}
          userType={userType}
        />
        <Divider />
        <Text>{content}</Text>
        <FooterPost />
      </VStack>
    </Container>
  );
}
export default Post;
