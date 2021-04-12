// `<!DOCTYPE html> 
// <html lang="en"> 
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Portfolio Demo</title>
// </head>
// <body>`

// const generatePage = (teamInfo) => {
//   console.log('test', teamInfo)
//   if(teamInfo === teamInfo[0]){
//     return `
//     <div class='manager'>
//       <h1>${teamInfo[0].name}</h1>
//       <h2>Employee Id:</h2>
//       <p>${teamInfo[0].id}</p>
//       <h2>Employee Email:</h2>
//       <p>${teamInfo[0].email}</p>
//       <h2>Office Number:</h2>
//       <p>${teamInfo[0].officeNumber}</p>
//     `;
//   } if(teamInfo === teamInfo[1]){
//     return `
//     <div class='engineer'>
//       <h1>${teamInfo[1].name}</h1>
//       <h2>Employee Id:</h2>
//       <p>${teamInfo[1].id}</p>
//       <h2>Employee Email:</h2>
//       <p>${teamInfo[1].email}</p>
//       <h2><a href="https://github.com/${teamInfo[1].github}">Github</a></h2> 
//     `;
//   }



//   `</body>
//     </html>`;
// }

 const generatePage = (teamInfo) => {
   console.log('test', teamInfo)
   return `    <!DOCTYPE html> 
   <html lang="en"> 
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Team Profile</title>
   </head>
 
   <body>
     <h1>${teamInfo[0].name}-Manager</h1>
     <h2>Employee Id:</h2>
       <p>${teamInfo[0].id}</p>
       <h2>Employee Email:</h2>
       <p>${teamInfo[0].email}</p>
      <h2>Office Number:</h2>
      <p>${teamInfo[0].officeNumber}</p>
      <h1>${teamInfo[1].name}-Engineer</h1>
     <h2>Employee Id:</h2>
       <p>${teamInfo[1].id}</p>
       <h2>Employee Email:</h2>
       <p>${teamInfo[1].email}</p>
     <h2><a href="https://github.com/${teamInfo[1].github}">Github</a></h2> 
     <h1>${teamInfo[2].name}-Intern</h1>
     <h2>Employee Id:</h2>
       <p>${teamInfo[2].id}</p>
       <h2>Employee Email:</h2>
       <p>${teamInfo[2].email}</p>
      <h2>School:</h2>
      <p>${teamInfo[2].school}</p>
   </body>
   </html>
   `;
 };

  module.exports = generatePage;