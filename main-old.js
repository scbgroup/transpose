define(['base/js/namespace'], 

function(Jupyter) {
    var exports = {};

    var transpose = function ()  {    
        var s = prompt("Enter data in columns:");
        var s = s.replace(/(?:\r\n|\r|\n)/g, '\n');
        var s = s.replace(/(?:\t)/g, ',');
        if (s[s.length-1] = "\n") {
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

        //alert(ta);

        for (var ii = 0; ii < ta.length; ii++) {
            ta[ii] = ta[ii].join(',');
            }
        t = ta.join('\n');
        alert(t);
        };

//     var transpose_button = function () {
//         if (!IPython.toolbar) {
//             $([IPython.events]).on("app_initialized.NotebookApp", transpose_button);
//             return;
//         }
//         if ($("#transpose").length === 0) {
//             IPython.toolbar.add_buttons_group([
//                 {
//                     'label'   : 'Transpose column data',
//                     'icon'    : 'fa-hand-o-right',
//                     'callback': transpose,
//                     'id'      : 'transpose'
//                 },
//             ]);
//         }
//     };

    var action = {
        icon: 'fa-hand-o-right', // a font-awesome class used on buttons, etc
        help    : 'Transpose column data',
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


	


// define([
//     'base/js/namespace'
// ], function(Jupyter) {
//     var exports = {};
// 
//     var transpose= function() {    
//         var s = prompt("Enter data in columns:");
//         var s = s.replace(/(?:\r\n|\r|\n)/g, '\n');
//         var s = s.replace(/(?:\t)/g, ',');
// 
//         var sa = s.split('\n');
//         for (var ii = 0; ii < sa.length; ii++) {
//             sa[ii] = sa[ii].split(',');
//             }
//     
//         //https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript#17428705
//         var ta = sa[0].map(function(col, i) { 
//             return sa.map(function(row) { 
//                 return row[i] 
//             })
//         });
// 
//         //alert(ta);
// 
//         for (var ii = 0; ii < ta.length; ii++) {
//             ta[ii] = ta[ii].join(',');
//             }
//         t = ta.join('\n');
//         alert(t);
// 	};
// 
//     // Show counts of cell types
//     var show_stats = function() {
// 
//         // Get counts of each cell type
//         var cells = Jupyter.notebook.get_cells();
//         var hist = {};
//         for(var i=0; i < cells.length; i++) {
//             var ct = cells[i].cell_type;
//             if(hist[ct] === undefined) {
//                 hist[ct] = 1;
//             } else {
//                 hist[ct] += 1;
//             }
//         }
// 
//         // Build paragraphs of cell type and count
//         var body = $('<div>');
//         for(var ct in hist) {
//             $('<p>').text(ct+': '+hist[ct]).appendTo(body);
//         }
// 
//         // Show a modal dialog with the stats
//         Jupyter.dialog.modal({
//             title: "Notebook Stats",
//             body: body,
//             buttons : {
//                 "OK": {}
//             }
//         });
//     };
// 
//     // Wait for notification that the app is ready
//     exports.load_ipython_extension = function() {
//         // Then register command mode hotkey "s" to show the dialog
//         Jupyter.keyboard_manager.command_shortcuts.add_shortcut('s', show_stats);
//     };
// 
//     return exports;
// });