import React from 'react';
import JumoButton from 'react-supporter';

const App = () => (
  <JumoButton backgroundColor="green" fontColor="white" onClick={() => {console.log('test')}}>
    테스트 버튼
  </JumoButton>
);

export default App;
