import {
  Avatar,
  AvatarBadge,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as={"nav"} alignItems={"center"} background={'#1a202c'}  p={2} style={{borderBottom:'5px solid teal'}}>
      <Heading size={'0.6em'} pl={5}>Article Management System</Heading>
      <Spacer />

      <HStack spacing={"20px"}>
      <Text>Augustine</Text>
        <Avatar src={""} bg={"gold"} name="Augustine">
          <AvatarBadge width="1.3em" bg={"teal.500"}>
            <Text fontSize={"small"} color={"white"}>
              4
            </Text>
          </AvatarBadge>
        </Avatar>
      </HStack>
    </Flex>
  );
};

export default Navbar;
