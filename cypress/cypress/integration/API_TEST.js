describe("Account Recovery", function () {

it('Get Account Recovery', function () {
	cy.request({
		method: 'get',
		followeREdirect: false, log: true,// turn off following redirects
		url: 'https://id-test.yousee.dk/api/v0/standalone/password-recovery/quick-start',
		headers: {
			'accept': 'application/json'

		},
		responce: []
	})
	.then((responce) => {

		cy.log(responce.body)
		assert.equal(responce.status,200);
		expect(responce.body).to.not.be.null;

	})
});

});