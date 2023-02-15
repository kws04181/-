import React from 'react';

function TabContents(props) {
  const { showTabIndex } = props;

  let tabContents;
  if (showTabIndex === 0) {
    tabContents = <div>
      In JavaScript, the Promise is the ideal and the best way to handle asynchronous operations. They can run multiple asynchronous operations efficiently and accurately.
    </div>;
  } else if (showTabIndex === 1) {
    tabContents = <div>
      The JavaScript Promise provides handles errors better than other conventional techniques, callbacks, and events. The Promise object eventually conveys either the completion or failure of an asynchronous process and its consequent value.
    </div>;
  } else if (showTabIndex === 2) {
    tabContents = <div>
      In other words, users can also define the JS Promise as the soundest choice for handling multiple callbacks simultaneously. It avoids the undesired callback hell causing an unmanageable code.
    </div>;
  } else if (showTabIndex === 3) {
    tabContents = <div>
      Promises also provide a more reasonable option for programmers to read their code more virtually and efficiently, especially; if users use the particular code for executing multiple asynchronous operations.
    </div>;
  };

  return (
    <div>
      {tabContents}
    </div>
  );
}

export default TabContents;