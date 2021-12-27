import chai from "chai";
import chaiHttp from "chai-http";
import app from "./app";
const should = chai.should();
chai.use(chaiHttp);

describe("User", () => {
  it("Get all user on /user GET");
  it("Get a single user on /user GET");
  it("Add a single user on /user POST");
  it("Update single user on /user PUT");
  it("Delete single user on /user DELETE");
});
it("Get all user from /user GET", (done) => {
  chai
    .request(app)
    .get("/user")
    .end((req, res) => {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a("array");
    });
});

it("Add a single user on /user POST", (done) => {
    chai.request(app).post('/user').end((req,res)=>{
        res.should.have.status(200),
        res.should.be.json,
        res.body.should.have.property('SUCCESS'),
        res.body.SUCCESS.should.be.a('object'),
        res.body.SUCCESS.should.have.property('email');
        res.body.SUCCESS.should.have.property('name');
        res.body.SUCCESS.should.have.property('_id');
    })
});
