({ // eslint-disable-line
    init: function (cmp) {
        var columns = [
            {
                type: 'text',
                fieldName: 'accountName',               
                label: 'Service Group Families',
                initialWidth: 300
            },
            
        ];
            
            cmp.set('v.gridColumns', columns);
            
            // data
            var nestedData = [
            {
            "name": "123555",
            "accountName": "Rewis Inc"
            
            },
            
            {
            "name": "123556",
            "accountName": "Acme Corporation",
            
            "_children": [
            {
            "name": "123556-A",
            "accountName": "Acme Corporation (Bay Area)",
            
            "_children": [
            {
            "name": "123556-A-A",
            "accountName": "Acme Corporation (Oakland)"
            
            },
            {
            "name": "123556-A-B",
            "accountName": "Acme Corporation (San Francisco)"
            
            }
        ]
        },
    
    
    ]
},
 
 
 
 
 ];
 
 cmp.set('v.gridData', nestedData);


var expandedRows = ["123556", "123556-A", "123556-B", "123556-B-B", "123557"];

cmp.set('v.gridExpandedRows', expandedRows);
},
    scrolltop:function(cmp){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
        partposi:function(cmp){
            var prtposi = document.getElementById("content");
            prtposi.scrollIntoView();            
        }
}); // eslint-disable-line