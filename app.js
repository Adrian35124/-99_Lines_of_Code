let friends = ["Jon", "Brian", "Jose", "Rodrigo", "Jessica"]
for (let i = 0; i < friends.length; i++) {
   for (let index = 99; index > 0; index--) {
       if (index === 2)
       console.log(index + " line of code in the file, " + index + " line of code; " + friends[i] + " strikes one out, clears it all out, " + (index - 1) + 'line of code in the file!');
   } else if(index === 1) {
    console.log(index + " lines of code in the file, " + index + " lines of code; " + friends[i] + " strikes one out, clear it all out, no more lines of code in the files");
   } else {
           console.log(index + " lines of code in the file, " + index + " lines of code; " + friends[i] + " takes one out debugs it out, " + (index - 1) +  "lines of code in the file!") 
        }
   } 
}
