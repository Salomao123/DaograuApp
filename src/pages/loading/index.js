import React from 'react';

import {View, Text} from 'react-native';

import Shimmer from 'react-native-shimmer';

const Loading = () => (
  <Shimmer>
    <Text>Loading ...</Text>
  </Shimmer>
);

export default Loading;
