



class Connect4{
    constructor(selector){
        this.rows=6;
        this.columns=7;
        this.selector=selector;
        this.createGrid();        
        this.setEventListeners();
    }

    createGrid()
    {
        const $board=$(this.selector);
        for(let row=0; row<this.rows; row++){
            const $row=$('<div>').addClass('row');
                for(let col=0; col<this.columns; col++){
                    const $col=$('<div>').addClass('column empty').attr('data-col',col).attr('data-row',row);
                    $row.append($col);
                }
            $board.append($row);
            }
    }

    setEventListeners()
    {
        const $board=$(this.selector);

        function findLastEmptyCell(col)
        {
            const cells=$(`.column[data-col='${col}']`);
            console.log('cells',cells);
            // length = 5
            for(let i=cells.length-1; i>=0; i--){
                const $cell=$(cells[i]);
                if($cell.hasClass('empty') ){
                    return $cell;
                }
            }
            return null;
        }

        // hover over col that has both col and empty class
        $board.on('mouseenter','.column.empty',function(e)
        {
            console.log('cell',this);
            const col=$(this).data('col');
            console.log('data-col',col);

            const $lastEmptyCell=findLastEmptyCell(col);
            $lastEmptyCell.addClass('next-red');
        });

        $board.on('mouseleave','.column',function()
        {
            $('.column').removeClass('next-red');
        });

    }




}