import { Box } from '@chakra-ui/react';
import Background from './background';
import Subtitle from './subtitle';
import WebSocketStatus from './ws-status';
import { canvasStyles } from './canvas-styles';

function Canvas(): JSX.Element {
  return (
    <Background>
      <Box {...canvasStyles.canvas.container}>
        <WebSocketStatus />
        <Subtitle />
      </Box>
    </Background>
  );
}

export default Canvas;
