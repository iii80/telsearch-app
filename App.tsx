import React from "react";
import {
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  NativeBaseProvider,
  VStack,
} from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="gray.200">
        <VStack space={5} alignItems="center">
          <HStack space="2">
            <Icon
              alignSelf="center"
              size="10"
              as={FontAwesome}
              name="telegram"
              color="lightBlue.400"
            />
            <Heading alignSelf="center" size="2xl">
              TelSearch
            </Heading>
          </HStack>
          <Input
            bg="white"
            w="92%"
            placeholder="SEARCH FOR TELEGRAM HERE..."
            InputRightElement={
              <IconButton
                h="full"
                variant="solid"
                colorScheme="gray"
                rounded="none"
                w="12.5%"
                _icon={{
                  as: AntDesign,
                  name: "search1",
                }}
              />
            }
          />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
