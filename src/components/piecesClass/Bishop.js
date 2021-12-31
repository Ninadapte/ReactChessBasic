
class Bishop  {

    constructor(row,col,color,type){

        this.row = row;
        this.col = col;
        this.color = color;
        this.type = type;

    }
    getValidMoves(board_obj)
    {
        
        let board= board_obj.state.virtual_board;
        let validMoves = [];
        let oppoColor = (this.color=="white")?"black":"white";

        //check top left
        let row = this.row;
        let col  = this.col;
        let init_row=this.row;
        let init_col =this.col;
        let breakpoint = false;
        while(row>0 && col>0 && !breakpoint) {

            if(board[row-1][col-1] == null){

                board[row-1][col-1] = this;
                board[init_row][init_col] = null;
                this.row = row-1;
                this.col = col-1;

                //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
                let check =false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                }
                else{
                    check = board_obj.checkBlack(board);
                }
                if(!check){
                    validMoves.push([row-1,col-1]);
                }

                board[row-1][col-1] = null;
                this.row= init_row;
                this.col = init_col;
                board[init_row][init_col] = this;
                

            }
            else{

                if(board[row-1][col-1].color == oppoColor){
                    let capture_piece_hold = board[row-1][col-1];
                    board[row-1][col-1] = this;
                    board[init_row][init_col] = null;
                    this.row = row-1;
                    this.col = col-1;

                    let check = false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                        }
                        else{
                            check = board_obj.checkBlack(board);
                        }
                    if(!check){
                        validMoves.push([row-1,col-1]);
                    }

                    board[row-1][col-1] = capture_piece_hold;
                    board[init_row][init_col] = this;
                    this.row= init_row;
                    this.col = init_col;
                    breakpoint = true;
                }
                else{
                    breakpoint = true;
                }


            }

            row-=1;
            col-=1;
            
        }




        //check top right row-- col++
      
         row = this.row;
         col  = this.col;
         init_row=this.row;
         init_col =this.col;
         breakpoint = false;
        while(row>0 && col<7 && !breakpoint) {

            if(board[row-1][col+1] == null){

                board[row-1][col+1] = this;
                board[init_row][init_col] = null;
                this.row = row-1;
                this.col = col+1;

                let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                if(!check){
                    validMoves.push([row-1,col+1]);
                }

                board[row-1][col+1] = null;
                this.row= init_row;
                this.col = init_col;
                board[init_row][init_col] = this;
                

            }
            else{

                if(board[row-1][col+1].color == oppoColor){
                    let capture_piece_hold = board[row-1][col+1];
                    board[row-1][col+1] = this;
                    board[init_row][init_col] = null;
                    this.row = row-1;
                    this.col = col+1;

                    let check = false;
                    if(this.color == "white"){
                        check  = board_obj.checkWhite(board);
                        }
                        else{
                            check = board_obj.checkBlack(board);
                        }
                    if(!check){
                        validMoves.push([row-1,col+1]);
                    }

                    board[row-1][col+1] = capture_piece_hold;
                    board[init_row][init_col] = this;
                    this.row= init_row;
                    this.col = init_col;
                    breakpoint = true;
                }
                else{
                    breakpoint = true;
                }


            }

            row-=1;
            col+=1;
            
        }


        //bottom left row++ col --

        row = this.row;
        col  = this.col;
        init_row=this.row;
        init_col =this.col;
        breakpoint = false;
       while(row<7 && col>0 && !breakpoint) {

           if(board[row+1][col-1] == null){

               board[row+1][col-1] = this;
               board[init_row][init_col] = null;
               this.row = row+1;
               this.col = col-1;

               //let check = (this.color=="white")?board_obj.checkWhite(board):board_obj.çheckBlack(board);
               let check = false;
               if(this.color == "white"){
                check  = board_obj.checkWhite(board);
                }
                else{
                    check = board_obj.checkBlack(board);
                }
               if(!check){
                   validMoves.push([row+1,col-1]);
               }

               board[row+1][col-1] = null;
               this.row = init_row;
               this.col = init_col;
               board[init_row][init_col] = this;
               

           }
           else{

               if(board[row+1][col-1].color == oppoColor){
                   let capture_piece_hold = board[row+1][col-1];
                   board[row+1][col-1] = this;
                   board[init_row][init_col] = null;
                   this.row = row+1;
                   this.col = col-1;

                   let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                   if(!check){
                       validMoves.push([row+1,col-1]);
                   }

                   board[row+1][col-1] = capture_piece_hold;
                   board[init_row][init_col] = this;
                   this.row= init_row;
                   this.col = init_col;
                   breakpoint = true;
               }
               else{
                   breakpoint = true;
               }


           }

           row+=1;
           col-=1;
           
       }

       //bottom right row++ col++

        row = this.row;
        col  = this.col;
        init_row=this.row;
        init_col =this.col;
        breakpoint = false;
       while(row<7 && col<7 && !breakpoint) {

           if(board[row+1][col+1] == null){

               board[row+1][col+1] = this;
               board[init_row][init_col] = null;
               this.row = row+1;
               this.col = col+1;

               let check = false;
               if(this.color == "white"){
                check  = board_obj.checkWhite(board);
                }
                else{
                    check = board_obj.checkBlack(board);
                }
               if(!check){
                   validMoves.push([row+1,col+1]);
               }

               board[row+1][col+1] = null;
               this.row= init_row;
               this.col = init_col;
               board[init_row][init_col] = this;
               

           }
           else{

               if(board[row+1][col+1].color == oppoColor){
                   let capture_piece_hold = board[row+1][col+1];
                   board[row+1][col+1] = this;
                   board[init_row][init_col] = null;
                   this.row = row+1;
                   this.col = col+1;

                   let check = false;
                if(this.color == "white"){
                    check  = board_obj.checkWhite(board);
                    }
                    else{
                        check = board_obj.checkBlack(board);
                    }
                   if(!check){
                       validMoves.push([row+1,col+1]);
                   }

                   board[row+1][col+1] = capture_piece_hold;
                   board[init_row][init_col] = this;
                   this.row= init_row;
                   this.col = init_col;
                   breakpoint = true;
               }
               else{
                   breakpoint = true;
               }


           }

           row+=1;
           col+=1;
           
       }



        return validMoves;
    }
}
export default Bishop;