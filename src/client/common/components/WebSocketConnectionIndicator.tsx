import * as React from 'react';
import FontAwesome from './FontAwesome';

interface WebSocketConnectionIndicatorProps {
    isConnected: boolean
}

const WebSocketConnectionIndicator = (props: WebSocketConnectionIndicatorProps) => (
    <span className={props.isConnected ? 'text-success' : 'text-danger'}>
      {props.isConnected ? <FontAwesome prefix="far" name="smile-beam"/> : <FontAwesome prefix="far" name="dizzy"/>}
    
  </span>
);

export default WebSocketConnectionIndicator;
