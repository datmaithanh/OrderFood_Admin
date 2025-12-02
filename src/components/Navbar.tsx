import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router';
import { MdCancelPresentation } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';
import { useState } from 'react';
import logoSVG from '../../public/logo.svg';

function Navbar() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsShowSidebar(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box width={{ base: '100%', md: '14%' }} position="fixed" height="100vh" bg="#FFFFFF" boxShadow="md" borderRadius="md">
      <VStack display={{ base: 'none', md: 'block' }} height={'100vh'} align="stretch" p={2} spaceY={2}>
        <Box
          p={4}
          bg={isActive('/') || isActive('/home') ? '#4A70A9' : '#FFFFFF'}
          borderRadius="md"
          border={'2px solid #CCCCCC'}
          onClick={() => handleNavigation('/home')}
          cursor={'pointer'}>
          <Text fontSize="sm" color={isActive('/') || isActive('/home') ? 'white' : 'gray.700'} fontWeight="medium">
            <Link to="/home">Trang Chủ</Link>
          </Text>
        </Box>
        <Box
          p={4}
          bg={isActive('/orders') ? '#4A70A9' : '#FFFFFF'}
          borderRadius="md"
          border={'2px solid #CCCCCC'}
          onClick={() => handleNavigation('/orders')}
          cursor={'pointer'}>
          <Text fontSize="sm" color={isActive('/orders') ? 'white' : 'gray.700'} fontWeight="medium">
            <Link to="/orders">Đơn Hàng</Link>
          </Text>
        </Box>
      </VStack>
      <HStack display={{ base: 'block', md: 'none' }} spaceY={2} align="stretch" p={2} height={'100vh'} justify={'space-between'}>
        <Flex justify={'end'} p={2} color={'gray.700'} justifyContent={'space-between'}>
          <Box>
            <Image src={logoSVG} alt="Logo" width="30px" height="30px" />
          </Box>
          <Box onClick={() => setIsShowSidebar(!isShowSidebar)} cursor={'pointer'}>
            {isShowSidebar ? <MdCancelPresentation size={18} /> : <IoIosMenu size={18} />}
          </Box>
        </Flex>
        {isShowSidebar && (
          <Box spaceY={2}>
            <Box
              p={4}
              bg={isActive('/') || isActive('/home') ? '#4A70A9' : '#FFFFFF'}
              borderRadius="md"
              border={'2px solid #CCCCCC'}
              onClick={() => handleNavigation('/home')}
              cursor={'pointer'}>
              <Text fontSize="xs" color={isActive('/') || isActive('/home') ? 'white' : 'gray.700'} fontWeight="medium">
                <Link to="/home">Trang Chủ</Link>
              </Text>
            </Box>
            <Box
              p={4}
              bg={isActive('/orders') ? '#4A70A9' : '#FFFFFF'}
              borderRadius="md"
              border={'2px solid #CCCCCC'}
              onClick={() => handleNavigation('/orders')}
              cursor={'pointer'}>
              <Text fontSize="xs" color={isActive('/orders') ? 'white' : 'gray.700'} fontWeight="medium">
                <Link to="/orders">Đơn Hàng</Link>
              </Text>
            </Box>
          </Box>
        )}
      </HStack>
    </Box>
  );
}

export default Navbar;
