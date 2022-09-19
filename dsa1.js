let lower="abcdefghijklmnopqrstuvwxyz";
S="masai";
sum=0;
for(i=0;i<S.length; i++)
  {
    for(j=0;j<lower.length;j++)
      {
        if(S[i]==lower[j])
        {
          sum=sum+j;
        }
      }
  }
console.log(sum);