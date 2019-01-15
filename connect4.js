



class Connect4{
    constructor(selector){
        this.rows=6;
        this.columns=7;
        this.selector=selector;
        this.createGrid();        
    }

    createGrid(){

        const $board=$(this.selector);
        for(let row=0; row<this.rows; row++){
                const $row=$('<div>').addClass('row');
            for(let col=0; col<this.columns; col++){
                const $col=$('<div>').addClass('column empty');
                $row.append($col);
                }
            $board.append($row);
            }
    }





}