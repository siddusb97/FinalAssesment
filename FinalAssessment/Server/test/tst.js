var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("It should return 200", function(done){
    url
        .get("/")
        .expect(200)
        .expect('Content-Type', "text/html/")
        .end(function(err,res){
//expect(res.status).to.be.equal("200");
        //  res.should.have.status(200);
          //expect(res.text).to.be.equal("Hello!");
          res.status.should.be.equal(200);

          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .get("/getJsonFile/")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          res.body[0].should.be.json;
           res.body[0].should.have.property('Title');
           res.body[0].Title.should.equal("Mr. and Mrs. Ramachari");                //---------('Title,Year,Actors,Director,Plot,Released,Language,Country,Poster,Rating,Awards');
          var myObj = JSON.parse(res.text);
        console.log(res.body[0]);


          done();
        });
      });
});

describe("Testing add New Movie route",function(err){
it("should add new movie and send back updated movie list",function(done){
url
    .post('/addNew')
    .type('form')
    .field('Content-Type', 'multipart/form-data')
    .field('title','Ranavikrama1')
    .field('year','2015')
    .field('actors','Puneeth Rajkumar, Sadhu Kokila, Arun Vijay, Rachita Ram')
    .field( 'director','M. Saravanan')
    .field('plot','A young man (Puneeth Rajkumar) finds himself in too deep after taking an injured protester to a hospital.')
    .field('released','2015-07-09')
    .field('language','Kannada')
    .field('country','India')
    .field('rating','9')
    .field('awards','N/A')
    .attach('poster',process.env.PWD+'/test/image/Chakravyuha22.jpg')
    .expect(302)
    .end(function(err,res){
      should.not.exist(err);
    res.status.should.be.equal(302);
           // res.body[0].should.have.property('Title');
      // res.body[0].Title.should.equal("Ranavikrama");
      //var myObj = JSON.parse(res.text);

      done();

    });


});

});


describe("Testing delete  Movie route",function(err){
it("should delete movie and send back updated movie list",function(done){
url
    .get('/deleteMovie?title=Ranavikrama1')
    .expect(302)
    .end(function(err,res){
      should.not.exist(err);
    res.status.should.be.equal(302);

      done();

    });

});
});


describe("Testing Update Movie route",function(err){
it("should update movie and send back updated movie list",function(done){
url
    .post('/updateDetails')
    .type('form')
    .field('Content-Type', 'multipart/form-data')
    .field('title','Kishore')
    .field('year','2019')
    .field('actors','Puneeth1 Rajkumar, Sadhu Kokila, Arun Vijay, Rachita Ram')
    .field( 'director','Mr. Saravassssssssssn')
    .field('plot','A young man (Puneeth Rajkumar) finds himself in too deep after taking an injured protester to a hospital.')
    .field('released','2015-08-09')
    .field('language','Kannada,English')
    .field('country','India,Russia')
    .field('rating','7')
    .field('awards','N/A')
    .attach('poster',process.env.PWD+'/test/image/D3.js - Bar Chart & Sorting.jpg')
    .expect(302)
    .end(function(err,res){
      should.not.exist(err);
    res.status.should.be.equal(302);


      done();

    });


});

});
