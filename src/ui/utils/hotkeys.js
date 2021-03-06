// Uses mouse-trap key bindings
export default {
  CHANGE_LANG: { keys: 'alt+l', default: false },
  CHANGE_THEME: { keys: 'alt+t', default: false },
  ADD_NOTEBOOK: { keys: 'alt+n', default: false },
  OPEN_NOTEBOOK: { keys: 'alt+o', default: false },
  SAVE_NOTEBOOKS: { keys: 'alt+s', default: false },
  RUN_NOTEBOOK: { keys: 'Shift-Enter', default: false }, // Uses codemirror keybindings
  MOVE_DOWN_FUZZY_FINDER: { keys: 'down', default: true },
  MOVE_UP_FUZZY_FINDER: { keys: 'up', default: true },
  EXIT_FUZZY_FINDER: { keys: 'esc', default: true },
  ENTER_FUZZY_FINDER: { keys: 'enter', default: true },
  SPLIT_WORKSPACE_VERTICALLY: { keys: 'alt+v', default: false },
  DISCOVER_ACTION: { keys: 'alt+c', default: false },
};
