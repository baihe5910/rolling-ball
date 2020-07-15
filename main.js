import { createApp } from "./src/runtime-canvas";
import GamePage from "./src/page/GamePage";
import { getCanvasRootContainer } from "./src/Game";

createApp(GamePage).mount(getCanvasRootContainer());
