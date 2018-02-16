const FakeRepo = require('./fakeRepo');
const RunContract = require('./repoContractSpec');

RunContract(function() {
    return new FakeRepo()
});