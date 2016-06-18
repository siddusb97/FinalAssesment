var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../server.js");
var url = supertest("http://localhost:8080");
describe("Testing all routes", function(err){
  it("should handle the request and render html", function(done){
    url
        .get("/")
        .expect(200)
        .expect('Content-Type', /text/)
        .end(function(err,res){
          should.not.exist(err);
          res.text.should.match(/<!DOCTYPE html>/)
          done();
        });
});
//To test addPost request
it("should handle the request to add post", function(done){
  url
      .post("/addPost")
      .type('form')
      .send({Title:'Sachin Tendulkar',Subtitle:'God of cricket',Description:'Sachin Ramesh Tendulkar (Listeni/ˌsətʃɪn tɛnˈduːlkər/; born 24 April 1973) is a former Indian cricketer and captain, widely regarded as one of the greatest batsmen of all time.[4] He took up cricket at the age of eleven, made his Test debut on 15 November 1989 against Pakistan in Karachi at the age of sixteen, and went on to represent Mumbai domestically and India internationally for close to twenty-four years. He is the only player to have scored one hundred international centuries, the first batsman to score a double century in a One Day International, the holder of the record for the number of runs in both ODI and Test cricket, and the only player to complete more than 30,000 runs in international cricket.',Author:'Praveen'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        should.not.exist(err);
        res.text.should.match(/Post added!/)
        done();
      });
});
//To test getPosts request
it("should handle the request and send available posts", function(done){
  url
      .get("/getPosts")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        should.not.exist(err);
        var objArr=JSON.parse(res.text);
        console.log(objArr[objArr.length-1]);
        objArr[objArr.length-1].title.should.match(/Sachin Tendulkar/)
        done();
      });
});

});
