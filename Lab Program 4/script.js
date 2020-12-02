function LMV(str){
    for(i=0;i<str.length;i++)
    {
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u')
        {
            return ("Left most vovel of " + str + " is at location " + (i+1));
        }
    }
    return ("No vowels found for the string "+str);
}

function reverse(num){
    reverse_num = 0;
    temp = num;
    if(isNaN(num)){
        return "Not a number"
    }
    while(num!=0){
        reverse_num *=10;
        reverse_num +=num% 10;
        num -=num%10;
        num = Math.floor(num/10);
    }
    return "Reverse of a num "+temp+ " is " +reverse_num;
}