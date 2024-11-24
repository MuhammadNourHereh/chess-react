import Squares from './Squares'
import './Board.css'
import 'font-awesome/css/font-awesome.min.css';
import Pieces from './Pieces';

const Board = () => {
  return (
    <div className='sup-board'>
      <div className='board'>
        <Squares />
      </div>
      <div>
        <Pieces />
      </div>
    </div>
  )
}

export default Board