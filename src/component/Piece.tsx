import './Piece.css'
import { getPieceImage } from '../utils/PiecesImagesMapper.ts';
import '../utils/PiecesImagesMapper'
interface PieceProps {
    id: string;
}

const Piece: React.FC<PieceProps> = ({ id }) => {
    const PieceImg = getPieceImage(id)
    return (
        <div id={id} className='center'>
            <img src={PieceImg} alt="Piece"/>
        </div>
    )
}

export default Piece