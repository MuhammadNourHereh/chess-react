export function squareIdToGridArea(id: string): string {
    // Assuming the id format is like 'a8', 'b7', etc.
    const file = id[0];  // file is the letter (a-h)
    const rank = parseInt(id[1]);  // rank is the number (1-8)

    // We assume the grid is 8x8 and 'a' -> 1, 'b' -> 2, ..., 'h' -> 8.
    const column = file.charCodeAt(0) - 96; // 'a' becomes 1, 'b' becomes 2, etc.
    const row = 9 - rank; // Since rank 1 is the bottom row, we adjust for grid (1 becomes 8, 8 becomes 1)

    return `${row} / ${column}`;
}