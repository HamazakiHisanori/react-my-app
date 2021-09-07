/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useCallback, useEffect, VFC } from 'react';
import { Center, Wrap, WrapItem } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useDisclosure } from '@chakra-ui/hooks';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {

  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  },[users, onSelectUser, onOpen]);

  useEffect(() => getUsers(), []);

  return (
    <>
    {loading ? (
      <Center height="100vh">
        <Spinner />
      </Center>
      ) : (
      <Wrap p={{ base: 4, md: 10 }} justify="space-around">
        {users.map((user) => (
          <WrapItem key={user.id}>
            <UserCard
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
            />
          </WrapItem>
        ))};
      </Wrap>
    )};
    <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
    </>
  )
});
