/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useEffect, VFC } from 'react';
import { Center, Wrap, WrapItem } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {

  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
    {loading ? (
      <Center height="100vh">
        <Spinner />
      </Center>
      ) : (
      <Wrap p={{ base: 4, md: 10 }}>
        {users.map((user) => (
          <WrapItem key={user.id}>
            <UserCard
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
            />
          </WrapItem>
        ))};
      </Wrap>
    )};
    </>
  )
});
