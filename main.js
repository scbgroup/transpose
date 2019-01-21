define(['base/js/namespace'], 

function(Jupyter) {
    var exports = {};

    var transpose = function ()  {    
        
        theCell=Jupyter.notebook.get_selected_cell()
        var s=theCell.get_text()
        
        var s = s.replace(/(?:\r\n|\r|\n)/g, '\n');
        var s = s.replace(/(?:\t)/g, ',');
        if (s[s.length-1] == "\n") {
            s = s.slice (0, -1);
            }

        var sa = s.split('\n');
        for (var ii = 0; ii < sa.length; ii++) {
            sa[ii] = sa[ii].split(',');
            }
    
        //https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript#17428705
        var ta = sa[0].map(function(col, i) { 
            return sa.map(function(row) { 
                return row[i] 
            })
        });

        for (var ii = 0; ii < ta.length; ii++) {
            ta[ii] = ta[ii].join(',');
            }
        t = ta.join('\n');
		
		theCell.set_text(t)

        //alert(t);
        };


    var action = {
        icon: 'fa-hand-o-right', // a font-awesome class used on buttons, etc
        help    : 'Transpose column data in selected cell',
        help_index : 'xx',
        handler : transpose
    };
    
    var prefix = 'scb_extension';
    var action_name = 'transpose';

    var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'scb_extension:transpose'


    function load_ipython_extension(){
        Jupyter.toolbar.add_buttons_group([full_action_name]);
        //transpose_button();
        console.info('Transpose Extension Loaded');
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});

