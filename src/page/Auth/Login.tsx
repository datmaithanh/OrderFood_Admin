import { Box, Button, Checkbox, Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import logoSVG from '../../../public/logo.svg';
import { PasswordInput } from '@/components/ui/password-input';
import { Link } from 'react-router';

function Login() {
  const handleSubmit = () => {};

  return (
    <Flex justifyContent={'center'} alignItems={'center'} minHeight="80vh" bg="#FFFFFF" flexDirection={'column'}>
      <VStack>
        <Box>
          <Image src={logoSVG} alt="Logo" width="80px" height="80px" />
        </Box>
        <Box fontSize={'3xl'} color={'gray.700'} fontWeight={'medium'}>
          Login Page
        </Box>
        <Flex>
          <Text fontSize={'sm'} color={'gray.700'}>
            Don’t have an account yet?
          </Text>
          <Text ml={1} fontSize={'sm'} color={'blue.500'}>
            <Link to={'/register'}>Register</Link>
          </Text>
        </Flex>
      </VStack>
      <VStack mt={8} p={4} boxShadow="xs" borderRadius="md" width={{ base: '90%', md: '400px' }} justify={'center'} alignItems={'stretch'}>
        <form onSubmit={handleSubmit}>
          <Flex alignItems={'center'} gap={1}>
            <Text fontSize={'sm'} color={'gray.700'}>
              Username
            </Text>
            <Text fontSize={'sm'} color={'red.500'}>
              *
            </Text>
          </Flex>

          <Input type="text" fontSize={'sm'} color={'gray.700'} placeholder="Enter your username" required />
          <Flex alignItems={'center'} gap={1}>
            <Text fontSize={'sm'} color={'gray.700'}>
              Password
            </Text>
            <Text fontSize={'sm'} color={'red.500'}>
              *
            </Text>
          </Flex>
          <PasswordInput type="password" fontSize={'sm'} color={'gray.700'} placeholder="Enter your password" required />
          <Flex>
            <Checkbox.Root size={'sm'} mt={2} color={'gray.700'}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Remember me!</Checkbox.Label>
            </Checkbox.Root>
            <Text ml="auto" fontSize={'sm'} color={'blue.500'} cursor="pointer" mt={2}>
              <Link to={'#'}>Forgot Password?</Link>
            </Text>
          </Flex>
          <Button type="submit" mt={4} colorScheme="blue" width={'full'} color={'white'} bg={'#4A70A9'}>
            Login
          </Button>
        </form>
      </VStack>
    </Flex>
  );
}

export default Login;
