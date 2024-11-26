import { squareIdToGridArea } from '../utils/utils';
import './Square.css'

interface SquareProps {
    squareColor: string;
    squareId: string;
}

const Square = ({ squareColor, squareId }: SquareProps) => {
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault(); // Crucial for enabling drop
        event.stopPropagation();
    };
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('Dropped on:', { squareId });
        const dragged = document.querySelector(".dragging");
        const gridArea = squareIdToGridArea(squareId)
        if (!dragged || !(dragged instanceof HTMLElement)) {
            console.log("Dragged element not found or invalid")
            return
          }
        dragged.style.gridArea = gridArea
        dragged.classList.remove("dragging")
    };
    return (
        <div
            className={`square ${squareColor}`}
            id={squareId}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >{squareId}
        </div>
    )
}

export default Square