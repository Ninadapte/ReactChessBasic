
class Knight  {

    constructor(row,col,color,type){

        this.row = row;
        this.col = col;
        this.color = color;
        this.type = type;

    }
    getValidMoves(board_obj)
    {
        let board = board_obj.state.virtual_board;
        let validMoves = [];
        let init_row=this.row,init_col = this.col;
        let oppoColor = (this.color=="white")?"black":"white";
        let breakpoint =false;
        
        if(this.row-2 >=0){

            if(this.col-1>=0){


                if(board[this.row-2][this.col-1]==null){
                    board[this.row-2][this.col-1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-2;
                    this.col = this.col-1;

                   
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
                        }
                    else
                    {
                        if(board[this.row-2][this.col-1].color == oppoColor){
                            let capture_piece_hold = board[this.row-2][this.col-1];
                            board[this.row-2][this.col-1] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row-2;
                            this.col = this.col-1;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }


            }
            if(this.col+1<=7){

                if(board[this.row-2][this.col+1]==null){
                    board[this.row-2][this.col+1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-2;
                    this.col = this.col+1;

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
                        }
                    else
                    {
                        if(board[this.row-2][this.col+1].color == oppoColor){
                            let capture_piece_hold = board[this.row-2][this.col+1];
                            board[this.row-2][this.col+1] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row-2;
                            this.col = this.col+1;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }
            }


        }

        if(this.row+2<=7)
        {
            if(this.col-1>=0){


                if(board[this.row+2][this.col-1]==null){
                    board[this.row+2][this.col-1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row+2;
                    this.col = this.col-1;

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
                        }
                    else
                    {
                        if(board[this.row+2][this.col-1].color == oppoColor){
                            let capture_piece_hold = board[this.row+2][this.col-1];
                            board[this.row+2][this.col-1] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row+2;
                            this.col = this.col-1;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }


            }
            if(this.col+1<=7){

                if(board[this.row+2][this.col+1]==null){
                    board[this.row+2][this.col+1] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row+2;
                    this.col = this.col+1;

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
                        }
                    else
                    {
                        if(board[this.row+2][this.col+1].color == oppoColor){
                            let capture_piece_hold = board[this.row+2][this.col+1];
                            board[this.row+2][this.col+1] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row+2;
                            this.col = this.col+1;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }
            }
        }
        if(this.col-2>=0){

            if(this.row-1>=0){


                if(board[this.row-1][this.col-2]==null){
                    board[this.row-1][this.col-2] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-1;
                    this.col = this.col- 2;

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
                        }
                    else
                    {
                        if(board[this.row-1][this.col-2].color == oppoColor){
                            let capture_piece_hold = board[this.row-1][this.col-2];
                            board[this.row-1][this.col-2] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row-1;
                            this.col = this.col-2;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }


            }
            if(this.row+1<=7){

                if(board[this.row+1][this.col-2]==null){
                    board[this.row+1][this.col-2] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row+1;
                    this.col = this.col-2;

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
                        }
                    else
                    {
                        if(board[this.row+1][this.col-2].color == oppoColor){
                            let capture_piece_hold = board[this.row+1][this.col-2];
                            board[this.row+1][this.col-2] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row+1;
                            this.col = this.col-2;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }
        }

        }
        if(this.col+2<=7){
            
            if(this.row-1>=0){


                if(board[this.row-1][this.col+2]==null){
                    board[this.row-1][this.col+2] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row-1;
                    this.col = this.col+2;

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
                        }
                    else
                    {
                        if(board[this.row-1][this.col+2].color == oppoColor){
                            let capture_piece_hold = board[this.row-1][this.col+2];
                            board[this.row-1][this.col+2] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row-1;
                            this.col = this.col+2;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }


            }
            if(this.row+1<=7){

                if(board[this.row+1][this.col+2]==null){
                    board[this.row+1][this.col+2] = this;
                    board[init_row][init_col] = null;
                    this.row = this.row+1;
                    this.col = this.col+2;

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
                        }
                    else
                    {
                        if(board[this.row+1][this.col+2].color == oppoColor){
                            let capture_piece_hold = board[this.row+1][this.col+2];
                            board[this.row+1][this.col+2] = this;
                            board[init_row][init_col] = null;
                            this.row = this.row+1;
                            this.col = this.col+2;
            
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
                            breakpoint = true;
                        }
                        else{
                            breakpoint = true;
                        }
                    }
        }
        }
        return validMoves;
    }
}
export default Knight;