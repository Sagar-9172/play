const{test,expect}=require('@playwright/test')

var userID;
test('Get the users',async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2')
    // console.log(await response.json())
    expect(response.status()).toBe(200)
    // console.log(response.status())
})
test('create user',async({request})=>{
    const response=await request.post('https://reqres.in/api/users',
    { data:{ first_name: "sagar",last_name: "nanavare" },
        headers:{'Accept':"Application/json"}
    }
    )
    // console.log(await response.json())
    expect(response.status()).toBe(201)
   var res= await response.json()
    userID=res.id
})
test('update user',async({request})=>{
    const response=await request.put('https://reqres.in/api/users/'+userID,
    { data:{ first_name: "saga",last_name: "nanavare" },
        headers:{'Accept':"Application/json"}
    }
    )
    // console.log(await response.json())
    expect(response.status()).toBe(200)

})
test('delete user',async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+userID)
    
    
    expect(response.status()).toBe(204)

})

