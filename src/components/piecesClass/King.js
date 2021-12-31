
class King  {

    constructor(row,col,color,type){

        this.row = row;
        this.col = col;
        this.color = color;
        this.type = type;

    }
    getValidMoves(board_obj)
    {
     let oppoColor = (this.color=="white")?"black":"white";
    
     let board = board_obj.state.virtual_board;
     let init_row=this.row;
     let init_col=this.col;
     let validMoves = [];

     if(this.row-1>=0){

        if(this.col-1>=0){

            if(board[this.row-1][this.col-1]==null){
                board[this.row-1][this.col-1] = this;
                board[init_row][init_col] = null;
                this.row = this.row-1;
                this.col = this.col-1;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
                //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
                let check =false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                }
                else{
                    check = board_obj.checkBlack(board);
                }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }
            

                board[this.row][this.col] = null;
                this.row= init_row;
                this.col = init_col;
                board[init_row][init_col] = this;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            else{
                if(board[this.row-1][this.col-1].color == oppoColor){
                    let capture_piece_hold = board[this.row-1][this.col-1];
                    board[this.row-1][this.col-1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-1;
                    this.col = this.col-1;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                    let check = false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                        }
                        else{
                            check = board_obj.checkBlack(board);
                        }
                    if(!check){
                        validMoves.push([this.row,this.col]);
                    }
    
                    board[this.row][this.col] = capture_piece_hold;
                    board[init_row][init_col] = this;
                    this.row= init_row;
                    this.col = init_col;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                }
                
            }
        }

        if(this.col+1<=7){
            if(board[this.row-1][this.col+1]==null){
                board[this.row-1][this.col+1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-1;
                    this.col = this.col+1;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                    //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
                    let check =false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                    if(!check){
                        validMoves.push([this.row,this.col]);
                    }
                

                    board[this.row][this.col] = null;
                    this.row= init_row;
                    this.col = init_col;
                    board[init_row][init_col] = this;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
            }
            else{
                if(board[this.row-1][this.col+1].color == oppoColor){
                    let capture_piece_hold = board[this.row-1][this.col+1];
                    board[this.row-1][this.col+1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-1;
                    this.col = this.col+1;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                    let check = false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                        }
                        else{
                            check = board_obj.checkBlack(board);
                        }
                    if(!check){
                        validMoves.push([this.row,this.col]);
                    }
    
                    board[this.row][this.col] = capture_piece_hold;
                    board[init_row][init_col] = this;
                    this.row= init_row;
                    this.col = init_col;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                }
                
            }
        }
        if(board[this.row-1][this.col]==null){
            board[this.row-1][this.col] = this;
            board[init_row][init_col] = null;
            this.row = this.row-1;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }

            //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
            let check =false;
            if(this.color == "white"){
                check  = board_obj.checkWhite(board);
            }
            else{
                check = board_obj.checkBlack(board);
            }
            if(!check){
                validMoves.push([this.row,this.col]);
            }
        

            board[this.row][this.col] = null;
            this.row= init_row;
            this.col = init_col;
            board[init_row][init_col] = this;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }
        }
        else{
            if(board[this.row-1][this.col].color == oppoColor){
                let capture_piece_hold = board[this.row-1][this.col];
                board[this.row-1][this.col] = this;
                board[init_row][init_col] = null;
                this.row = this.row-1;
                this.col = this.col;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
               
                let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }

                board[this.row][this.col] = capture_piece_hold;
                board[init_row][init_col] = this;
                this.row= init_row;
                this.col = init_col;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            
        }

     }

     if(this.row+1<=7){

        if(this.col-1>=0){

            if(board[this.row+1][this.col-1]==null){
                board[this.row+1][this.col-1] = this;
                board[init_row][init_col] = null;
                this.row = this.row+1;
                this.col = this.col- 1;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
                //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
                let check =false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                }
                else{
                    check = board_obj.checkBlack(board);
                }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }
            

                board[this.row][this.col] = null;
                this.row= init_row;
                this.col = init_col;
                board[init_row][init_col] = this;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            else{
                if(board[this.row+1][this.col-1].color == oppoColor){
                    let capture_piece_hold = board[this.row+1][this.col-1];
                    board[this.row+1][this.col-1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row+1;
                    this.col = this.col-1;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                    let check = false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                        }
                        else{
                            check = board_obj.checkBlack(board);
                        }
                    if(!check){
                        validMoves.push([this.row,this.col]);
                    }
    
                    board[this.row][this.col] = capture_piece_hold;
                    board[init_row][init_col] = this;
                    this.row= init_row;
                    this.col = init_col;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                   
                }
                
            }
        }

        if(this.col+1<=7){
            if(board[this.row+1][this.col+1]==null){
                board[this.row+1][this.col+1] = this;
                board[init_row][init_col] = null;
                this.row = this.row+1;
                this.col = this.col+1;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
                //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
                let check =false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                }
                else{
                    check = board_obj.checkBlack(board);
                }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }
            

                board[this.row][this.col] = null;
                this.row= init_row;
                this.col = init_col;
                board[init_row][init_col] = this;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            else{
                if(board[this.row+1][this.col+1].color == oppoColor){
                    let capture_piece_hold = board[this.row+1][this.col+1];
                    board[this.row+1][this.col+1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row+1;
                    this.col = this.col+1;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                    let check = false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                        }
                        else{
                            check = board_obj.checkBlack(board);
                        }
                    if(!check){
                        validMoves.push([this.row,this.col]);
                    }
    
                    board[this.row][this.col] = capture_piece_hold;
                    board[init_row][init_col] = this;
                    this.row= init_row;
                    this.col = init_col;
                    if(this.color=="white"){
                        board_obj.whiteKing = this;
                    }
                    else{
                        board_obj.blackKing = this;
                    }
                }
               
            }
        }
        if(board[this.row+1][this.col]==null){
            board[this.row+1][this.col] = this;
            board[init_row][init_col] = null;
            this.row = this.row+1;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }

            //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
            let check =false;
            if(this.color == "white"){
                check  = board_obj.checkWhite(board);
            }
            else{
                check = board_obj.checkBlack(board);
            }
            if(!check){
                validMoves.push([this.row,this.col]);
            }
        

            board[this.row][this.col] = null;
            this.row= init_row;
            this.col = init_col;
            board[init_row][init_col] = this;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }
        }
        else{
            if(board[this.row+1][this.col].color == oppoColor){
                let capture_piece_hold = board[this.row+1][this.col];
                board[this.row+1][this.col] = this;
                board[init_row][init_col] = null;
                this.row = this.row+1;
                this.col = this.col;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
                let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }

                board[this.row][this.col] = capture_piece_hold;
                board[init_row][init_col] = this;
                this.row= init_row;
                this.col = init_col;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            
        }
     }

     if(this.col-1>=0){
        if(board[this.row][this.col-1]==null){
            board[this.row][this.col-1] = this;
            board[init_row][init_col] = null;
          
            this.col = this.col- 1;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }
            //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
            let check =false;
            if(this.color == "white"){
                check  = board_obj.checkWhite(board);
            }
            else{
                check = board_obj.checkBlack(board);
            }
            if(!check){
                validMoves.push([this.row,this.col]);
            }
        

            board[this.row][this.col] = null;
            this.row= init_row;
            this.col = init_col;
            board[init_row][init_col] = this;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }
        }
        else{
            if(board[this.row][this.col-1].color == oppoColor){
                let capture_piece_hold = board[this.row][this.col-1];
                board[this.row][this.col-1] = this;
                board[init_row][init_col] = null;
                this.row = this.row;
                this.col = this.col-1;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
                let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }

                board[this.row][this.col] = capture_piece_hold;
                board[init_row][init_col] = this;
                this.row= init_row;
                this.col = init_col;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            
        }
     }
     if(this.col+1<=7){
         
        if(board[this.row][this.col+1]==null){
            board[this.row][this.col+1] = this;
            board[init_row][init_col] = null;
         
            this.col = this.col+1;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }
            //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
            let check =false;
            if(this.color == "white"){
                check  = board_obj.checkWhite(board);
            }
            else{
                check = board_obj.checkBlack(board);
            }
            if(!check){
                validMoves.push([this.row,this.col]);
            }
        

            board[this.row][this.col] = null;
            this.row= init_row;
            this.col = init_col;
            board[init_row][init_col] = this;
            if(this.color=="white"){
                board_obj.whiteKing = this;
            }
            else{
                board_obj.blackKing = this;
            }
        }
        else{
            if(board[this.row][this.col+1].color == oppoColor){
                let capture_piece_hold = board[this.row][this.col+1];
                board[this.row][this.col+1] = this;
                board[init_row][init_col] = null;
                this.row = this.row;
                this.col = this.col+1;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
                let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                if(!check){
                    validMoves.push([this.row,this.col]);
                }

                board[this.row][this.col] = capture_piece_hold;
                board[init_row][init_col] = this;
                this.row= init_row;
                this.col = init_col;
                if(this.color=="white"){
                    board_obj.whiteKing = this;
                }
                else{
                    board_obj.blackKing = this;
                }
            }
            
        }
     }
return validMoves;
    }
}
export default King;