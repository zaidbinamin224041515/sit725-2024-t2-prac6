import { expect } from 'chai';
import request from 'request';

describe('Add Two Numbers API', () => {
    const url = 'http://localhost:3000/addTwoNumbers/3/5';

    it('returns status 200 if the API works', (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('returns the correct result (8) when adding 3 and 5', (done) => {
        request(url, (error, response, body) => {
            body = JSON.parse(body);
            expect(body.result).to.equal(8);
            done();
        });
    });

    it('returns a number as the result', (done) => {
        request(url, (error, response, body) => {
            body = JSON.parse(body);
            expect(body.result).to.be.a('number');
            done();
        });
    });

    it('returns status 400 if input is not a number', (done) => {
        request('http://localhost:3000/addTwoNumbers/a/b', (error, response, body) => {
            body = JSON.parse(body);
            expect(response.statusCode).to.equal(400);
            expect(body.result).to.be.null;
            done();
        });
    });
});
