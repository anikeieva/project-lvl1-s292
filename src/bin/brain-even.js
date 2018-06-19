#!/usr/bin/env node
import startGame from '..';
import { gameCondition, getEvenLogical } from '../games/brain-even';

startGame(gameCondition, getEvenLogical);
