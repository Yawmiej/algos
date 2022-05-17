///C# program to create a new string taking the first 3 characters of a 
///given string and return the string with the 3 characters added at both the front 
///and back.If the given string length is less than 3, use whatever characters are there.
using System;
namespace Algo
{
    class program
    {
        public static string check(String str) 
        {
            {
                if (str.Length <3)
                {
                    return str + str + str;
                }
                else
                {
                    string front = str.Substring(0,3);
                    return front + str + front;                   
                }
            }
        }

        static void Main(string[] args)
        {
           Console.WriteLine(check("WALTER"));
           Console.WriteLine(check("FUAD"));
           Console.WriteLine(check("DAVID"));
           Console.WriteLine(check("FEMI"));
           Console.WriteLine(check("LATEEF"));
        }
    }
}
