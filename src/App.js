import React from 'react';
import { DnDCharacterStatsSheet } from 'dnd-character-sheets';
import { DnDCharacterProfileSheet } from 'dnd-character-sheets';
import { DnDCharacterSpellSheet } from 'dnd-character-sheets';
import 'dnd-character-sheets/dist/index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <DnDCharacterStatsSheet />
      <DnDCharacterProfileSheet />
      <DnDCharacterSpellSheet />
    </div>
  );
}

export default App;
