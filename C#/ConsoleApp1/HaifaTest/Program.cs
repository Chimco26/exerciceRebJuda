using System;

namespace HaifaTest
{
    class Program
    {
        static void Main(string[] args)
        {
            bool loop = true;
            while(loop)
            {
                Console.WriteLine("Please choose your student category: 1 for a standart student, 2 for a family student, and 3 for a scholarship student.");
                int stu = int.Parse(Console.ReadLine());

                Console.WriteLine("Please enter your name.");
                string name = Console.ReadLine();

                Console.WriteLine("Please enter your id.");
                long id = long.Parse(Console.ReadLine());

                switch (stu)
                {
                    case 1:
                        try
                        {
                            City.Add(new Student(name, id));
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
                        }
                        break;
                    case 2:
                        Console.WriteLine("Please enter your level.");
                        int level = int.Parse(Console.ReadLine());
                        try
                        {
                            City.Add(new FamilyStudent(name, id, level));
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
                        }
                        break;
                    case 3:
                        Console.WriteLine("Please enter your scholarship amont.");
                        int amont = int.Parse(Console.ReadLine());
                        try
                        {
                            City.Add(new ScholarshipStudent(name, id, amont));
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
                        }
                        break;
                }
                

                
                if (University.numOfStudents.Count == 5)
                    loop = false;
            };
            City.PrintDetails();
        }
    }
}
