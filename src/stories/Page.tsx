import React from 'react';
import './page.css';
import { Prose } from '../component/prose';
import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
export const Page: React.FunctionComponent = () => {
  return <Box p={10}>
    <Prose>
      <h1>Heading 1</h1>
      <Text>
        Do exercitation reprehenderit ut nostrud excepteur commodo incididunt. Sit cillum duis nulla tempor cupidatat cillum et tempor consequat. Cillum amet officia do eu. Aliquip officia sint ullamco excepteur sint excepteur deserunt sint anim cupidatat. Ut proident aliquip ea esse eiusmod est id incididunt sit. Officia qui cupidatat qui exercitation fugiat esse aute non enim ex commodo aliquip.
      </Text>
      <h2>Heading 2</h2>
      <p>
        Do exercitation reprehenderit ut nostrud excepteur commodo incididunt. Sit cillum duis nulla tempor cupidatat cillum et tempor consequat. Cillum amet officia do eu. Aliquip officia sint ullamco excepteur sint excepteur deserunt sint anim cupidatat. Ut proident aliquip ea esse eiusmod est id incididunt sit. Officia qui cupidatat qui exercitation fugiat esse aute non enim ex commodo aliquip.
      </p>
      <h3>Heading 3</h3>
      <p>
        Do exercitation reprehenderit ut nostrud excepteur commodo incididunt. Sit cillum duis nulla tempor cupidatat cillum et tempor consequat. Cillum amet officia do eu. Aliquip officia sint ullamco excepteur sint excepteur deserunt sint anim cupidatat. Ut proident aliquip ea esse eiusmod est id incididunt sit. Officia qui cupidatat qui exercitation fugiat esse aute non enim ex commodo aliquip.
      </p>
      <hr />
      <UnorderedList>
        <ListItem>List 1</ListItem>
        <ListItem>List 2</ListItem>
        <ListItem>List 3</ListItem>
      </UnorderedList>
    </Prose>
    <Button>Greet</Button>
  </Box >
};
