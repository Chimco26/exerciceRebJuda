using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp3
{
    class Judge
    {
        public static void Decree(Prisoner p1, Prisoner p2)
        {
            if (p1.IsRecognizes && p2.IsRecognizes)
            {
                p1.LengthOfSentence = 3;
                p2.LengthOfSentence = 3;
            }
            else if(!p1.IsRecognizes && !p2.IsRecognizes)
            {
                p1.LengthOfSentence = 7;
                p2.LengthOfSentence = 7;
            }
            else if(p1.IsRecognizes)
            {
                p1.LengthOfSentence = 1;
                p2.LengthOfSentence = 10;
            }
            else
            {
                p1.LengthOfSentence = 10;
                p2.LengthOfSentence = 1;
            }
        }
    }
}
