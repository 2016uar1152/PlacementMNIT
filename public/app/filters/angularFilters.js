var app = angular.module('portalFilters', [])

.filter('package', function () {
    return function(package) {
        if(typeof package === 'string') {
            return package;
        } else {
            let programs = Object.keys(package);
            return package[programs[0]].ctc;
        }
    };
});
