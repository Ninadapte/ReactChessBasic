class Pawn  {

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
        let row_initial,col_initial,row_final,col_final,capture_piece,moving_piece;
        if(this.color == "white"){

            if(this.row-1 >=0){

                if(this.row-2>=0){
                    if(board[this.row-2][this.col] == null && board[this.row-1][this.col]==null && this.row == 6) {

                        //check the move
                        board[this.row][this.col] = null;
                        board[this.row-2][this.col] = this;
                        this.row = this.row-2;
                        let ret = board_obj.checkWhite(board);
                        if(!ret){
                            this.row = this.row+2;
                            board[this.row-2][this.col] = null;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row-2,this.col]);
                        }else{
                            this.row = this.row+2;
                            board[this.row-2][this.col] = null;
                            board[this.row][this.col] = this;
                        }
                        
                    } 
                }

                //check for front
                if(board[this.row-1][this.col] == null) {

                        board[this.row][this.col] = null;
                        board[this.row-1][this.col] = this;
                        this.row = this.row-1;
                        let ret = board_obj.checkWhite(board);
                        if(!ret){
                            this.row = this.row+1;
                            board[this.row-1][this.col] = null;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row-1,this.col]);
                        }else{
                            this.row = this.row+1;
                            board[this.row-1][this.col] = null;
                            board[this.row][this.col] = this;
                        }
                }

                //check for diagonally left

                if(this.col-1 >=0){
                    if(board[this.row-1][this.col-1]!= null && board[this.row-1][this.col-1].color == "black"){

                        let capture_piece_hold = board[this.row-1][this.col-1];

                        board[this.row][this.col] = null;
                        board[this.row-1][this.col-1] = this;
                        this.row = this.row-1;
                        this.col = this.col - 1;
                        let ret = board_obj.checkWhite(board);
                        if(!ret){
                            this.row = this.row+1;
                            this.col  = this.col+1;
                            board[this.row-1][this.col-1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row-1,this.col-1]);

                        }
                        else
                        {
                            this.row = this.row+1;
                            this.col  = this.col+1;
                            board[this.row-1][this.col-1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                        }


                    }
                }

                //check for diagonally right

                if(this.col+1<=7){
                    if(board[this.row-1][this.col+1]!= null && board[this.row-1][this.col+1].color == "black"){


                        let capture_piece_hold = board[this.row-1][this.col+1];

                        board[this.row][this.col] = null;
                        board[this.row-1][this.col+1] = this;
                        this.row = this.row-1;
                        this.col = this.col + 1;
                        let ret = board_obj.checkWhite(board);
                        if(!ret){
                            this.row = this.row+1;
                            this.col  = this.col-1;
                            board[this.row-1][this.col+1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row-1,this.col+1]);

                        }
                        else
                        {
                            this.row = this.row+1;
                            this.col  = this.col-1;
                            board[this.row-1][this.col+1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                        }

                       
                    }
                }


            }

            //check for enpassent 


        }
        else
        {
            if(this.row+1 <=7){

                if(this.row+2<=7){
                    if(board[this.row+2][this.col] == null&& board[this.row+1][this.col]==null && this.row == 1) {

                        //check the move
                        board[this.row][this.col] = null;
                        board[this.row+2][this.col] = this;
                        this.row = this.row+2;
                        let ret = board_obj.checkBlack(board);
                        if(!ret){
                            this.row = this.row-2;
                            board[this.row+2][this.col] = null;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row+2,this.col]);
                        }else{
                            this.row = this.row-2;
                            board[this.row+2][this.col] = null;
                            board[this.row][this.col] = this;
                        }
                        
                    } 
                }

                //check for front
                if(board[this.row+1][this.col] == null) {

                        board[this.row][this.col] = null;
                        board[this.row+1][this.col] = this;
                        this.row = this.row+1;
                        let ret = board_obj.checkBlack(board);
                        if(!ret){
                            this.row = this.row-1;
                            board[this.row+1][this.col] = null;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row+1,this.col]);
                        }else{
                            this.row = this.row-1;
                            board[this.row+1][this.col] = null;
                            board[this.row][this.col] = this;
                        }
                }

                //check for diagonally left

                if(this.col-1 >=0){
                    if(board[this.row+1][this.col-1]!= null && board[this.row+1][this.col-1].color == "white"){

                        let capture_piece_hold = board[this.row+1][this.col-1];

                        board[this.row][this.col] = null;
                        board[this.row+1][this.col-1] = this;
                        this.row = this.row+1;
                        this.col = this.col - 1;
                        let ret = board_obj.checkBlack(board);
                        if(!ret){
                            this.row = this.row-1;
                            this.col  = this.col+1;
                            board[this.row+1][this.col-1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row+1,this.col-1]);

                        }
                        else
                        {
                            this.row = this.row-1;
                            this.col  = this.col+1;
                            board[this.row+1][this.col-1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                        }


                    }
                }

                //check for diagonally right

                if(this.col+1<=7){
                    if(board[this.row+1][this.col+1]!= null && board[this.row+1][this.col+1].color == "white"){


                        let capture_piece_hold = board[this.row+1][this.col+1];

                        board[this.row][this.col] = null;
                        board[this.row+1][this.col+1] = this;
                        this.row = this.row+1;
                        this.col = this.col + 1;
                        let ret = board_obj.checkBlack(board);
                        if(!ret){
                            this.row = this.row-1;
                            this.col  = this.col-1;
                            board[this.row+1][this.col+1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                            validMoves.push([this.row+1,this.col+1]);

                        }
                        else
                        {
                            this.row = this.row-1;
                            this.col  = this.col-1;
                            board[this.row+1][this.col+1] = capture_piece_hold;
                            board[this.row][this.col] = this;
                        }

                       
                    }
                }


            }

            
        }
      
        return validMoves;
    }

}
export default Pawn;