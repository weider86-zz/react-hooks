import React, { useState } from 'react';

import Effects from '../Effects';

function App()  {

  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false)
  }, 5000);

  return ( visible && <Effects /> )

}

export default App;