import React, { ReactElement } from 'react';
import { Divider, Text, VStack } from '@chakra-ui/react';
import Container from '../Container';
import HeaderPost, { IHeaderPost } from '../HeaderPost';
import FooterPost from '../FooterPost';

export interface TPost extends IHeaderPost {
  content: string;
  totalComments: number;
  totalActions: number;
  liked: boolean;
}

function Post({
  content,
  description,
  userName,
  userType,
  userImage,
  totalComments,
  totalActions,
  liked,
}: TPost): ReactElement {
  return (
    <Container minW="100%" p="3">
      <VStack alignItems="start" w="full">
        <HeaderPost
          description={description}
          userImage={userImage}
          userName={userName}
          userType={userType}
        />
        <Divider />
        <Text>{content}</Text>
        <FooterPost
          liked={liked}
          totalActions={totalActions}
          totalComments={totalComments}
          postType={userType}
        />
      </VStack>
    </Container>
  );
}
export default Post;
