import React from "react";
import Button, { ButtonSize, ButtonType } from "components/Button/button";

function App() {
  return (
    <div className="App">
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        className="custom"
      >
        primary
      </Button>
      <Button btnType={ButtonType.Default}>default</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        danger
      </Button>
    </div>
  );
}

export default App;
