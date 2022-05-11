var Converter = require('api-spec-converter');

Converter.convert({
    from: 'openapi_3',
    to: 'swagger_2',
    source: 'http://localhost:9080/femp-srv-ofert-ini-parcelado-ches/openapi.json',
}).then(function(converted) {
    console.log(converted.stringify());
});

