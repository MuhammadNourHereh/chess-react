import './Pieces.css'
import Piece from './Piece'

const chessPieces: string[] = [
    'br1', 'br2', 'bn1', 'bn2', 'bb1', 'bb2', 'bq', 'bk', // Black pieces
    'bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8', // Black pawns
    'wr1', 'wr2', 'wn1', 'wn2', 'wb1', 'wb2', 'wq', 'wk', // White pieces
    'wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8'  // White pawns
];

const Pieces = () => {

    const movePiece = (piece: string, rank: number, file: Number) => {
        const _piece = document.getElementById(piece);
        // fix the orientation of the ranks
        rank = 9 - rank
        if (_piece) {
            _piece.style.gridArea = `${rank}/${file}`;
        }
    }

    return (
        <div className='board'>
            {chessPieces.map((p, index) => {
                return <Piece key={index} id={p} />
            })}
        </div>
    )
}

export default Pieces