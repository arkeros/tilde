/**
 * Copyright (C) 2017 Rafael Arquero (@arkeros)
 *
 * This file is part of Startpage tilde.
 *
 * Startpage tilde is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Startpage tilde is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Startpage tilde.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @flow
 */

import { combineReducers } from 'redux';

import input from './input';
import settings from './settings';
import time from './time';

import type { InputState } from './input';
import type { SettingsState } from './settings';
import type { TimeState } from './time';


export type State = {
  input: InputState,
  settings: SettingsState,
  time: TimeState,
};

export default combineReducers({
  input,
  settings,
  time,
});
