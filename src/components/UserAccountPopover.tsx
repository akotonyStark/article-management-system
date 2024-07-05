import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice";
import { useNavigate } from "react-router-dom";

export default function UserAccountPopover({ children }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Popover placement="bottom" closeOnBlur={false}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverBody>
          <Text>Do you want to logout?</Text>
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Button colorScheme="teal" width={'full'} onClick={handleLogout}>
            Logout
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
