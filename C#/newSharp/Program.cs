using System;

namespace newSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("please enter a month");
            int month = int.Parse(Console.ReadLine());

            Console.WriteLine("please enter a year");
            int year = int.Parse(Console.ReadLine());

            if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                Console.WriteLine("31 days");
            } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                Console.WriteLine("30 days");
            } else if(month == 2) {
                if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                Console.WriteLine("29 days");
            } else {
                Console.WriteLine("28 days");
            }
            }
            Console.WriteLine("Hello! please enter the day.");
            int day = int.Parse(Console.ReadLine());

            Console.WriteLine("Please enter the duration.");
            int duration = int.Parse(Console.ReadLine());

            // for (int i = 0; i < duration; i++) {
            //     if(day == 7) {
            //         day = 0;
            //     }
            //     day++;
            // }

            int rest = duration % 7;
            for(int i = 0; i < rest; i++) {
                if (day == 7) {
                    day = 0;
                }
                day++;
            }


            int one;
            int two;
            int tree;
            double total = 0;

            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine("Hello! please enter tree numbers");
                one = int.Parse(Console.ReadLine());
                two = int.Parse(Console.ReadLine());
                tree = int.Parse(Console.ReadLine());
                int average = (one + two + tree)/3;
                Console.WriteLine("the average of your numbers is {0}", average);
                total += average;
            }
            total /= 3;
            Console.WriteLine("The average of all the averages is {0}", total);
        }
    }
}
