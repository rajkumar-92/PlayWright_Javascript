import {test} from '@playwright/test';
/*const { test, expect } = require('@playwright/test');
 const loginPayLoad={userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}
let token;
test('raju',async({request})=>{
//const apiContext=await request.newContext();
const loginResponse=await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',
{
    data:loginPayLoad
})
expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson=loginResponse.json();
token=loginResponseJson.token;
console.log(token);

}) */


    //const baseUrl='https://reqres.in/api';
    test('Simple API Test -Assert response status',async({request})=>{
let response=await request.fetch('https://reqres.in/api/users/2',{
    method:"get"
});
console.log(response.json())
    })
    
   // expect(response.status().toBe(200));




