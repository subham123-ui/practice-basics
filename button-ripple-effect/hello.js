function isPalindrome()
{
    var rem, temp, final=0;
    var number = Number (document.getElementById("N").value)
    temp=number;
    while(number>0)
    {
        rem=number%10;
        number=parseInt(number/10);
        final= final*10+rem;


    }
    if(final==temp){
      window.alert("the number is palindrome")}
      else
      {
        window.alert("the number is not palindrome")
      }
}


 

