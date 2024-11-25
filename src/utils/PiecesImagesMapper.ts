// Define types for the chess pieces
type PieceType = 'p' | 'r' | 'n' | 'b' | 'q' | 'k';
type PieceColor = 'b' | 'w';
type PieceId = string;
type PieceMap = Record<PieceId, string>;

// Define piece types
export const PieceTypes = {
    PAWN: 'p' as PieceType,
    ROOK: 'r' as PieceType,
    KNIGHT: 'n' as PieceType,
    BISHOP: 'b' as PieceType,
    QUEEN: 'q' as PieceType,
    KING: 'k' as PieceType,
};

// Define colors
export const PieceColors = {
    BLACK: 'b' as PieceColor,
    WHITE: 'w' as PieceColor,
};

// Complete piece mapping
export const PieceMap: PieceMap = {
    // Black pieces
    'br1': '/chess-react/assets/rook-b.svg',
    'br2': '/chess-react/assets/rook-b.svg',
    'bn1': '/chess-react/assets/knight-b.svg',
    'bn2': '/chess-react/assets/knight-b.svg',
    'bb1': '/chess-react/assets/bishop-b.svg',
    'bb2': '/chess-react/assets/bishop-b.svg',
    'bq': '/chess-react/assets/queen-b.svg',
    'bk': '/chess-react/assets/king-b.svg',
    'bp1': '/chess-react/assets/pawn-b.svg',
    'bp2': '/chess-react/assets/pawn-b.svg',
    'bp3': '/chess-react/assets/pawn-b.svg',
    'bp4': '/chess-react/assets/pawn-b.svg',
    'bp5': '/chess-react/assets/pawn-b.svg',
    'bp6': '/chess-react/assets/pawn-b.svg',
    'bp7': '/chess-react/assets/pawn-b.svg',
    'bp8': '/chess-react/assets/pawn-b.svg',

    // White pieces
    'wr1': '/chess-react/assets/rook-w.svg',
    'wr2': '/chess-react/assets/rook-w.svg',
    'wn1': '/chess-react/assets/knight-w.svg',
    'wn2': '/chess-react/assets/knight-w.svg',
    'wb1': '/chess-react/assets/bishop-w.svg',
    'wb2': '/chess-react/assets/bishop-w.svg',
    'wq': '/chess-react/assets/queen-w.svg',
    'wk': '/chess-react/assets/king-w.svg',
    'wp1': '/chess-react/assets/pawn-w.svg',
    'wp2': '/chess-react/assets/pawn-w.svg',
    'wp3': '/chess-react/assets/pawn-w.svg',
    'wp4': '/chess-react/assets/pawn-w.svg',
    'wp5': '/chess-react/assets/pawn-w.svg',
    'wp6': '/chess-react/assets/pawn-w.svg',
    'wp7': '/chess-react/assets/pawn-w.svg',
    'wp8': '/chess-react/assets/pawn-w.svg'
};


// Helper function to get piece image
export const getPieceImage = (pieceId: PieceId): string => {
    return PieceMap[pieceId] || '';
};

// Helper function to create piece ID
export const createPieceId = (
    color: PieceColor, 
    type: PieceType, 
    number?: number
): PieceId => {
    return `${color}${type}${number || ''}`;
};
