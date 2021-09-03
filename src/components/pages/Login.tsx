import { ChangeEvent, memo, useState, VFC } from 'react';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onclickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" padding={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton
          disabled={userId === ""}
          loading={loading}
          onClick={onclickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
