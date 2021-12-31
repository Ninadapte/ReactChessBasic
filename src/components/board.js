import React from 'react';
import Square from './square';
import '../styles/board.css';
import Pawn from './piecesClass/Pawn';
import Rook from './piecesClass/Rook';
import Knight from './piecesClass/Knight';
import Bishop from './piecesClass/Bishop';
import Queen from './piecesClass/Queen';
import King from './piecesClass/King';

class Board extends React.Component {

    constructor(props) {
        super(props);
        let row1 = [null,null,null,null,null,null,null,null];
        let row2 = [null,null,null,null,null,null,null,null];
        let row3 = [null,null,null,null,null,null,null,null];
        let row4 = [null,null,null,null,null,null,null,null];
        let row5 = [null,null,null,null,null,null,null,null];
        let row6 = [null,null,null,null,null,null,null,null];
        let row7 = [null,null,null,null,null,null,null,null];
        let row8 = [null,null,null,null,null,null,null,null];
        let board = [row1,row2,row3,row4,row5,row6,row7,row8];
        this.whiteKing = null;
        this.blackKing = null;
        this.selected = null;
        this.whiteMate = false;
        this.blackMate = false;
        this.turn = "white";
        this.initialize(board,props.front)
        this.isValid = this.isValid.bind(this);
        this.cloneBoard = this.cloneBoard.bind(this);
        this.checkMate = this.checkMate.bind(this);
        this.checkWhite = this.checkWhite.bind(this);
        this.checkBlack = this.checkBlack.bind(this);
        this.onSquareClicked = this.onSquareClicked.bind(this);
        this.state = {virtual_board :board ,front :props.front,validMoves : []}
    }
    initialize(board,front) {
    //Initialize the black pieces
    
    if(front === "white"){
        
        //black side
        board[0][0] = new Rook(0,0,"black","brook");
        board[0][1] = new Knight(0,1,"black","bknight");
        board[0][2] = new Bishop(0,2,"black","bbishop");
        board[0][3] = new Queen(0,3,"black","bqueen");
        board[0][4] = new King(0,4,"black","bking");
        this.blackKing = board[0][4];
        board[0][5] = new Bishop(0,5,"black","bbishop");
        board[0][6] = new Knight(0,6,"black","bknight");
        board[0][7] = new Rook(0,7,"black","brook");

        board[1][0] = new Pawn(1,0,"black","bpawn");
        board[1][1] = new Pawn(1,1,"black","bpawn");
        board[1][2] = new Pawn(1,2,"black","bpawn");
        board[1][3] = new Pawn(1,3,"black","bpawn");
        board[1][4] = new Pawn(1,4,"black","bpawn");
        board[1][5] = new Pawn(1,5,"black","bpawn");
        board[1][6] = new Pawn(1,6,"black","bpawn");
        board[1][7] = new Pawn(1,7,"black","bpawn");

        //white stide

        board[7][0] = new Rook(7,0,"white","wrook");
        board[7][1] = new Knight(7,1,"white","wknight");
        board[7][2] = new Bishop(7,2,"white","wbishop");
        board[7][3] = new Queen(7,3,"white","wqueen");
        board[7][4] = new King(7,4,"white","wking");
        this.whiteKing =new King(7,4,"white","wking"); 
        board[7][5] = new Bishop(7,5,"white","wbishop");
        board[7][6] = new Knight(7,6,"white","wknight");
        board[7][7] = new Rook(7,7,"white","wrook");

        board[6][0] = new Pawn(6,0,"white","wpawn");
        board[6][1] = new Pawn(6,1,"white","wpawn");
        board[6][2] = new Pawn(6,2,"white","wpawn");
        board[6][3] = new Pawn(6,3,"white","wpawn");
        board[6][4] = new Pawn(6,4,"white","wpawn");
        board[6][5] = new Pawn(6,5,"white","wpawn");
        board[6][6] = new Pawn(6,6,"white","wpawn");
        board[6][7] = new Pawn(6,7,"white","wpawn");



    }
    else
    {
        board[7][0] = new Rook(0,0,"black","brook");
        board[7][1] = new Knight(0,1,"black","bknight");
        board[7][2] = new Bishop(0,2,"black","bbishop");
        board[7][3] = new Queen(0,3,"black","bqueen");
        board[7][4] = new King(0,4,"black","bking");
        this.blackKing = board[7][4];
        board[7][5] = new Rook(0,5,"black","bbishop");
        board[7][6] = new Knight(0,6,"black","bknight");
        board[7][7] = new Bishop(0,7,"black","brook");

        board[6][0] = new Pawn(1,0,"black","bpawn");
        board[6][1] = new Pawn(1,1,"black","bpawn");
        board[6][2] = new Pawn(1,2,"black","bpawn");
        board[6][3] = new Pawn(1,3,"black","bpawn");
        board[6][4] = new Pawn(1,4,"black","bpawn");
        board[6][5] = new Pawn(1,5,"black","bpawn");
        board[6][6] = new Pawn(1,6,"black","bpawn");
        board[6][7] = new Pawn(1,7,"black","bpawn");

        //white stide

        board[0][0] = new Rook(7,0,"white","wrook");
        board[0][1] = new Knight(7,1,"white","wknight");
        board[0][2] = new Bishop(7,2,"white","wbishop");
        board[0][3] = new Queen(7,3,"white","wqueen");
        board[0][4] = new King(7,4,"white","wking");
        this.whiteKing = board[0][4];
        board[0][5] = new Rook(7,5,"white","wbishop");
        board[0][6] = new Knight(7,6,"white","wknight");
        board[0][7] = new Bishop(7,7,"white","wrook");

        board[1][0] = new Pawn(6,0,"white","wpawn");
        board[1][1] = new Pawn(6,1,"white","wpawn");
        board[1][2] = new Pawn(6,2,"white","wpawn");
        board[1][3] = new Pawn(6,3,"white","wpawn");
        board[1][4] = new Pawn(6,4,"white","wpawn");
        board[1][5] = new Pawn(6,5,"white","wpawn");
        board[1][6] = new Pawn(6,6,"white","wpawn");
        board[1][7] = new Pawn(6,7,"white","wpawn");
    }

        

    }
    checkMateWhite(board){

        
        for(let row = 0 ; row<=7;row++){
            for(let col = 0 ; col<=7;col++){
                if(board[row][col]!=null){

                    if(board[row][col].color == "white"){
                        if(board[row][col].getValidMoves(this).length!=0){
                            return false;
                        }
                    }

                }
            }
        }
        return true;



    }
    checkMateBlack(board){
        

            
            
            for(let row = 0 ; row<=7;row++){
                for(let col = 0 ; col<=7;col++){
                    if(board[row][col]!=null){
    
                        if(board[row][col].color == "black"){
                            if(board[row][col].getValidMoves(this).length!=0){
                                return false;
                            }
                        }
    
                    }
                }
            }
            return true;
    
    
    
        
    }
    checkWhite(board)
    {

        let row = this.whiteKing.row;
        let col = this.whiteKing.col;
        
        //check left horizontal 
        let col_hold = col-1 ;
        let row_hold = row;
        while(col_hold>=0)
        {
            if(board[row][col_hold]!=null ){
            if(board[row][col_hold].type === "bqueen" ||board[row][col_hold].type === "brook" )
            {
                return true;
            }
            else{
                break;
            }
            }
            col_hold-=1;
        }

        //check right horizontal 
        col_hold = col +1;
        
        while(col_hold<=7)
        {
            if(board[row][col_hold]!=null){
            if(board[row][col_hold].type === "bqueen" ||board[row][col_hold].type === "brook" )
            {
                return true;
            }else{
                break;
            }
        }
            col_hold+=1;
        }

        //check top vertical 
        
        row_hold = row -1;
        while(row_hold>=0)
        {
            if(board[row_hold][col]!=null){
            if(board[row_hold][col].type === "bqueen" ||board[row_hold][col].type === "brook" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold-=1;
        }


        //check down vertical 
        row_hold = row+1;
        while(row_hold<=7)
        {
            if(board[row_hold][col]){
            if(board[row_hold][col].type === "bqueen" ||board[row_hold][col].type === "brook" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold+=1;
        }


        row_hold = row+1 ;
        col_hold = col-1;
        
        //check down left   
        while(col_hold>=0&&row_hold<=7){
            
            if(board[row_hold][col_hold]!=null){
            if(board[row_hold][col_hold].type === "bqueen" ||board[row_hold][col_hold].type === "bbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold+=1;
            col_hold-=1;
        }


        row_hold = row+1 ;
        col_hold = col+1;
        
        //check down right  
        while(col_hold<=7&&row_hold<=7){

            if(board[row_hold][col_hold]){
            if(board[row_hold][col_hold].type === "bqueen" ||board[row_hold][col_hold].type === "bbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold+=1;
            col_hold+=1;
        }

        row_hold = row -1;
        col_hold = col-1;
        
        //check up left   
        while(col_hold>=0&&row_hold>=0){

            if(board[row_hold][col_hold]){
            if(board[row_hold][col_hold].type === "bqueen" ||board[row_hold][col_hold].type === "bbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold-=1;
            col_hold-=1;
        }

        row_hold = row -1;
        col_hold = col+1;
        
        //check up right  
        while(col_hold<=7&&row_hold>=0){
            
            if(board[row_hold][col_hold]){
            if(board[row_hold][col_hold].type === "bqueen" ||board[row_hold][col_hold].type === "bbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold-=1;
            col_hold+=1;
        }


        //check for pawn attacks 
        if(row>=1 && col>0){
        if(board[row-1][col-1]!=null&&board[row-1][col-1].type=='bpawn'){return true;}}

        if(row>=1&&col<=6){
            if(board[row-1][col+1]!=null&&board[row-1][col+1].type=='bpawn'){return true;}
        }
        

        //check king attack
        if(row-1>=0){

            if(board[row-1][col]!=null && board[row-1][col].type=='bking'){return true;}
            if(col-1>=0){
                if(board[row-1][col-1]!=null && board[row-1][col-1].type=='bking'){return true;}
                if(board[row][col-1]!=null && board[row][col-1].type=='bking'){return true;}
            }
            if(col+1<=7){
                if(board[row-1][col+1]!=null && board[row-1][col+1].type=='bking'){return true;}
                if(board[row][col+1]!=null && board[row][col+1].type=='bking'){return true;}
            }

        }
        if(row+1<=7){
            if(board[row+1][col]!=null && board[row+1][col].type=='bking'){return true;}
            if(col-1>=0){
                if(board[row+1][col-1]!=null && board[row+1][col-1].type=='bking'){return true;}
                if(board[row][col-1]!=null && board[row][col-1].type=='bking'){return true;}
            }
            if(col+1<=7){
                if(board[row-1][col+1]!=null && board[row-1][col+1].type=='bking'){return true;}
                if(board[row][col+1]!=null && board[row][col+1].type=='bking'){return true;}
            }
        }

        //check for knight
        if(row-2>=0){
            if(col-1>=0){if(board[row-2][col-1]!=null && board[row-2][col-1].type=='bknight'){return true;}}
            if(col+1<=7){if(board[row-2][col+1]!=null && board[row-2][col+1].type=='bknight'){return true;}}
            
        }
        if(row+2<=7){
            if(col-1>=0){if(board[row+2][col-1]!=null && board[row+2][col-1].type=='bknight'){return true;}}
            if(col+1<=7){if(board[row+2][col+1]!=null && board[row+2][col+1].type=='bknight'){return true;}}
        }

        if(col-2>=0){
            if(row-1>=0){if(board[row-1][col-2]!=null && board[row-1][col-2].type=='bknight'){return true;}}
            if(row+1<=7){if(board[row+1][col-2]!=null && board[row+1][col-2].type=='bknight'){return true;}}
            
        }
        if(col+2<=7){
            if(row-1>=0){if(board[row-1][col+2]!=null && board[row-1][col+2].type=='bknight'){return true;}}
            if(row+1<=7){if(board[row+1][col+2]!=null && board[row+1][col+2].type=='bknight'){return true;}}
        }
   

        
        


        return false;



    }
    checkBlack(board)
    {
        let row = this.blackKing.row;
        let col = this.blackKing.col;
        
        //check left horizontal 
        let col_hold = col-1 ;
        let row_hold = row;
        while(col_hold>=0)
        {
            if(board[row][col_hold]!=null){
            if(board[row][col_hold].type === "wqueen" ||board[row][col_hold].type === "wrook" )
            {
                return true;
            }else{
                break;
            }
        }
            col_hold-=1;
        }

        //check right horizontal 
        col_hold = col+1 ;
        row_hold = row;
        while(col_hold<=7)
        {
            if(board[row][col_hold]!=null){
            if(board[row][col_hold].type === "wqueen" ||board[row][col_hold].type === "wrook" )
            {
                return true;
            }else{
                break;
            }
        }
            col_hold+=1;
        }

        //check top vertical 
        row_hold = row-1;
                
        while(row_hold>=0)
        {
            if(board[row_hold][col]!=null){
            if(board[row_hold][col].type === "wqueen" ||board[row_hold][col].type === "wrook" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold-=1;
        }


        //check down vertical 
        row_hold = row+1;
        while(row_hold<=7)
        {
            if(board[row_hold][col]!=null){
            if(board[row_hold][col].type === "wqueen" ||board[row_hold][col].type === "wrook" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold+=1;
        }


        row_hold = row+1 ;
        col_hold = col-1;
        
        //check down left   
        while(col_hold>=0&&row_hold<=7){
            
            if(board[row_hold][col_hold]!=null){
            if(board[row_hold][col_hold].type === "wqueen" ||board[row_hold][col_hold].type === "wbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold+=1;
            col_hold-=1;
        }


        row_hold = row+1 ;
        col_hold = col+1;
        
        //check down right  
        while(col_hold<=7&&row_hold<=7){

            if(board[row_hold][col_hold]){
            if(board[row_hold][col_hold].type === "wqueen" ||board[row_hold][col_hold].type === "wbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold+=1;
            col_hold+=1;
        }

        row_hold = row-1 ;
        col_hold = col-1;
        
        //check up left   
        while(col_hold>=0&&row_hold>=0){

            if(board[row_hold][col_hold]){
            if(board[row_hold][col_hold].type === "wqueen" ||board[row_hold][col_hold].type === "wbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold-=1;
            col_hold-=1;
        }

        row_hold = row-1 ;
        col_hold = col+1;
        
        //check up right  
        while(col_hold<=7&&row_hold>=0){
            
            if(board[row_hold][col_hold]){
            if(board[row_hold][col_hold].type === "wqueen" ||board[row_hold][col_hold].type === "wbishop" )
            {
                return true;
            }else{
                break;
            }
        }
            row_hold-=1;
            col_hold+=1;
        }


       //check for pawn attacks 
       if(row<=6 && col>0){
        if(board[row+1][col-1]!=null&&board[row+1][col-1].type=='wpawn'){return true;}}

        if(row<=6&&col<=6){
            if(board[row+1][col+1]!=null&&board[row+1][col+1].type=='wpawn'){return true;}
        }
        

        //check king attack
        if(row-1>=0){

            if(board[row-1][col]!=null && board[row-1][col].type=='wking'){return true;}
            if(col-1>=0){
                if(board[row-1][col-1]!=null && board[row-1][col-1].type=='wking'){return true;}
                if(board[row][col-1]!=null && board[row][col-1].type=='wking'){return true;}
            }
            if(col+1<=7){
                if(board[row-1][col+1]!=null && board[row-1][col+1].type=='wking'){return true;}
                if(board[row][col+1]!=null && board[row][col+1].type=='wking'){return true;}
            }

        }
        if(row+1<=7){
            if(board[row+1][col]!=null && board[row+1][col].type=='wking'){return true;}
            if(col-1>=0){
                if(board[row+1][col-1]!=null && board[row+1][col-1].type=='wking'){return true;}
                if(board[row][col-1]!=null && board[row][col-1].type=='wking'){return true;}
            }
            if(col+1<=7){
                if(board[row+1][col+1]!=null && board[row+1][col+1].type=='wking'){return true;}
                if(board[row][col+1]!=null && board[row][col+1].type=='wking'){return true;}
            }
        }

        //check for knight
        if(row-2>=0){
            if(col-1>=0){if(board[row-2][col-1]!=null && board[row-2][col-1].type=='wknight'){return true;}}
            if(col+1<=7){if(board[row-2][col+1]!=null && board[row-2][col+1].type=='wknight'){return true;}}
            
        }
        if(row+2<=7){
            if(col-1>=0){if(board[row+2][col-1]!=null && board[row+2][col-1].type=='wknight'){return true;}}
            if(col+1<=7){if(board[row+2][col+1]!=null && board[row+2][col+1].type=='wknight'){return true;}}
        }

        if(col-2>=0){
            if(row-1>=0){if(board[row-1][col-2]!=null && board[row-1][col-2].type=='wknight'){return true;}}
            if(row+1<=7){if(board[row+1][col-2]!=null && board[row+1][col-2].type=='wknight'){return true;}}
            
        }
        if(col+2<=7){
            if(row-1>=0){if(board[row-1][col+2]!=null && board[row-1][col+2].type=='wknight'){return true;}}
            if(row+1<=7){if(board[row+1][col+2]!=null && board[row+1][col+2].type=='wknight'){return true;}}
        }
        return false;

    }
    eraseValidMoves(){
        this.setState({validMoves:[]})
    }
    cloneBoard(board){

        let board_row1 = [null,null,null,null,null,null,null,null];
        let board_row2 = [null,null,null,null,null,null,null,null];
        let board_row3 = [null,null,null,null,null,null,null,null];
        let board_row4 = [null,null,null,null,null,null,null,null];
        let board_row5 = [null,null,null,null,null,null,null,null];
        let board_row6 = [null,null,null,null,null,null,null,null];
        let board_row7 = [null,null,null,null,null,null,null,null];
        let board_row8 = [null,null,null,null,null,null,null,null];
        let board_hold = [board_row1,board_row2,board_row3,board_row4,board_row5,board_row6,board_row7,board_row8];

        for(let row=0;row<=7;row++){

            for(let col = 0 ; col <=7 ; col++){

                board_hold[row][col] = board[row][col];
            }
        }

        return board_hold;

    }
    onSquareClicked(obj,x,y)
    {
        
       if(obj==null){


        if(this.isValid(x,y)){
            //check for enpassent later here
            
            if(this.selected.color == "black"&&x==7&&this.selected.type=="bpawn"){
               
                let newBoard = this.cloneBoard(this.state.virtual_board);
                let piece = this.selected;
                newBoard[piece.row][piece.col] = null;
                newBoard[x][y]= new Queen(x,y,"black","bqueen");
                this.setState({virtual_board: newBoard,validMoves : []},()=>this.checkMate(this.state.virtual_board),);
                this.setState({"mgs":"hello"});
                this.turn = (this.turn=="white")?"black":"white";
            }
            else if(this.selected.color == "white"&&x==0&&this.selected.type=="wpawn")
            {
                
                let newBoard = this.cloneBoard(this.state.virtual_board);
                let piece = this.selected;
                newBoard[piece.row][piece.col] = null;
                newBoard[x][y]= new Queen(x,y,"white","wqueen");
                this.setState({virtual_board: newBoard,validMoves : []},()=>this.checkMate(this.state.virtual_board));
                this.setState({"mgs":"hello"});
                this.turn = (this.turn=="white")?"black":"white";

            }
            else{

            let newBoard = this.cloneBoard(this.state.virtual_board);

            let piece = this.selected;

            newBoard[piece.row][piece.col] = null;
            
            piece.row=  x;
            piece.col  = y;

            newBoard[x][y] = piece;
            this.setState({virtual_board: newBoard},()=>this.checkMate(this.state.virtual_board));
            this.setState({"mgs":"hello"});
            this.turn = (this.turn=="white")?"black":"white";
            }

        }


        this.selected = null;

        this.eraseValidMoves();

       

    }
    else
    {
        if(this.isValid(x,y)){

            if(this.selected.color == "black"&&x==7&&this.selected.type=="bpawn"){
               
                let newBoard = this.cloneBoard(this.state.virtual_board);
                let piece = this.selected;
                newBoard[piece.row][piece.col] = null;
                newBoard[x][y]= new Queen(x,y,"black","bqueen");
                this.
                this.setState({virtual_board: newBoard},()=>this.checkMate(this.state.virtual_board));
                this.setState({"mgs":"hello",validMoves : []});
                this.turn = (this.turn=="white")?"black":"white";
            }
            else if(this.selected.color == "white"&&x==0&&this.selected.type=="wpawn")
            {
                
                let newBoard = this.cloneBoard(this.state.virtual_board);
                let piece = this.selected;
                newBoard[piece.row][piece.col] = null;
                newBoard[x][y]= new Queen(x,y,"white","wqueen");
                this.setState({virtual_board: newBoard},()=>this.checkMate(this.state.virtual_board));
                this.setState({"mgs":"hello",validMoves : []});
                this.turn = (this.turn=="white")?"black":"white";

            }
            else{

            if(this.selected!==obj){
                this.state.virtual_board[x][y] = this.selected;
                this.state.virtual_board[this.selected.row][this.selected.col] = null;
                this.selected.row = x;
                this.selected.col = y;
                this.selected = null;
                this.setState({virtual_board:this.state.virtual_board,validMoves:[]},()=>this.checkMate(this.state.virtual_board));
                this.turn = (this.turn=="white")?"black":"white";
                
                
            }
            }
            
        }
        else
        {
        if(this.turn === obj.color){
        if(this.selected!==obj){
            this.eraseValidMoves();
        }
        this.selected = obj;
        let moves = obj.getValidMoves(this);
        this.setState({validMoves:moves},()=>this.checkMate(this.state.virtual_board));
        
        }

        }
        
       
    }


    }

    isValid(x,y){
        for (let w of this.state.validMoves){
              
            if(x==w[0]&&y==w[1]){
                return true;
            }
        }
        return false;
    }

    checkMate(board){
        if(this.checkMateWhite(board)){
            
            this.whiteMate = true;
        }
        if(this.checkMateBlack(board)){
            
            this.blackMate  = true;
        }
    }

    render(){

        let elements = [];
        let startColor = "white";
        let valid = false;
        for (let x = 0 ; x<8;x++){
            
            for(let y = 0; y<8;y++){
                
                if(this.isValid(x,y)){ 
                    valid = true;
                }
                else{
                    valid=false;
                }
                
                elements.push(<Square square_color =  {startColor} valid = {valid} onClick = {()=>this.onSquareClicked(this.state.virtual_board[x][y],x,y)}  piece = {this.state.virtual_board[x][y]}>
                   
                </Square>);
                if(startColor === "white"){
                    startColor = "black";
                }else
                {
                    startColor = "white";
                }
            }
            if(startColor === "white"){
                startColor = "black";
            }else
            {
                startColor = "white";
            }
            elements.push(<div id = "break"/>)
        }
        return (
            <div className = "board_container">
            
            {elements}
          
            </div>
        );
    }


}

export default Board;