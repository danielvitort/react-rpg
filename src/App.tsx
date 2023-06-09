import { useEffect } from "react";
import * as C from "./App.styles"
import { Character } from "./components/character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  const char = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'keyA':
      case 'ArrowLeft':  
        char.moveLeft();
      break;
      case 'keyW':
      case 'ArrowUp':  
        char.moveUp();
      break;
      case 'keyD':
      case 'ArrowRight':  
        char.moveRight();
      break;
      case 'keyS':
      case 'ArrowDown':  
        char.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x}  y={char.y} side={char.side} />
      </C.Map>
    </C.Container>

  );
}

export default App;