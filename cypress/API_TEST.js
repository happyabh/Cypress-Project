describe("Pet store", function () {

it('Get store inventory', function () {
	cy.request({
		method: 'get',
		followeREdirect: false, log: true,// turn off following redirects
		url: 'https://petstore.swagger.io/v2/store/inventory',
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