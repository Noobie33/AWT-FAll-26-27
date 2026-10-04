function getStudentdata()
{
  return new Promise((resolve,reject) =>{
    console.log("Getting Student Result.....");
    
    setTimeout(()=>{
      const success = true;
      if(succes){
        
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
    console.log("ID:",student.id);
    console.log("Name:",student.name);
    console.log("Department:",student.department);
    console.log("Marks:",student.marks);
    
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
displayStudent();
  
