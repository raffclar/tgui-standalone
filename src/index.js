/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */


import "regenerator-runtime/runtime";
import "core-js/stable";
import * as serviceWorker from './serviceWorker';

// Themes
import '../packages/tgui/styles/main.scss';
import '../packages/tgui/styles/themes/abductor.scss';
import '../packages/tgui/styles/themes/cardtable.scss';
import '../packages/tgui/styles/themes/hackerman.scss';
import '../packages/tgui/styles/themes/malfunction.scss';
import '../packages/tgui/styles/themes/neutral.scss';
import '../packages/tgui/styles/themes/ntos.scss';
import '../packages/tgui/styles/themes/paper.scss';
import '../packages/tgui/styles/themes/retro.scss';
import '../packages/tgui/styles/themes/syndicate.scss';
import '../packages/tgui/styles/themes/wizard.scss';
// Override the positioning
import '../styles/override.scss';

import { perf } from 'common/perf';
import {createRenderer} from "../packages/tgui/renderer";
import {configureStore, StoreProvider} from "../packages/tgui/store";
import {setupGlobalEvents} from "../packages/tgui/events";
import {captureExternalLinks} from "../packages/tgui/links";
import {setupHotKeys} from "../packages/tgui/hotkeys";
import {Box, Button, Dropdown, LabeledList, Section} from "../packages/tgui/components";
import {useLocalState} from "../packages/tgui/backend";
import {getRoutedComponent} from "../packages/tgui/routes";
import {useDispatch, useSelector} from "../packages/common/redux";

perf.mark('inception', window.performance?.timing?.navigationStart);
perf.mark('init');

const store = configureStore();
const defaultInitialState = {
  type: "update",
  payload: {
    config: {
      interface: "Apc",
    },
    data: {
      isOperating: true,
      siliconUser: false,
      externalPower: 2,
      chargingStatus: 2,
      chargeMode: true,
      powerCellStatus: 100,
      failTime: 0,
      powerChannels: [
        {
          title: "Lights",
          status: 2,
          powerLoad: "10 W"
        },
        {
          title: "Equipment",
          status: 2,
          powerLoad: "144 W"
        }
      ],
      totalLoad: "154 W",
      malfStatus: {
        icon: "",
        content: "cccc",
        action: "mockAction"
      },
      coverLocked: true,
      emergencyLights: false,
      nightshiftLights: false,
    }
  }
};

function basename(str, sep) {
  return str.substr(str.lastIndexOf(sep) + 1);
}

function stripExtension(str) {
  return str.substr(0,str.lastIndexOf('.'));
}

const interfaces = require.context(
  '../packages/tgui/interfaces/',
  true,
  /^.*\.js$/
).keys().map((path) => stripExtension(basename(path, '/')));

const MsgEditor = (props, context) => {
  const [code, setCode] = useLocalState(context, 'StandaloneUpdate', JSON.stringify(defaultInitialState));
  const changeInterface = (value) => {
    const payload = {
      config: {
        interface: value,
      }
    };
    store.dispatch({...defaultInitialState, payload: payload});
  };
  const dispatchMsg = () => {
    store.dispatch(JSON.parse(code));
  };
  const selectedInterface = store.getState().backend.config?.interface;
  return (
    <Section
      title="Dispatch TGUI state updates"
      className="StandaloneControls"
      buttons={(
        <Box inline width="100%">
          <Button
            inline
            icon="chevron-right"
            onClick={dispatchMsg}>
            Evaluate
          </Button>
        </Box>
      )}>
      <Box
        as="textarea"
        className="StandaloneEditor"
        onChange={e => setCode(e.target.value)}
        spellcheck={false}
      >
        {code}
      </Box>
      <pre id="highlighting" aria-hidden="true">
        <code class="language-html" id="highlighting-content" />
      </pre>
      <LabeledList>
        <LabeledList.Item label="Selected Interface">
          <Dropdown
            overflow-y="scroll"
            width="200px"
            selected={selectedInterface}
            options={interfaces}
            onSelected={changeInterface}
          />
        </LabeledList.Item>
      </LabeledList>
    </Section>
  )
}

const DebugWrapper = () => {
  const Component = getRoutedComponent(store);

  return (
    <Box className="StandaloneContainer">
      <MsgEditor />
      <Component />
    </Box>
  )
}

const renderApp = createRenderer(() => {
  return (
    <StoreProvider store={store}>
      <DebugWrapper />
    </StoreProvider>
  );
});

const setupApp = () => {
  // Delay setup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupApp);
    return;
  }

  setupGlobalEvents();
  setupHotKeys();
  captureExternalLinks();

  // Subscribe for state updates
  store.subscribe(renderApp);

  // Dispatch incoming messages
  window.update = msg => store.dispatch(Byond.parseJson(msg));

  // Process the early update queue
  while (true) {
    const msg = window.__updateQueue__.shift();
    if (!msg) {
      break;
    }
    window.update(msg);
  }

  window.update(JSON.stringify(defaultInitialState));
};

setupApp();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
