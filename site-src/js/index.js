var reference = {
    $gt: {
        text: 'Select items where the value is greater than the query value',
        code: 'let filtered = filter(users)({age: {$gt: 20}});'
    },
    $gte: {
        text: 'Select items where the value is greater than or equal to the query value',
        code: 'let filtered = filter(users)({age: {$gte: 20}});'
    },
    $lt: {
        text: 'Select items where the value is less than the query value',
        code: 'let filtered = filter(users)({age: {$lt: 20}});'
    },
    $lte: {
        text: 'Select items where the value is less than or equal to the query value',
        code: 'let filtered = filter(users)({age: {$lte: 20}});'
    },
    $in: {
        text: 'Select items that are found in given array',
        code: "let filtered = filter(users)({name: {$in: ['David', 'Daniel', 'Clark']}});"
    },
    $nin: {
        text: 'Select items that are not found in given array',
        code: "let filtered = filter(users)({name: {$nin: ['David', 'Daniel', 'Clark']}});"
    },
    regex: {
        text: 'Select items by matching regex',
        code: "let filtered = filter(users)({name: /D.*/});"
    },
    equality: {
        text: 'Select items by matching by equality',
        code: "let filtered = filter(users)({name: 'David'});"
    }
}

window.onload = function() {

    setReference('$gt');

    var refList = document.getElementById('reference-list');

    for(var k in reference) {
        var aTag = document.createElement('a');

        aTag.className = 'reference-link';
        aTag.setAttribute('href', '#');
        aTag.innerHTML = k;

        (function() {

            var _k = k;

            aTag.addEventListener('click', function(e) {
                e.preventDefault();
                setReference(_k);
            });
        })();

        refList.appendChild(aTag);
    }
};

function setReference(ref) {
    document.getElementById('reference-title').innerHTML = ref;
    document.getElementById('reference-text').innerHTML  = reference[ref].text;
    document.getElementById('reference-code').innerHTML  = js_beautify(reference[ref].code);
}