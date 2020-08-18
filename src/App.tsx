import React from "react";
import Button, { ButtonSize, ButtonType } from "components/Button/button";
import Alert from "components/Alert/alert";
function App() {
  const btnEvent = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // event.preventDefault();
    console.log(event);
  };
  return (
    <div className="App">
      <div>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          className="custom"
          onClick={btnEvent}
        >
          primary
        </Button>
        <Button btnType={ButtonType.Default}>default</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          danger
        </Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Large}
          href="https://www.baidu.com"
          target="_blank"
        >
          Link
        </Button>
      </div>
      <div>
        <Alert
          type="success"
          message="This is my success Alert"
          className="custom-alert"
        />
        <Alert type="info" message="This is my info Alert" />
        <Alert type="warning" message="This is my warning Alert" />
        <Alert type="error" message="This is my error Alert" />
        <Alert
          type="error"
          message={<div style={{ color: "red" }}>React Node</div>}
        />
      </div>
    </div>
  );
}

export default App;
