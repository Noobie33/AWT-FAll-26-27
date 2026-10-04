function getStudentResult()
{
  return new Promise((resolve,reject) =>{
    console.log("Getting Student Result.....");
    
    setTimeout(()=>{
      const success = true;
      if(success){
        
         resolve(
    
    {
      id:"23-52849-2",
      name:"Setu",
      department:"CSE",
      marks:90
    });
  }
    else{
      reject("Failed to retrieve student result");
    }
    },3000);
  });
}
async function displayResult()
{
  try{
    const result= await getStudentResult();
    console.log("Student Result Received");
    console.log("ID:",result.id);
    console.log("Name:",result.name);
    console.log("Department:",result.department);
    console.log("Marks:",result.marks);
    
  }
  catch(error)
    {
      console.log("Error:",error);
    }
  finally
  {
    console.log("Result processing completed.");
  }
  
}
displayResult();
  
