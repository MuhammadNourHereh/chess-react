import './Pieces.css'
import Piece from './Piece'
import { useEffect, useRef } from 'react';

const chessPieces: string[] = [
    'br1', 'br2', 'bn1', 'bn2', 'bb1', 'bb2', 'bq', 'bk', // Black pieces
    'bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8', // Black pawns
    'wr1', 'wr2', 'wn1', 'wn2', 'wb1', 'wb2', 'wq', 'wk', // White pieces
    'wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8'  // White pawns
];

const Pieces = () => {
    // set on drag start
    const piecesRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        piecesRefs.current.forEach((piece, index) => {
            if (piece) {
                piece.addEventListener("dragstart", () => {
                    piece.classList.add("dragging")
                    console.log(chessPieces[index]);
                });
            }
        });
        piecesRefs.current.forEach((piece, index) => {
            if (piece) {
                piece.addEventListener("dragend", () => {
                    console.log(chessPieces[index]);
                });
            }
        });
    }, []);

    const movePiece = (piece: string, rank: number, file: number) => {
        const _piece = document.getElementById(piece);
        // fix the orientation of the ranks
        rank = 9 - rank
        if (_piece) {
            _piece.style.gridArea = `${rank}/${file}`;
        }
    }
    useEffect(() => {
        // Initial piece placement
        movePiece("bp1", 3, 1);
    }, []);

    return (
        <>
            {chessPieces.map((p, index) => {
                return <Piece key={index}
                    id={p}
                    ref={el => piecesRefs.current[index] = el}
                />
            })}
        </>
    )
}
export default Pieces