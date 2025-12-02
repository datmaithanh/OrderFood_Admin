import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import { FiAirplay } from 'react-icons/fi';

function Home() {
  return (
    <Box>
      <VStack display={{ base: 'none', md: 'block' }} p={1} align="stretch">
        <Box fontSize="lg" fontWeight="medium">
          <Text color={'gray.700'}>Trang chủ</Text>
        </Box>
        <Grid templateColumns="repeat(4, 1fr)" gap="6" mt={2}>
          <Box borderRadius={'xl'} boxShadow={'xs'} h="32" bgGradient="to-br" gradientFrom="white" gradientTo="#B0DCF9">
            <Flex color={'gray.700'} justifyContent={'space-between'} p={3}>
              <Text fontSize={'sm'}>Tổng đơn hàng</Text>
              <FiAirplay />
            </Flex>
            <Flex direction={'column'} justifyContent={'start'} alignItems={'start'} p={3}>
              <Text fontSize={'2xl'} color={'gray.800'} fontWeight={'medium'}>
                1,024
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                So với tháng trước +5%
              </Text>
            </Flex>
          </Box>
          <Box borderRadius={'xl'} boxShadow={'xs'} h="32" bgGradient="to-br" gradientFrom="white" gradientTo="#D9FCF7">
            <Flex color={'gray.700'} justifyContent={'space-between'} p={3}>
              <Text fontSize={'sm'}>Số bàn còn trống</Text>
              <FiAirplay />
            </Flex>
            <Flex direction={'column'} justifyContent={'start'} alignItems={'start'} p={3}>
              <Text fontSize={'2xl'} color={'gray.800'} fontWeight={'medium'}>
                4/10
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Còn trống 6 bàn
              </Text>
            </Flex>
          </Box>
          <Box borderRadius={'xl'} boxShadow={'xs'} h="32" bgGradient="to-br" gradientFrom="white" gradientTo="#D9FCDC">
            <Flex color={'gray.700'} justifyContent={'space-between'} p={3}>
              <Text fontSize={'sm'}>Tổng doanh thu</Text>
              <FiAirplay />
            </Flex>
            <Flex direction={'column'} justifyContent={'start'} alignItems={'start'} p={3}>
              <Text fontSize={'2xl'} color={'gray.800'} fontWeight={'medium'}>
                1,024,000 VND
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                So với tháng trước +5%
              </Text>
            </Flex>
          </Box>
          <Box borderRadius={'xl'} boxShadow={'xs'} h="32" bgGradient="to-br" gradientFrom="white" gradientTo="#FCF2D9">
            <Flex color={'gray.700'} justifyContent={'space-between'} p={3}>
              <Text fontSize={'sm'}>Số bàn đang chờ món</Text>
              <FiAirplay />
            </Flex>
            <Flex direction={'column'} justifyContent={'start'} alignItems={'start'} p={3}>
              <Text fontSize={'2xl'} color={'gray.800'} fontWeight={'medium'}>
                3
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Đang chờ phục vụ
              </Text>
            </Flex>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
}

export default Home;
