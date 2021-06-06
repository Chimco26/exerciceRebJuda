using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfFinished = 0;
            Random rnd = new Random();
            Court courtTelAviv = new Court();
            for(int i = 0; i < 150; i++)
            {
                courtTelAviv.CreateTwoPrisoners();
                if(i % 20 == 0)
                {
                    courtTelAviv.Date++;
                }
                
            }
            for(int i = 0; i < 30; i++)
            {
                Prisoner p1 = new Prisoner(courtTelAviv.listPrisoners[rnd.Next(300)]);
                Console.WriteLine(i+1 + "_" + p1);
                if(p1.DateNow - p1.StartYear >= p1.LengthOfSentence)
                {
                    numberOfFinished++;
                }
            }
            Console.WriteLine("There are " + numberOfFinished + " prisoners that finished there sentence.");

        }
    }
}
