import React from 'react';

import ThumbSaldo from '../../components/ThumbSaldo';
import BodyMenu from '../../components/BodyMenu';
import Header from '../../components/Header';

function Dashboard({navigation}) {
  return (
    <>
      <Header navigation={navigation} />
      <ThumbSaldo />
      <BodyMenu />
    </>
  );
}

export default Dashboard;
