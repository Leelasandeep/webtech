var c;

           function radioaction(){
            if(document.getElementById("evenorodd").checked==true)
                {
                    document.getElementById("d1").innerHTML="enter any number to find weather it is even or odd";
                }
                if(document.getElementById("grades").checked==true)
                {
                    document.getElementById("d1").innerHTML="enter the marks between 1 to 100 to know the grade";
                }
                if(document.getElementById("factorial").checked==true)
                {
                    document.getElementById("d1").innerHTML="enter a number to find factorial of it.";
                }
                if(document.getElementById("fib").checked==true)
            
                {
                  
                    document.getElementById("d1").innerHTML="enter a number to find fibnooci series in that range";
                }
           }
             
            function increament(){
            
                c= document.getElementById("a").value;
           
                
             
               document.getElementById("a").value=++c;

            }
            function decreament(){
            
       
                c= document.getElementById("a").value;
                
             
            document.getElementById("a").value=--c;

         }

         function mfunc()
            { c= Number(document.getElementById("a").value);
                
                if(document.getElementById("evenorodd").checked==true)
                {
                    
                    evenorodd();
                }
                if(document.getElementById("grades").checked==true)
                {
                    
                    Grades();
                }
                if(document.getElementById("factorial").checked==true)
                {
                    
                    fact();
                }
                if(document.getElementById("fib").checked==true)
                {
                    
                    fibnooci();
                }



            }
        function evenorodd()
            {
                if(c%2==0)
            {
                document.getElementById("d").innerHTML="this number is even";
            }
            else
            {
                document.getElementById("d").innerHTML="this number is odd";
               
            }
            }
        function Grades()
        {
           
            switch(true){
                case (c<40 && c>0):document.getElementById("d").innerHTML="F grade";
                break;
                case (c<50 && c>39):document.getElementById("d").innerHTML="D grade";
                break;
                case(c>=50&&c<=60):document.getElementById("d").innerHTML="C grade";
                break;
                case(c>60&&c<=79):document.getElementById("d").innerHTML="B grade";
                break;
                case(c>79&&c<=80):document.getElementById("d").innerHTML="A grade";
                break;
                case(c>80&&c<=100):document.getElementById("d").innerHTML="S grade";
                break;
                default:alert("enter the values between 1 to 100 only");
            }
        }
        function fact()
        { var factorial=1; var i;
        
            if(c<0){
                document.getElementById("d").innerHTML="enter positive values only";
            }
            else{
                for(i=1;i<=c;++i)
                {
                    factorial=factorial*i;
                }
                document.getElementById("d").innerHTML="factorial is   "+factorial;
            }

        }
        function fibnooci()
        {
            var f1 = 0, f2 = 1, i;
            var ar=[];  
  
    if (c < 1) {

        document.getElementById("d").innerHTML="enter only positive numbers";
    }
       
  
    for (i = 1; i <= c; i++)  
    {  ar[i]=f2;
        
        var next = f1 + f2;  
        f1 = f2;  
        f2 = next;  
    }  
        c=ar.toString();
        document.getElementById("d").innerHTML=c;
    
        }