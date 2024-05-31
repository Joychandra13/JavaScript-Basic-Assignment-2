function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let kalo of str) {
    if (vowels.includes(kalo)) {
        count++;
        }
    }
  
    return count;
}

  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3