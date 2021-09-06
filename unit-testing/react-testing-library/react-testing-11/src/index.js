import React from "react";
import { render } from "react-dom";
import axios from "axios";

import App from "./app";

// Pass down dependencies like Axios through props
render(<App axiosClient={axios} />, document.getElementById("root"));
