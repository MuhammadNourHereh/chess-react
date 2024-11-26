import Squares from './Squares'
import './Board.css'
import Pieces from './Pieces';

const Board = () => {
  return (
    <div className='sup-board'>
      <div className='board'>
        <Squares />
      </div>
      <div className='board pieces'>
        <Pieces />
      </div>
    </div>
  )
}

export default Board