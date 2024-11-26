import './Piece.css'
import { getPieceImage } from '../utils/PiecesImagesMapper.ts';
import '../utils/PiecesImagesMapper'
import { forwardRef } from 'react';
interface PieceProps {
    id: string;
}

const Piece = forwardRef<HTMLDivElement, PieceProps>(({ id }, ref) => {
    const PieceImg = getPieceImage(id)

    return (
        <div
            id={id}
            ref={ref}
            className='center piece'
            draggable
        >
            <img src={PieceImg} alt={id} />
        </div >
    );
});

export default Piece