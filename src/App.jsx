// components
import Button from "./Button";

// React icons
import { GoBell } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-1">
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Whatever!
        </Button>
      </div>
    </div>
  );
}

export default App;
