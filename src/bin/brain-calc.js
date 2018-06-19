#!/usr/bin/env node
import startGame from '..';
import { gameCondition, getCalcLogical } from '../games/brain-calc';

startGame(gameCondition, getCalcLogical);
