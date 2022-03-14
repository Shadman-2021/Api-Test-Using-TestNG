const axios = require("axios");
const { expect, assert } = require("chai");

describe("Testing",async function(){

    it("Test 001", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(response.data.code, 20);
        });
    });

    it("Test 002", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(response.status, "OK");
        });
    });

    it("Test 003", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.lengthOf(response.results, 10);
        });
    });

    it("Test 004", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.city), 'string');
        });
    });

    it("Test 005", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.latitude), 'number');
        });
    });

    it("Test 006", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.longitude), 'number');
        });
    });

    it("Test 007", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.elevation), 'number');
        });
    });

    it("Test 008", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.country), 'string');
        });
    });

    it("Test 009", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.country_code), 'string');
        });
    });

    it("Test 010", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.timezone), 'string');
        });
    });

    it("Test 011", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.results.locaion.local_offset), 'number');
        });
    });

    it("Test 012", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.timeformat), 'string');
        });
    });

    it("Test 013", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.school), 'string');
        });
    });

    it("Test 014", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.juristic), 'string');
        });
    });

    it("Test 015", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.highlat), 'string');
        });
    });

    it("Test 016", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.fajr_angle), 'number');
        });
    });

    it("Test 017", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            assert.equal(typeof(response.settings.isha_angle), 'number');
        });
    });

    it("It will be return 200", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            console.log(response.data.code);
        });
    });

    it("It will be return Faridpur", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            console.log(response.data.results.location.city);
        });
    });

    it("It will be return Bangladesh", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            console.log(response.data.results.location.country);
        });
    });

    it("It will be return BD", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            console.log(response.data.results.location.country_code);
        });
    });

    it("It will be return Asia/Dhaka", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            console.log(response.data.results.location.timezone);
        });
    });

    it("School Test", async function(){
        axios.get("https://api.pray.zone/v2/times/tomorrow.json?city="+"Faridpur")
        .then(function(response){
            let s = response.data.settings.school;
            assert.equal(response.data.settings.school, s);
        });
    });
});